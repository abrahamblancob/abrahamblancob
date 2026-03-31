import { ArrowRight, Mail } from 'lucide-react';
import Button from '../common/Button';
import Section from '../common/Section';
import ParticlesBackground from '../common/ParticlesBackground';
import ScrubText from '../common/ScrubText';
import { useLanguage } from '../../context/LanguageContext';
import { useProfile } from '../../hooks/useProfile';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import profileImage from '/profile-hero-hq.jpg';

const Hero = () => {
    const scrollToSection = useSmoothScroll();
    const { t } = useLanguage();
    const profile = useProfile();

    return (
        <Section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            <div className="absolute inset-0 overflow-hidden">
                <ParticlesBackground />
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Photo — CSS slide-in from left */}
                    <div className="flex justify-center md:justify-start order-2 md:order-1 animate-[slideInLeft_1s_ease-out_0.2s_both]">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 scale-110 animate-[pulseGlow_3s_ease-in-out_infinite]"></div>
                            <img
                                src={profileImage}
                                alt="Abraham Blanco"
                                className="relative w-80 h-[28rem] md:w-96 md:h-[32rem] object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Text — CSS staggered entrance */}
                    <div className="order-1 md:order-2">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="block animate-[blurUp_0.8s_ease-out_0.3s_both]">{t('hero.greeting')}</span>
                            <span className="gradient-text block animate-[blurUp_0.8s_ease-out_0.5s_both]">Abraham Blanco</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-200 mb-6 leading-relaxed animate-[fadeUp_0.6s_ease-out_0.7s_both]">
                            <ScrubText>{t('hero.intro')}</ScrubText>
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-200 animate-[fadeUp_0.6s_ease-out_0.9s_both]">
                            {profile.title}
                        </h2>

                        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed animate-[fadeUp_0.6s_ease-out_1.1s_both]">
                            {profile.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-[fadeUp_0.5s_ease-out_1.3s_both]">
                            <Button variant="primary" onClick={() => scrollToSection('experiencia')}>
                                {t('hero.cta_trajectory')}
                                <ArrowRight size={20} />
                            </Button>
                            <Button variant="secondary" onClick={() => scrollToSection('contacto')}>
                                <Mail size={20} />
                                {t('hero.cta_contact')}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-[fadeIn_0.8s_ease-out_1.6s_both]">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 animate-[bounce_1.5s_ease-in-out_infinite_2s]">
                        <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slideInLeft {
                    from { transform: translateX(-120px) scale(0.9); opacity: 0; }
                    to { transform: translateX(0) scale(1); opacity: 1; }
                }
                @keyframes blurUp {
                    from { transform: translateY(40px); opacity: 0; filter: blur(8px); }
                    to { transform: translateY(0); opacity: 1; filter: blur(0); }
                }
                @keyframes fadeUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes pulseGlow {
                    0%, 100% { transform: scale(1.1); opacity: 0.3; }
                    50% { transform: scale(1.2); opacity: 0.15; }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(10px); }
                }
            `}</style>
        </Section>
    );
};

export default Hero;
