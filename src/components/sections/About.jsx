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

            <AnimatedElement variant="fadeIn" delay={0.2}>
                <Card className="max-w-4xl mx-auto">
                    <p className="text-lg text-slate-300 leading-relaxed">
                        {profileData.about.summary}
                    </p>
                </Card>
            </AnimatedElement>
        </Section>
    );
};

export default About;
