import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import TechStack from '../components/sections/TechStack';
import Contact from '../components/sections/Contact';
import { useLanguage } from '../context/LanguageContext';

/**
 * Landing page - Main page with all original sections
 */
const LandingPage = () => {
    const { language, t } = useLanguage();

    const personJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Abraham Blanco",
        "url": "https://www.abrahamblancob.com",
        "image": "https://www.abrahamblancob.com/profile-hero-hq.jpg",
        "jobTitle": language === 'es' ? "CTO / Gerente General" : "CTO / General Manager",
        "description": t('seo.landing.description'),
        "knowsAbout": ["Cloud Computing", "FinTech", "Microservices", "Google Cloud Platform", "Firebase", "React", "Python", "Java", "Digital Transformation"],
        "worksFor": {
            "@type": "Organization",
            "name": "Instituto Tecnológico Sitio Uno"
        },
        "sameAs": [
            "https://www.linkedin.com/in/abraham-blanco-791146b6/"
        ],
        "email": "abrahamblancob@gmail.com"
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": t('seo.landing.breadcrumb_home'),
                "item": "https://www.abrahamblancob.com/"
            }
        ]
    };

    return (
        <>
            <Helmet>
                <html lang={language} />
                <title>{t('seo.landing.title')}</title>
                <meta name="description" content={t('seo.landing.description')} />
                <link rel="canonical" href="https://www.abrahamblancob.com/" />

                <meta property="og:title" content={t('seo.landing.title')} />
                <meta property="og:description" content={t('seo.landing.og_description')} />
                <meta property="og:url" content="https://www.abrahamblancob.com/" />
                <meta property="og:image" content="https://www.abrahamblancob.com/profile-hero-hq.jpg" />
                <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />

                <meta name="twitter:title" content={t('seo.landing.title')} />
                <meta name="twitter:description" content={t('seo.landing.og_description')} />
                <meta name="twitter:image" content="https://www.abrahamblancob.com/profile-hero-hq.jpg" />

                <script type="application/ld+json">
                    {JSON.stringify(personJsonLd)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbJsonLd)}
                </script>
            </Helmet>

            <Hero />
            <About />
            <Experience />
            <TechStack />
            <Contact />
        </>
    );
};

export default LandingPage;
