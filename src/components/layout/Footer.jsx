import { Linkedin, Mail } from 'lucide-react';
import { profileData } from '../../constants/profile';

/**
 * Footer component
 * Displays copyright and social links
 */
const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 px-4 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-400 text-sm">
                    © 2025 {profileData.logo}. Todos los derechos reservados.
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href={profileData.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={`mailto:${profileData.contact.email}`}
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
