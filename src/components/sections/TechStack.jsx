import {
    Cloud, Flame, Network, GitBranch, Server,
    ShieldCheck, FileCode, CreditCard, Code2, Coffee, Terminal
} from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import AnimatedElement from '../common/AnimatedElement';
import { profileData } from '../../constants/profile';

/**
 * Icon mapping for tech stack
 */
const iconMap = {
    Cloud, Flame, Network, GitBranch, Server,
    ShieldCheck, FileCode, CreditCard, Code2, Coffee, Terminal
};

/**
 * Tech Stack grid component
 * Displays technology categories with icons
 */
const TechStack = () => {
    const categories = [
        { title: "Infraestructura", items: profileData.techStack.infrastructure, color: "from-blue-500 to-cyan-500" },
        { title: "Arquitectura", items: profileData.techStack.architecture, color: "from-purple-500 to-pink-500" },
        { title: "FinTech", items: profileData.techStack.fintech, color: "from-green-500 to-emerald-500" },
        { title: "Lenguajes", items: profileData.techStack.languages, color: "from-orange-500 to-red-500" },
    ];

    return (
        <Section id="habilidades" className="bg-slate-900/50">
            <AnimatedElement variant="slideUp">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Stack <span className="gradient-text">Tecnológico</span>
                </h2>
            </AnimatedElement>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category, categoryIndex) => (
                    <AnimatedElement
                        key={category.title}
                        variant="scaleIn"
                        delay={categoryIndex * 0.1}
                    >
                        <div className="glass rounded-xl p-6 h-full">
                            <h3 className="text-xl font-bold mb-6 text-center">
                                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                    {category.title}
                                </span>
                            </h3>

                            <div className="space-y-4">
                                {category.items.map((tech, index) => {
                                    const Icon = iconMap[tech.icon];
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer group"
                                        >
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                                                <Icon size={20} className="text-white" />
                                            </div>
                                            <span className="text-slate-300 group-hover:text-white transition-colors">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>
        </Section>
    );
};

export default TechStack;
