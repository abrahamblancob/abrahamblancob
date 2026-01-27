import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Section from '../common/Section';
import { profileData } from '../../constants/profile';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

/**
 * Hero section component
 * Main landing section with title and CTAs
 */
const Hero = () => {
    const scrollToSection = useSmoothScroll();

    return (
        <Section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background gradient effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Profile photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex justify-center md:justify-start order-2 md:order-1"
                    >
                        <div className="relative">
                            {/* Glow effect behind photo */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 scale-110"></div>

                            {/* Profile photo */}
                            <img
                                src="/profile-hero.jpg"
                                alt="Abraham Blanco"
                                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Right side - Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="order-1 md:order-2"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Hola, soy <span className="gradient-text">Abraham Blanco</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-200 mb-6 leading-relaxed">
                            Me presento, soy un profesional dedicado al mundo de la tecnología, apasionado por crear soluciones innovadoras que transforman negocios y mejoran la vida de las personas.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-200">
                            {profileData.title}
                        </h2>

                        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                            {profileData.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                onClick={() => scrollToSection('experiencia')}
                            >
                                Ver Trayectoria
                                <ArrowRight size={20} />
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => scrollToSection('contacto')}
                            >
                                <Mail size={20} />
                                Contactar
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
                    >
                        <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
