import { Mail, Linkedin, Send } from 'lucide-react';
import Section from '../common/Section';
import Card from '../common/Card';
import AnimatedElement from '../common/AnimatedElement';
import { profileData } from '../../constants/profile';

/**
 * Contact section component
 * Displays contact information and links
 */
const Contact = () => {
    return (
        <Section id="contacto">
            <AnimatedElement variant="slideUp">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Hablemos de tu <span className="gradient-text">Proyecto</span>
                </h2>
            </AnimatedElement>

            <div className="max-w-2xl mx-auto">
                <AnimatedElement variant="fadeIn" delay={0.2}>
                    <Card className="text-center">
                        <p className="text-lg text-slate-300 mb-8">
                            ¿Tienes un proyecto en mente o necesitas asesoría tecnológica?
                            Estoy disponible para colaborar en iniciativas de transformación digital.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`mailto:${profileData.contact.email}`}
                                className="glass glass-hover px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 text-white transition-all hover:scale-105"
                            >
                                <Mail size={20} />
                                {profileData.contact.email}
                            </a>

                            <a
                                href={profileData.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 text-white hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
                            >
                                <Linkedin size={20} />
                                LinkedIn
                            </a>
                        </div>
                    </Card>
                </AnimatedElement>
            </div>
        </Section>
    );
};

export default Contact;
