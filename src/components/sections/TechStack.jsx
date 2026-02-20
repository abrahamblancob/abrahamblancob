import {
    Network, GitBranch, Server,
    FileCode, CreditCard, Terminal
} from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import AnimatedElement from '../common/AnimatedElement';
import { useLanguage } from '../../context/LanguageContext';
import { useProfile } from '../../hooks/useProfile';
import GoogleCloudLogo from '../common/logos/GoogleCloudLogo';
import FirebaseLogo from '../common/logos/FirebaseLogo';
import PythonLogo from '../common/logos/PythonLogo';
import JavaLogo from '../common/logos/JavaLogo';
import PCILogo from '../common/logos/PCILogo';

/**
 * Icon mapping for tech stack
 */
const iconMap = {
    Cloud: GoogleCloudLogo,
    Flame: FirebaseLogo,
    Network,
    GitBranch,
    Server,
    ShieldCheck: PCILogo,
    FileCode,
    CreditCard,
    Code2: PythonLogo,
    Coffee: JavaLogo,
    Terminal
};

/**
 * Tech Stack grid component
 * Displays technology categories with icons
 */
const TechStack = () => {
    const { t } = useLanguage();
    const profile = useProfile();

    const categories = [
        { title: t('techStack.categories.infrastructure'), items: profile.techStack.infrastructure, color: "from-blue-500 to-cyan-500" },
        { title: t('techStack.categories.architecture'), items: profile.techStack.architecture, color: "from-purple-500 to-pink-500" },
        { title: t('techStack.categories.fintech'), items: profile.techStack.fintech, color: "from-green-500 to-emerald-500" },
        { title: t('techStack.categories.languages'), items: profile.techStack.languages, color: "from-orange-500 to-red-500" },
    ];

    return (
        <Section id="habilidades" className="bg-slate-900/50">
            <AnimatedElement variant="slideUp">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    {t('techStack.title_prefix')} <span className="gradient-text">{t('techStack.title_highlight')}</span>
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
                                    const isOfficialLogo = ['Cloud', 'Flame', 'Code2', 'Coffee', 'ShieldCheck'].includes(tech.icon);

                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer group"
                                        >
                                            {isOfficialLogo ? (
                                                <div className="p-2 rounded-lg bg-white/10">
                                                    <Icon size={20} />
                                                </div>
                                            ) : (
                                                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                                                    <Icon size={20} className="text-white" />
                                                </div>
                                            )}
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
