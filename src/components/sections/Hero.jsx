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

            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="gradient-text">{profileData.title}</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                >
                    {profileData.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
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
                </motion.div>

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
