import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import AnimatedElement from '../components/common/AnimatedElement';
import Card from '../components/common/Card';
import ParticlesBackground from '../components/common/ParticlesBackground';
import { profileData } from '../constants/profile';

/**
 * Portfolio page - Displays projects
 */
const PortfolioPage = () => {
    return (
        <>
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
                            Mi <span className="gradient-text">Portfolio</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Proyectos en los que he trabajado, combinando tecnología de vanguardia con soluciones de negocio reales.
                        </p>
                    </AnimatedElement>
                </div>
            </Section>

            {/* Projects grid */}
            <Section id="proyectos" className="bg-slate-900/50">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {profileData.projects.map((project, index) => (
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
                                    Visitar Proyecto
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
