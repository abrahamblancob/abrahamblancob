import { Mail } from 'lucide-react';
import LinkedInLogo from '../common/LinkedInLogo';
import Section from '../common/Section';
import Card from '../common/Card';
import AnimatedElement from '../common/AnimatedElement';
import { useLanguage } from '../../context/LanguageContext';
import { useProfile } from '../../hooks/useProfile';

/**
 * Contact section component
 * Displays contact information and links
 */
const Contact = () => {
    const { t } = useLanguage();
    const profile = useProfile();

    return (
        <Section id="contacto">
            <AnimatedElement variant="slideUp">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    {t('contact.title_prefix')} <span className="gradient-text">{t('contact.title_highlight')}</span>
                </h2>
            </AnimatedElement>

            <div className="max-w-5xl mx-auto">
                <AnimatedElement variant="fadeIn" delay={0.2}>
                    <Card className="text-center">
                        <p className="text-lg text-slate-300 mb-8">
                            {t('contact.description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`mailto:${profile.contact.email}`}
                                className="glass glass-hover px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 text-white transition-all hover:scale-105"
                            >
                                <Mail size={20} />
                                {profile.contact.email}
                            </a>

                            <a
                                href="https://wa.me/584142994143"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] hover:bg-[#20BA5A] px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 text-white hover:shadow-lg hover:shadow-[#25D366]/50 transition-all hover:scale-105 min-w-[280px]"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span className="text-lg">{'\u{1F1FB}\u{1F1EA}'}</span>
                                +58 414 299 4143
                            </a>

                            <a
                                href={profile.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0A66C2] hover:bg-[#004182] px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 text-white hover:shadow-lg hover:shadow-[#0A66C2]/50 transition-all hover:scale-105"
                            >
                                <LinkedInLogo size={20} />
                                LinkedIn
                            </a>
                        </div>

                        {/* CV Download Section */}
                        <div className="mt-12 pt-12 border-t border-slate-700">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <Mail size={24} className="text-blue-400" />
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    {t('contact.cv_title')}
                                </h3>
                            </div>

                            <p className="text-slate-300 text-center mb-6">
                                {t('contact.cv_description')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/cv/Abraham_Blanco_CV_ES.pdf"
                                    download
                                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                                >
                                    <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>{t('contact.cv_spanish')}</span>
                                </a>
                                <a
                                    href="/cv/Abraham_Blanco_CV_EN.pdf"
                                    download
                                    className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                                >
                                    <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>{t('contact.cv_english')}</span>
                                </a>
                            </div>

                            <p className="text-slate-400 text-sm text-center mt-6">
                                {t('contact.cv_format')}
                            </p>
                        </div>
                    </Card>
                </AnimatedElement>
            </div>
        </Section>
    );
};

export default Contact;
