import { Helmet } from 'react-helmet-async';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import AnimatedElement from '../components/common/AnimatedElement';
import Card from '../components/common/Card';
import ParticlesBackground from '../components/common/ParticlesBackground';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../hooks/useProfile';

/**
 * Portfolio page - Displays projects
 */
const PortfolioPage = () => {
    const { language, t } = useLanguage();
    const profile = useProfile();

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
                "name": "Portfolio",
                "item": "https://www.abrahamblancob.com/portfolio"
            }
        ]
    };

    const projectsJsonLd = profile.projects.map((project) => ({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": project.url,
        "author": {
            "@type": "Person",
            "name": "Abraham Blanco",
            "url": "https://www.abrahamblancob.com"
        },
        "keywords": project.tags.join(", ")
    }));

    return (
        <>
            <Helmet>
                <html lang={language} />
                <title>{t('seo.portfolio.title')}</title>
                <meta name="description" content={t('seo.portfolio.description')} />
                <link rel="canonical" href="https://www.abrahamblancob.com/portfolio" />

                <meta property="og:title" content={t('seo.portfolio.title')} />
                <meta property="og:description" content={t('seo.portfolio.og_description')} />
                <meta property="og:url" content="https://www.abrahamblancob.com/portfolio" />
                <meta property="og:image" content="https://www.abrahamblancob.com/profile-hero-hq.jpg" />
                <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />

                <meta name="twitter:title" content={t('seo.portfolio.title')} />
                <meta name="twitter:description" content={t('seo.portfolio.og_description')} />
                <meta name="twitter:image" content="https://www.abrahamblancob.com/profile-hero-hq.jpg" />

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbJsonLd)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(projectsJsonLd)}
                </script>
            </Helmet>

            {/* Hero section */}
            <Section
                id="portfolio-hero"
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
                            {t('portfolio.title_prefix')} <span className="gradient-text">{t('portfolio.title_highlight')}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            {t('portfolio.subtitle')}
                        </p>
                    </AnimatedElement>
                </div>
            </Section>

            {/* Projects grid */}
            <Section id="proyectos" className="bg-slate-900/50">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {profile.projects.map((project, index) => (
                        <AnimatedElement
                            key={project.id}
                            variant="scaleIn"
                            delay={index * 0.15}
                        >
                            <Card className="h-full flex flex-col overflow-hidden p-0">
                                {/* Project image */}
                                {project.image && (
                                    <div className="w-full h-64 bg-slate-800/80 flex items-center justify-center">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-56 w-56 object-contain"
                                        />
                                    </div>
                                )}

                                <div className="p-6 flex flex-col flex-grow">
                                {/* Color accent bar */}
                                <div className={`h-1.5 rounded-full bg-gradient-to-r ${project.color} mb-6`}></div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 text-white font-medium`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <motion.a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 w-fit"
                                >
                                    {t('portfolio.visit_project')}
                                    <ExternalLink size={18} />
                                </motion.a>
                                </div>
                            </Card>
                        </AnimatedElement>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default PortfolioPage;
