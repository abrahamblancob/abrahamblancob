import Section from '../common/Section';
import Card from '../common/Card';
import AnimatedElement from '../common/AnimatedElement';
import { useLanguage } from '../../context/LanguageContext';
import { useProfile } from '../../hooks/useProfile';

/**
 * About section component
 * Displays executive summary
 */
const About = () => {
    const { t } = useLanguage();
    const profile = useProfile();

    return (
        <Section id="sobre-mi" className="bg-slate-900/50">
            <AnimatedElement variant="slideUp">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    {t('about.title_prefix')} <span className="gradient-text">{t('about.title_highlight')}</span>
                </h2>
            </AnimatedElement>

            <AnimatedElement variant="fadeIn" delay={0.2}>
                <Card className="max-w-4xl mx-auto">
                    <p className="text-lg text-slate-300 leading-relaxed">
                        {profile.about.summary}
                    </p>
                </Card>
            </AnimatedElement>
        </Section>
    );
};

export default About;
