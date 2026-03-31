import { useRef, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import ParticlesBackground from '../components/common/ParticlesBackground';
import { useLanguage } from '../context/LanguageContext';
import { blogPostsByLang } from '../constants/blogPosts';

gsap.registerPlugin(ScrollTrigger);

const BlogPage = () => {
    const { language, t } = useLanguage();
    const posts = blogPostsByLang[language] || blogPostsByLang.es;
    const progressRef = useRef(null);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr + 'T00:00:00');
        return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    };

    useEffect(() => {
        const frameId = requestAnimationFrame(() => {
            // ─── PROGRESS BAR ───
            if (progressRef.current) {
                gsap.to(progressRef.current, {
                    scaleX: 1, ease: 'none',
                    scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
                });
            }

            // ─── HERO: auto-play char animation (no pin) ───
            const heroChars = document.querySelectorAll('.hero-char');
            if (heroChars.length) {
                gsap.set(heroChars, { opacity: 0, y: 80, rotateX: -90, scale: 0.5 });
                gsap.to(heroChars, {
                    opacity: 1, y: 0, rotateX: 0, scale: 1,
                    duration: 0.8, stagger: 0.04, ease: 'back.out(1.7)', delay: 0.3,
                });

                // Subtitle wipe
                gsap.set('#hero-subtitle', { clipPath: 'inset(0 100% 0 0)' });
                gsap.to('#hero-subtitle', {
                    clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power3.inOut', delay: 0.8,
                });

                // CTA button fade in
                gsap.set('#hero-cta', { y: 20, opacity: 0 });
                gsap.to('#hero-cta', { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 1.4 });

                // Scroll indicator fade in + bounce
                gsap.set('#scroll-hint', { opacity: 0 });
                gsap.to('#scroll-hint', { opacity: 1, duration: 0.5, delay: 1.8 });
                gsap.to('#scroll-dot', { y: 10, duration: 0.75, repeat: -1, yoyo: true, ease: 'power1.inOut', delay: 1.8 });
            }

            // Hero parallax on scroll
            gsap.to('#hero-content', {
                yPercent: -20, ease: 'none',
                scrollTrigger: { trigger: '#blog-hero', start: 'top top', end: 'bottom top', scrub: true },
            });

            // ─── BLOG CARDS: 3D perspective entrance ───
            gsap.utils.toArray('.blog-card').forEach((card, i) => {
                gsap.set(card, {
                    opacity: 0,
                    rotateY: i % 2 === 0 ? -15 : 15,
                    rotateX: 5,
                    x: i % 2 === 0 ? -100 : 100,
                    scale: 0.85,
                });
                gsap.to(card, {
                    opacity: 1, rotateY: 0, rotateX: 0, x: 0, scale: 1,
                    duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' },
                });
            });

            // ─── ACCENT BARS: animated width ───
            gsap.utils.toArray('.accent-bar').forEach((bar) => {
                gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' });
                gsap.to(bar, {
                    scaleX: 1, duration: 0.8, ease: 'power2.out',
                    scrollTrigger: { trigger: bar, start: 'top 90%', toggleActions: 'play none none reverse' },
                });
            });

            // ─── TAGS: cascade pop-in ───
            gsap.utils.toArray('.tag-group').forEach((group) => {
                const tags = group.querySelectorAll('.blog-tag');
                gsap.set(tags, { scale: 0, opacity: 0 });
                gsap.to(tags, {
                    scale: 1, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(2)',
                    scrollTrigger: { trigger: group, start: 'top 90%', toggleActions: 'play none none reverse' },
                });
            });

            // ─── READ MORE: arrow slide ───
            gsap.utils.toArray('.read-arrow').forEach((arrow) => {
                gsap.set(arrow, { x: -20, opacity: 0 });
                gsap.to(arrow, {
                    x: 0, opacity: 1, duration: 0.5, ease: 'power2.out',
                    scrollTrigger: { trigger: arrow, start: 'top 92%', toggleActions: 'play none none reverse' },
                });
            });
        });

        return () => cancelAnimationFrame(frameId);
    }, []);

    // ─── MAGNETIC HOVER: card follows cursor with 3D tilt ───
    const handleMouseMove = useCallback((e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
            rotateY: x * 15,
            rotateX: -y * 10,
            scale: 1.03,
            boxShadow: `${x * 30}px ${y * 30}px 60px rgba(0, 200, 255, 0.15)`,
            duration: 0.4, ease: 'power2.out',
        });
        // Glow follows cursor
        const glow = card.querySelector('.card-glow');
        if (glow) {
            gsap.to(glow, {
                x: x * 100, y: y * 100, opacity: 0.15,
                duration: 0.4, ease: 'power2.out',
            });
        }
    }, []);

    const handleMouseLeave = useCallback((e) => {
        const card = e.currentTarget;
        gsap.to(card, {
            rotateY: 0, rotateX: 0, scale: 1, boxShadow: 'none',
            duration: 0.6, ease: 'elastic.out(1, 0.5)',
        });
        const glow = card.querySelector('.card-glow');
        if (glow) gsap.to(glow, { opacity: 0, duration: 0.3 });
    }, []);

    // Split title into chars
    const titlePrefix = t('blog.title_prefix');
    const titleHighlight = t('blog.title_highlight');
    const fullTitle = `${titlePrefix} ${titleHighlight}`;

    const breadcrumbJsonLd = {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": t('seo.landing.breadcrumb_home'), "item": "https://www.abrahamblancob.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.abrahamblancob.com/blog" }
        ]
    };

    return (
        <>
            <Helmet>
                <html lang={language} />
                <title>{t('seo.blog.title')}</title>
                <meta name="description" content={t('seo.blog.description')} />
                <link rel="canonical" href="https://www.abrahamblancob.com/blog" />
                <meta property="og:title" content={t('seo.blog.title')} />
                <meta property="og:description" content={t('seo.blog.og_description')} />
                <meta property="og:url" content="https://www.abrahamblancob.com/blog" />
                <meta property="og:image" content="https://www.abrahamblancob.com/profile-hero-hq.jpg" />
                <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />
                <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
            </Helmet>

            {/* Progress bar */}
            <div ref={progressRef} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left" style={{ scaleX: 0 }} />

            {/* ═══ HERO ═══ */}
            <Section id="blog-hero" className="min-h-[45vh] flex items-center justify-center relative overflow-hidden pt-24 pb-4">
                <div className="absolute inset-0 overflow-hidden">
                    <ParticlesBackground />
                    <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl"></div>
                </div>

                <div id="hero-content" className="relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ perspective: '600px' }}>
                        {fullTitle.split('').map((char, i) => (
                            <span
                                key={i}
                                className={`hero-char inline-block ${i >= titlePrefix.length + 1 ? 'gradient-text' : 'text-white'}`}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h1>
                    <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                        {t('blog.subtitle')}
                    </p>

                    {/* CTA to latest article */}
                    {posts[0] && (
                        <Link id="hero-cta" to={`/blog/${posts[0].id}`}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                        >
                            <span>{t('blog.read_more')}: {posts[0].title.length > 40 ? posts[0].title.substring(0, 40) + '...' : posts[0].title}</span>
                            <ArrowRight size={20} />
                        </Link>
                    )}

                    {/* Scroll indicator */}
                    <div id="scroll-hint" className="mt-6">
                        <p className="text-slate-500 text-sm mb-3">{language === 'es' ? 'Más artículos' : 'More articles'}</p>
                        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2 mx-auto">
                            <div id="scroll-dot" className="w-1 h-2 bg-white/40 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ═══ BLOG CARDS ═══ */}
            <Section id="posts" className="bg-slate-900/50">
                <div className="max-w-4xl mx-auto space-y-12">
                    {posts.map((post, i) => (
                        <Link key={post.id} to={`/blog/${post.id}`}>
                            <div
                                className="blog-card mb-8 relative"
                                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Cursor-following glow */}
                                <div className="card-glow absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-0 pointer-events-none" />

                                <Card className="relative hover:bg-white/10 transition-colors duration-500 cursor-pointer group overflow-hidden">
                                    <div className={`accent-bar h-1.5 rounded-full bg-gradient-to-r ${post.color} mb-6`}></div>

                                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                                        <Calendar size={16} />
                                        <span>{formatDate(post.date)}</span>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                                        {post.title}
                                    </h2>

                                    <p className="text-slate-300 mb-6 leading-relaxed text-lg">{post.excerpt}</p>

                                    <div className="tag-group flex flex-wrap gap-2 mb-6">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className={`blog-tag text-xs px-3 py-1 rounded-full bg-gradient-to-r ${post.color} text-white font-medium`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="read-arrow flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all duration-300">
                                        <span>{t('blog.read_more')}</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Card>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default BlogPage;
