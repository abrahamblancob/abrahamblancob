import Section from '../common/Section';
import Card from '../common/Card';
import AnimatedElement from '../common/AnimatedElement';
import { profileData } from '../../constants/profile';

/**
 * About section component
 * Displays executive summary
 */
const About = () => {
    return (
        <Section id="sobre-mi" className="bg-slate-900/50">
            <AnimatedElement variant="slideUp">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Sobre <span className="gradient-text">Mí</span>
                </h2>
            </AnimatedElement>

            <div className="max-w-6xl mx-auto">
                <AnimatedElement variant="fadeIn" delay={0.2}>
                    <Card className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
                        {/* Profile Photo */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-30"></div>
                                <img
                                    src="/profile.jpg"
                                    alt="Abraham Blanco"
                                    className="relative w-64 h-64 md:w-full md:h-auto object-cover rounded-2xl border-2 border-white/10"
                                />
                            </div>
                        </div>

                        {/* About Text */}
                        <div>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                {profileData.about.summary}
                            </p>
                        </div>
                    </Card>
                </AnimatedElement>
            </div>
        </Section>
    );
};

export default About;
