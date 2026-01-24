import { Briefcase, CheckCircle2 } from 'lucide-react';
import Section from '../common/Section';
import Card from '../common/Card';
import AnimatedElement from '../common/AnimatedElement';
import { profileData } from '../../constants/profile';

/**
 * Experience timeline component
 * Displays work history in vertical timeline
 */
const Experience = () => {
    return (
        <Section id="experiencia">
            <AnimatedElement variant="slideUp">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Experiencia <span className="gradient-text">Profesional</span>
                </h2>
            </AnimatedElement>

            <div className="max-w-4xl mx-auto">
                {profileData.experience.map((job, index) => (
                    <AnimatedElement
                        key={job.id}
                        variant="slideInLeft"
                        delay={index * 0.2}
                    >
                        <div className="relative pl-8 pb-12 last:pb-0">
                            {/* Timeline line */}
                            {index !== profileData.experience.length - 1 && (
                                <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
                            )}

                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center glow">
                                <Briefcase size={16} className="text-white" />
                            </div>

                            <Card>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {job.title}
                                        </h3>
                                        <p className="text-lg text-accent font-semibold">
                                            {job.company}
                                        </p>
                                    </div>
                                    <span className="text-slate-400 text-sm md:text-base mt-2 md:mt-0">
                                        {job.period}
                                    </span>
                                </div>

                                <p className="text-slate-300 mb-4">
                                    {job.description}
                                </p>

                                <div className="space-y-2">
                                    {job.achievements.map((achievement, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-slate-300 text-sm">
                                                {achievement}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </AnimatedElement>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
