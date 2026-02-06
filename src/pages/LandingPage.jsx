import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import TechStack from '../components/sections/TechStack';
import Contact from '../components/sections/Contact';

/**
 * Landing page - Main page with all original sections
 */
const LandingPage = () => {
    const personJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Abraham Blanco",
        "url": "https://www.abrahamblancob.com",
        "image": "https://www.abrahamblancob.com/profile-hero-hq.jpg",
        "jobTitle": "CTO / Gerente General",
        "description": "Profesional con más de 10 años combinando visión de negocio con arquitectura de software avanzada. Especialista en Cloud, FinTech y Escalabilidad.",
        "knowsAbout": ["Cloud Computing", "FinTech", "Microservicios", "Google Cloud Platform", "Firebase", "React", "Python", "Java", "Transformación Digital"],
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
                "name": "Inicio",
                "item": "https://www.abrahamblancob.com/"
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>Abraham Blanco - Liderazgo Tecnológico & Transformación Digital</title>
                <meta name="description" content="Abraham Blanco - Liderazgo Tecnológico & Transformación Digital. Más de 10 años combinando visión de negocio con arquitectura de software avanzada. Especialista en Cloud, FinTech y Escalabilidad." />
                <link rel="canonical" href="https://www.abrahamblancob.com/" />

                <meta property="og:title" content="Abraham Blanco - Liderazgo Tecnológico & Transformación Digital" />
                <meta property="og:description" content="Más de 10 años combinando visión de negocio con arquitectura de software avanzada. Especialista en Cloud, FinTech y Escalabilidad." />
                <meta property="og:url" content="https://www.abrahamblancob.com/" />
                <meta property="og:image" content="https://www.abrahamblancob.com/profile-hero-hq.jpg" />

                <meta name="twitter:title" content="Abraham Blanco - Liderazgo Tecnológico & Transformación Digital" />
                <meta name="twitter:description" content="Más de 10 años combinando visión de negocio con arquitectura de software avanzada. Especialista en Cloud, FinTech y Escalabilidad." />
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
