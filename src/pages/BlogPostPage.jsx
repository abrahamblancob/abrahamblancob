import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import AnimatedElement from '../components/common/AnimatedElement';
import Card from '../components/common/Card';
import ParticlesBackground from '../components/common/ParticlesBackground';
import LinkedInLogo from '../components/common/LinkedInLogo';
import { useLanguage } from '../context/LanguageContext';
import { getBlogPostBySlug, allBlogSlugs } from '../constants/blogPosts';

/**
 * Individual blog post page
 */
const BlogPostPage = () => {
    const { slug } = useParams();
    const { language, t } = useLanguage();
    const post = getBlogPostBySlug(slug, language);

    // If slug doesn't match any post, redirect to blog
    if (!allBlogSlugs.includes(slug)) {
        return <Navigate to="/blog" replace />;
    }

    // If post not found for current language (slug mismatch), redirect
    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const formatDate = (dateStr) => {
        const date = new Date(dateStr + 'T00:00:00');
        return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": "Abraham Blanco",
            "url": "https://www.abrahamblancob.com"
        },
        "publisher": {
            "@type": "Person",
            "name": "Abraham Blanco"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.abrahamblancob.com/blog/${post.id}`
        },
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

                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />

                <script type="application/ld+json">
                    {JSON.stringify(articleJsonLd)}
                </script>
            </Helmet>

            {/* Hero section */}
            <Section
                id="post-hero"
                className="min-h-[40vh] flex items-center justify-center relative overflow-hidden pt-20"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <ParticlesBackground />
                    <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <AnimatedElement variant="slideUp">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${post.color} text-white font-medium`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta info */}
                        <div className="flex items-center justify-center gap-4 text-slate-400">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{formatDate(post.date)}</span>
                            </div>
                            <span>•</span>
                            <span>{post.author}</span>
                        </div>
                    </AnimatedElement>
                </div>
            </Section>

            {/* Article content */}
            <Section id="article-content" className="bg-slate-900/50">
                <div className="max-w-3xl mx-auto">
                    <AnimatedElement variant="fadeIn" delay={0.2}>
                        <Card>
                            <div className="prose prose-invert max-w-none">
                                {post.content.map((block, index) => {
                                    if (block.type === 'heading') {
                                        return (
                                            <h2
                                                key={index}
                                                className="text-2xl font-bold text-white mt-8 mb-4 first:mt-0"
                                            >
                                                <span className="gradient-text">{block.text}</span>
                                            </h2>
                                        );
                                    }
                                    return (
                                        <p
                                            key={index}
                                            className="text-slate-300 leading-relaxed mb-4 text-lg"
                                        >
                                            {block.text}
                                        </p>
                                    );
                                })}
                            </div>

                            {/* LinkedIn link */}
                            {post.linkedinUrl && (
                                <div className="mt-10 pt-8 border-t border-slate-700">
                                    <p className="text-slate-400 mb-4 text-center">
                                        {t('blog.originally_posted')}
                                    </p>
                                    <div className="flex justify-center">
                                        <motion.a
                                            href={post.linkedinUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="inline-flex items-center gap-3 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-[#0A66C2]/50 transition-all duration-300"
                                        >
                                            <LinkedInLogo size={20} />
                                            {t('blog.view_on_linkedin')}
                                            <ExternalLink size={16} />
                                        </motion.a>
                                    </div>
                                </div>
                            )}
                        </Card>
                    </AnimatedElement>

                    {/* Back to blog */}
                    <AnimatedElement variant="fadeIn" delay={0.4}>
                        <div className="mt-8 text-center">
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium"
                            >
                                <ArrowLeft size={18} />
                                {t('blog.back_to_blog')}
                            </Link>
                        </div>
                    </AnimatedElement>
                </div>
            </Section>
        </>
    );
};

export default BlogPostPage;
