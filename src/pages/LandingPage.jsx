import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import TechStack from '../components/sections/TechStack';
import Contact from '../components/sections/Contact';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    const { language, t } = useLanguage();
    const progressRef = useRef(null);

    useEffect(() => {
        ScrollTrigger.getAll().forEach(st => st.kill());

        const frameId = requestAnimationFrame(() => {
            // ─── READING PROGRESS BAR ───
            if (progressRef.current) {
                gsap.to(progressRef.current, {
                    scaleX: 1, ease: 'none',
                    scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
                });
            }

            // ─── HERO PARALLAX: photo moves slower than text ───
            const heroPhoto = document.querySelector('#hero img');
            if (heroPhoto) {
                gsap.to(heroPhoto, {
                    yPercent: 15, ease: 'none',
                    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
                });
            }

            // ─── HERO GLOW: pulse on scroll ───
            const heroGlows = document.querySelectorAll('#hero .blur-3xl');
            heroGlows.forEach((glow, i) => {
                gsap.to(glow, {
                    scale: 1.3, opacity: 0.15, ease: 'none',
                    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
                });
            });

            // ─── SECTION HEADINGS: gradient underline wipe on scroll ───
            gsap.utils.toArray('.gsap-heading-wipe').forEach((h) => {
                gsap.to(h, {
                    backgroundSize: '100% 3px', ease: 'none',
                    scrollTrigger: { trigger: h, start: 'top 80%', end: 'top 50%', scrub: true },
                });
            });

            // ─── EXPERIENCE TIMELINE LINE: draw on scroll ───
            gsap.utils.toArray('#experiencia .bg-gradient-to-b').forEach((line) => {
                gsap.fromTo(line,
                    { scaleY: 0, transformOrigin: 'top center' },
                    { scaleY: 1, ease: 'none',
                      scrollTrigger: { trigger: line, start: 'top 80%', end: 'bottom 60%', scrub: true } }
                );
            });

            // ─── TECH STACK: scale-in with 3D rotation ───
            gsap.utils.toArray('#habilidades .glass').forEach((card, i) => {
                gsap.fromTo(card,
                    { rotateY: i % 2 === 0 ? -8 : 8, opacity: 0.7 },
                    { rotateY: 0, opacity: 1, ease: 'none',
                      scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 60%', scrub: true } }
                );
            });

            // ─── CONTACT: scale bounce ───
            const contactCard = document.querySelector('#contacto .glass');
            if (contactCard) {
                gsap.fromTo(contactCard,
                    { scale: 0.95 },
                    { scale: 1, ease: 'none',
                      scrollTrigger: { trigger: contactCard, start: 'top 85%', end: 'top 60%', scrub: true } }
                );
            }
        });

        return () => {
            cancelAnimationFrame(frameId);
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    const personJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Abraham Blanco",
        "url": "https://www.abrahamblancob.com",
        "image": "https://www.abrahamblancob.com/profile-hero-hq.jpg",
        "jobTitle": language === 'es' ? "CTO / Gerente General" : "CTO / General Manager",
        "description": t('seo.landing.description'),
        "knowsAbout": ["Cloud Computing", "FinTech", "Microservices", "Google Cloud Platform", "Firebase", "React", "Python", "Java", "Digital Transformation"],
        "worksFor": { "@type": "Organization", "name": "Instituto Tecnológico Sitio Uno" },
        "sameAs": ["https://www.linkedin.com/in/abraham-blanco-791146b6/"],
        "email": "abrahamblancob@gmail.com"
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": t('seo.landing.breadcrumb_home'), "item": "https://www.abrahamblancob.com/" }
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
                <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
            </Helmet>

            {/* Progress bar */}
            <div ref={progressRef} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left" style={{ scaleX: 0 }} />

            <Hero />
            <About />
            <Experience />
            <TechStack />
            <Contact />
        </>
    );
};

export default LandingPage;
