import { Mail } from 'lucide-react';
import LinkedInLogo from '../common/LinkedInLogo';
import ParticlesBackground from '../common/ParticlesBackground';
import { useLanguage } from '../../context/LanguageContext';
import { useProfile } from '../../hooks/useProfile';

/**
 * Footer component
 * Displays copyright and social links
 */
const Footer = () => {
    const { t } = useLanguage();
    const profile = useProfile();

    return (
        <footer className="bg-slate-950 py-8 px-4 border-t border-white/10 relative overflow-hidden">
            {/* Particle animation background */}
            <ParticlesBackground />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                <p className="text-slate-400 text-sm">
                    © 2026 {profile.logo}. {t('footer.rights')}
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href={profile.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#0A66C2] transition-colors"
                        aria-label="LinkedIn"
                    >
                        <LinkedInLogo size={20} />
                    </a>
                    <a
                        href={`mailto:${profile.contact.email}`}
                        className="text-slate-400 hover:text-accent transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
