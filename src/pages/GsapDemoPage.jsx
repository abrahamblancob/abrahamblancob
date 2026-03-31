import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import ParticlesBackground from '../components/common/ParticlesBackground';
import Button from '../components/common/Button';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../hooks/useProfile';
import profileImage from '/profile-hero-hq.jpg';

gsap.registerPlugin(ScrollTrigger);

const GsapDemoPage = () => {
    const { t, language } = useLanguage();
    const profile = useProfile();
    const heroRef = useRef(null);
    const showcaseRef = useRef(null);
    const featuresRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const hero = heroRef.current;
        const showcase = showcaseRef.current;
        const features = featuresRef.current;
        const text = textRef.current;
        if (!hero) return;

        // Use rAF to ensure GSAP ticker is running after React StrictMode double-mount
        const frameId = requestAnimationFrame(() => {
            // ─── HERO TIMELINE ───
            gsap.set('#hero-photo', { x: -120, opacity: 0, scale: 0.9 });
            gsap.set('#hero-glow', { scale: 0, opacity: 0 });
            gsap.set('#hero-greeting', { y: 40, opacity: 0 });
            gsap.set('#hero-name', { y: 40, opacity: 0, scale: 0.95 });
            gsap.set('#hero-intro', { y: 30, opacity: 0 });
            gsap.set('#hero-title', { y: 30, opacity: 0 });
            gsap.set('#hero-subtitle', { y: 30, opacity: 0 });
            gsap.set('.hero-btn', { y: 20, opacity: 0 });
            gsap.set('#hero-scroll', { opacity: 0 });

            const tl = gsap.timeline({ delay: 0.2 });
            tl.to('#hero-photo', { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out' })
              .to('#hero-glow', { scale: 1, opacity: 1, duration: 1.2 }, '<0.2')
              .to('#hero-greeting', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.6')
              .to('#hero-name', { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
              .to('#hero-intro', { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
              .to('#hero-title', { y: 0, opacity: 1, duration: 0.6 }, '-=0.2')
              .to('#hero-subtitle', { y: 0, opacity: 1, duration: 0.6 }, '-=0.2')
              .to('.hero-btn', { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 }, '-=0.2')
              .to('#hero-scroll', { opacity: 1, duration: 0.8 }, '-=0.2');

            gsap.to('#scroll-dot', { y: 10, duration: 0.75, repeat: -1, yoyo: true, ease: 'power1.inOut' });

            // ─── SCROLLTRIGGER: SHOWCASE CARDS ───
        if (showcase) {
            gsap.from('.showcase-card', {
                scrollTrigger: { trigger: showcase, start: 'top 80%', toggleActions: 'play none none reverse' },
                y: 80, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
            });
        }

            // ─── SCROLLTRIGGER: FEATURE ITEMS ───
            if (features) {
            gsap.utils.toArray('.feature-item').forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
                    x: i % 2 === 0 ? -80 : 80, opacity: 0, duration: 0.7, ease: 'power2.out',
                });
            });
        }

            // ─── TEXT EFFECTS ───
            if (text) {
            gsap.from('.anim-char', {
                scrollTrigger: { trigger: text, start: 'top 80%', toggleActions: 'play none none reverse' },
                y: 60, opacity: 0, rotateX: -90, duration: 0.6, stagger: 0.03, ease: 'back.out(1.7)',
            });

            gsap.from('#typewriter', {
                scrollTrigger: { trigger: '#typewriter', start: 'top 85%', toggleActions: 'play none none reverse' },
                clipPath: 'inset(0 100% 0 0)', duration: 2, ease: 'power2.inOut',
            });

            const counterEl = document.getElementById('counter');
            if (counterEl) {
                const obj = { val: 0 };
                gsap.to(obj, {
                    scrollTrigger: { trigger: counterEl, start: 'top 85%', toggleActions: 'play none none reverse' },
                    val: 10, duration: 2, ease: 'power1.out',
                    onUpdate: () => { counterEl.textContent = Math.round(obj.val) + '+'; },
                });
            }

            gsap.to('.float-badge', { y: -15, duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.3 });
            }
        }); // end rAF

        return () => cancelAnimationFrame(frameId);
    }, []);

    const splitText = (str) => str.split('').map((c, i) => (
        <span key={i} className="anim-char inline-block">{c === ' ' ? '\u00A0' : c}</span>
    ));

    return (
        <>
            <Helmet><title>GSAP Demo - Abraham Blanco</title></Helmet>

            {/* ═══ HERO ═══ */}
            <div ref={heroRef}>
                <Section id="gsap-hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                    <div className="absolute inset-0 overflow-hidden">
                        <ParticlesBackground />
                        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10 w-full max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="flex justify-center md:justify-start order-2 md:order-1">
                                <div className="relative">
                                    <div id="hero-glow" className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 scale-110"></div>
                                    <img id="hero-photo" src={profileImage} alt="Abraham Blanco" className="relative w-80 h-[28rem] md:w-96 md:h-[32rem] object-cover rounded-2xl shadow-2xl" />
                                </div>
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles size={20} className="text-cyan-400" />
                                    <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">GSAP Demo</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                    <span id="hero-greeting" className="block">{t('hero.greeting')}</span>
                                    <span id="hero-name" className="gradient-text block">Abraham Blanco</span>
                                </h1>

                                <p id="hero-intro" className="text-xl md:text-2xl text-slate-200 mb-6 leading-relaxed">{t('hero.intro')}</p>
                                <h2 id="hero-title" className="text-2xl md:text-3xl font-semibold mb-4 text-slate-200">{profile.title}</h2>
                                <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">{profile.subtitle}</p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="hero-btn"><Button variant="primary">{t('hero.cta_trajectory')}<ArrowRight size={20} /></Button></div>
                                    <div className="hero-btn"><Button variant="secondary"><Mail size={20} />{t('hero.cta_contact')}</Button></div>
                                </div>
                            </div>
                        </div>

                        <div id="hero-scroll" className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                                <div id="scroll-dot" className="w-1 h-2 bg-white/50 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            {/* ═══ SERVICIOS / EXPERTISE ═══ */}
            <div ref={showcaseRef}>
                <Section id="gsap-showcase" className="bg-slate-900/50">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('techStack.title_prefix')} <span className="gradient-text">{t('techStack.title_highlight')}</span></h2>
                    <p className="text-slate-400 text-center mb-16 text-lg">{profile.subtitle}</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: 'Cloud & Infra', items: profile.techStack.infrastructure, color: 'from-blue-500 to-cyan-500', icon: '☁️' },
                            { title: t('techStack.categories.architecture'), items: profile.techStack.architecture, color: 'from-purple-500 to-pink-500', icon: '🏗️' },
                            { title: 'FinTech', items: profile.techStack.fintech, color: 'from-green-500 to-emerald-500', icon: '💳' },
                            { title: t('techStack.categories.languages'), items: profile.techStack.languages, color: 'from-orange-500 to-red-500', icon: '💻' },
                        ].map((cat) => (
                            <Card key={cat.title} className="showcase-card">
                                <div className="text-3xl mb-3">{cat.icon}</div>
                                <div className={`h-1 rounded-full bg-gradient-to-r ${cat.color} mb-4`}></div>
                                <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>{cat.title}</h3>
                                <ul className="space-y-2">
                                    {cat.items.map((tech) => (
                                        <li key={tech.name} className="text-slate-300 text-sm flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                                            {tech.name}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </Section>
            </div>

            {/* ═══ EXPERIENCIA PROFESIONAL ═══ */}
            <div ref={featuresRef}>
                <Section id="gsap-features">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('experience.title_prefix')} <span className="gradient-text">{t('experience.title_highlight')}</span></h2>
                    <p className="text-slate-400 text-center mb-16 text-lg">{profile.about.summary.substring(0, 120)}...</p>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {profile.experience.map((job) => (
                            <div key={job.id} className="feature-item glass rounded-xl p-6 border-l-4 border-l-cyan-500">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                    <span className="text-slate-400 text-sm">{job.period}</span>
                                </div>
                                <p className="text-accent font-semibold mb-2">{job.company}</p>
                                <p className="text-slate-300 mb-3">{job.description}</p>
                                <ul className="space-y-1">
                                    {job.achievements.slice(0, 2).map((a, i) => (
                                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                            <span className="text-green-400 mt-0.5">✓</span>
                                            {a}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>

            {/* ═══ IMPACTO EN NÚMEROS ═══ */}
            <div ref={textRef}>
                <Section id="gsap-text" className="bg-slate-900/50">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ perspective: '600px' }}>
                        {splitText(language === 'es' ? 'Impacto en Números' : 'Impact in Numbers')}
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-16">
                        {/* Typewriter tagline */}
                        <div className="text-center">
                            <p id="typewriter" className="text-2xl md:text-3xl text-slate-200 font-light leading-relaxed">
                                {language === 'es'
                                    ? 'Transformando ideas en productos digitales escalables desde 2015.'
                                    : 'Turning ideas into scalable digital products since 2015.'}
                            </p>
                        </div>

                        {/* Animated counter */}
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-6">
                                <span id="counter" className="text-7xl md:text-8xl font-bold gradient-text">0+</span>
                                <span className="text-2xl text-slate-300 text-left">
                                    {language === 'es' ? 'años de' : 'years of'}<br/>
                                    {language === 'es' ? 'experiencia' : 'experience'}
                                </span>
                            </div>
                        </div>

                        {/* Floating tech badges */}
                        <div className="text-center">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['GCP', 'Firebase', 'React', 'Python', 'PCI-DSS', 'Microservices', 'Kubernetes', 'FinTech'].map((badge) => (
                                    <span key={badge} className="float-badge glass px-5 py-2.5 rounded-full text-sm font-medium text-white">{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Projects highlight */}
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {profile.projects.map((project) => (
                                <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer"
                                   className="showcase-card glass rounded-xl p-6 hover:bg-white/10 transition-all group">
                                    {project.image && (
                                        <img src={project.image} alt={project.title} className="h-16 w-16 object-contain mx-auto mb-4 rounded-lg" />
                                    )}
                                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                    <div className="flex flex-wrap justify-center gap-1 mt-3">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${project.color} text-white`}>{tag}</span>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default GsapDemoPage;
