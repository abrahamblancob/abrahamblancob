import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import ParticlesBackground from '../components/common/ParticlesBackground';
import LinkedInLogo from '../components/common/LinkedInLogo';
import { useLanguage } from '../context/LanguageContext';
import { getBlogPostBySlug, allBlogSlugs } from '../constants/blogPosts';

gsap.registerPlugin(ScrollTrigger);

const BlogPostPage = () => {
    const { slug } = useParams();
    const { language, t } = useLanguage();
    const post = getBlogPostBySlug(slug, language);
    const progressRef = useRef(null);

    if (!allBlogSlugs.includes(slug)) return <Navigate to="/blog" replace />;
    if (!post) return <Navigate to="/blog" replace />;

    const formatDate = (dateStr) => {
        const date = new Date(dateStr + 'T00:00:00');
        return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    };

    useEffect(() => {
        // Kill any leftover ScrollTriggers from previous page
        ScrollTrigger.getAll().forEach(st => st.kill());

        const frameId = requestAnimationFrame(() => {
            // ─── READING PROGRESS BAR ───
            if (progressRef.current) {
                gsap.to(progressRef.current, {
                    scaleX: 1, ease: 'none',
                    scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
                });
            }

            // ─── CONTENT: scrub-linked parallax on headings ───
            gsap.utils.toArray('.block-heading').forEach((h) => {
                gsap.to(h, {
                    backgroundSize: '100% 3px',
                    ease: 'none',
                    scrollTrigger: { trigger: h, start: 'top 80%', end: 'top 50%', scrub: true },
                });
            });

            // ─── IMAGE: parallax zoom + brightness on scroll ───
            const img = document.querySelector('.post-image');
            if (img) {
                gsap.fromTo(img,
                    { scale: 1.1, filter: 'brightness(0.7)' },
                    { scale: 1, filter: 'brightness(1)', ease: 'none',
                      scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } }
                );
            }

            // ─── HERO PARALLAX on scroll ───
            gsap.to('#post-title-block', {
                yPercent: -30, ease: 'none',
                scrollTrigger: { trigger: '#post-hero', start: 'top top', end: 'bottom top', scrub: true },
            });
        });

        return () => {
            cancelAnimationFrame(frameId);
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [slug]);

    const articleJsonLd = {
        "@context": "https://schema.org", "@type": "BlogPosting",
        "headline": post.title, "description": post.excerpt, "datePublished": post.date,
        "author": { "@type": "Person", "name": "Abraham Blanco", "url": "https://www.abrahamblancob.com" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.abrahamblancob.com/blog/${post.id}` },
        "keywords": post.tags.join(", ")
    };

    return (
        <>
            <Helmet>
                <html lang={language} />
                <title>{post.title} - Abraham Blanco Blog</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://www.abrahamblancob.com/blog/${post.id}`} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:url" content={`https://www.abrahamblancob.com/blog/${post.id}`} />
                <meta property="og:type" content="article" />
                <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />
                <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
            </Helmet>

            {/* Reading progress */}
            <div ref={progressRef} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left" style={{ scaleX: 0 }} />

            {/* ═══ HERO — CSS animations for entry, GSAP for parallax ═══ */}
            <Section id="post-hero" className="min-h-[32vh] flex items-center justify-center relative overflow-hidden pt-24 pb-4">
                <div className="absolute inset-0 overflow-hidden">
                    <ParticlesBackground />
                    <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl"></div>
                </div>

                <div id="post-title-block" className="relative z-10 text-center max-w-4xl mx-auto">
                    {/* Tags — CSS stagger animation */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {post.tags.map((tag, i) => (
                            <span
                                key={tag}
                                className={`text-xs px-4 py-1.5 rounded-full bg-gradient-to-r ${post.color} text-white font-medium animate-[popIn_0.4s_ease-out_both]`}
                                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title — CSS blur reveal */}
                    <h1
                        className="text-3xl md:text-5xl font-bold mb-3 leading-tight animate-[blurUp_0.8s_ease-out_0.5s_both]"
                    >
                        {post.title}
                    </h1>

                    {/* Meta — CSS fade */}
                    <div className="flex items-center justify-center gap-4 text-slate-400 text-lg animate-[fadeUp_0.5s_ease-out_0.9s_both]">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{formatDate(post.date)}</span>
                        </div>
                        <span>•</span>
                        <span>{post.author}</span>
                    </div>
                </div>
            </Section>

            {/* ═══ ARTICLE CONTENT ═══ */}
            <Section id="article-content" className="bg-slate-900/50">
                <div className="max-w-3xl mx-auto">
                    <Card>
                        <div className="prose prose-invert max-w-none">
                            {post.content.map((block, index) => {
                                if (block.type === 'heading') {
                                    return (
                                        <h2
                                            key={index}
                                            className="block-heading text-2xl font-bold text-white mt-8 mb-4 first:mt-0 bg-gradient-to-r from-primary to-accent bg-no-repeat bg-left-bottom"
                                            style={{ backgroundSize: '0% 3px' }}
                                        >
                                            <span className="gradient-text">{block.text}</span>
                                        </h2>
                                    );
                                }
                                if (block.type === 'image') {
                                    return (
                                        <div key={index} className="my-8 overflow-hidden rounded-lg">
                                            <img src={block.src} alt={block.alt || post.title}
                                                className="post-image w-full shadow-2xl border border-slate-700 rounded-lg" loading="lazy" />
                                            {block.caption && (
                                                <p className="text-slate-400 text-sm text-center mt-3 italic">{block.caption}</p>
                                            )}
                                        </div>
                                    );
                                }
                                if (block.type === 'list') {
                                    return (
                                        <ul key={index} className="space-y-3 mb-6">
                                            {block.items.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: 30 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                                    viewport={{ once: true, margin: '-50px' }}
                                                    className="flex items-start gap-3 text-slate-300 text-lg"
                                                >
                                                    <span className="mt-1.5 flex-shrink-0">{item.icon || '•'}</span>
                                                    <span><strong className="text-white">{item.title}</strong> {item.text}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true, margin: '-30px' }}
                                        className="text-slate-300 leading-relaxed mb-4 text-lg"
                                    >
                                        {block.text}
                                    </motion.p>
                                );
                            })}
                        </div>

                        {post.linkedinUrl && (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                className="mt-10 pt-8 border-t border-slate-700"
                            >
                                <p className="text-slate-400 mb-4 text-center">{t('blog.originally_posted')}</p>
                                <div className="flex justify-center">
                                    <motion.a
                                        href={post.linkedinUrl} target="_blank" rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(10, 102, 194, 0.5)' }}
                                        whileTap={{ scale: 0.97 }}
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A66C2] hover:bg-[#004182] rounded-xl font-semibold text-white transition-all duration-300"
                                    >
                                        <LinkedInLogo size={22} />
                                        {t('blog.view_on_linkedin')}
                                        <ExternalLink size={18} />
                                    </motion.a>
                                </div>
                            </motion.div>
                        )}
                    </Card>

                    <div className="mt-8 text-center">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium hover:gap-3 duration-300">
                            <ArrowLeft size={18} />
                            {t('blog.back_to_blog')}
                        </Link>
                    </div>
                </div>
            </Section>

            {/* CSS keyframes for hero animations */}
            <style>{`
                @keyframes popIn {
                    from { transform: scale(0); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                @keyframes blurUp {
                    from { transform: translateY(40px); opacity: 0; filter: blur(8px); }
                    to { transform: translateY(0); opacity: 1; filter: blur(0); }
                }
                @keyframes fadeUp {
                    from { transform: translateY(15px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </>
    );
};

export default BlogPostPage;
