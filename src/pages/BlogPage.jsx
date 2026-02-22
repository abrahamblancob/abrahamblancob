import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Section from '../components/common/Section';
import AnimatedElement from '../components/common/AnimatedElement';
import Card from '../components/common/Card';
import ParticlesBackground from '../components/common/ParticlesBackground';
import { useLanguage } from '../context/LanguageContext';
import { blogPostsByLang } from '../constants/blogPosts';

/**
 * Blog listing page - Displays all blog posts
 */
const BlogPage = () => {
    const { language, t } = useLanguage();
    const posts = blogPostsByLang[language] || blogPostsByLang.es;

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": t('seo.landing.breadcrumb_home'),
                "item": "https://www.abrahamblancob.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.abrahamblancob.com/blog"
            }
        ]
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr + 'T00:00:00');
        return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
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

                <meta name="twitter:title" content={t('seo.blog.title')} />
                <meta name="twitter:description" content={t('seo.blog.og_description')} />
                <meta name="twitter:image" content="https://www.abrahamblancob.com/profile-hero-hq.jpg" />

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbJsonLd)}
                </script>
            </Helmet>

            {/* Hero section */}
            <Section
                id="blog-hero"
                className="min-h-[45vh] flex items-center justify-center relative overflow-hidden pt-20"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <ParticlesBackground />
                    <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 text-center">
                    <AnimatedElement variant="slideUp">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            {t('blog.title_prefix')} <span className="gradient-text">{t('blog.title_highlight')}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            {t('blog.subtitle')}
                        </p>
                    </AnimatedElement>
                </div>
            </Section>

            {/* Blog posts grid */}
            <Section id="posts" className="bg-slate-900/50">
                <div className="max-w-4xl mx-auto space-y-8">
                    {posts.map((post, index) => (
                        <AnimatedElement
                            key={post.id}
                            variant="slideUp"
                            delay={index * 0.15}
                        >
                            <Link to={`/blog/${post.id}`}>
                                <Card className="hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                                    {/* Color accent bar */}
                                    <div className={`h-1.5 rounded-full bg-gradient-to-r ${post.color} mb-6`}></div>

                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                                        <Calendar size={16} />
                                        <span>{formatDate(post.date)}</span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {post.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${post.color} text-white font-medium`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read more */}
                                    <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                                        <span>{t('blog.read_more')}</span>
                                        <ArrowRight size={18} />
                                    </div>
                                </Card>
                            </Link>
                        </AnimatedElement>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default BlogPage;
