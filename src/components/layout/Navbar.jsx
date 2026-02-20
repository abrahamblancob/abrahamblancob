import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { navItems } from '../../constants/theme';
import { useLanguage } from '../../context/LanguageContext';
import { useProfile } from '../../hooks/useProfile';

/**
 * Navigation bar component
 * Handles navigation UI, smooth scrolling, route navigation and language toggle
 */
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const scrollToSection = useSmoothScroll();
    const navigate = useNavigate();
    const location = useLocation();
    const { language, toggleLanguage, t } = useLanguage();
    const profile = useProfile();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (item) => {
        setIsMobileMenuOpen(false);

        if (item.type === 'route') {
            navigate(item.path);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => scrollToSection(item.id), 100);
            } else {
                scrollToSection(item.id);
            }
        }
    };

    const handleLogoClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            scrollToSection('hero');
        }
    };

    const isActive = (item) => {
        if (item.type === 'route') {
            return location.pathname === item.path;
        }
        return false;
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={handleLogoClick}
                    className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
                >
                    {profile.logo}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item)}
                            className={`text-slate-300 hover:text-white transition-colors relative group ${isActive(item) ? 'text-white' : ''}`}
                        >
                            {t(item.labelKey)}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${isActive(item) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </button>
                    ))}

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="glass rounded-full px-3 py-1.5 text-sm font-medium flex items-center gap-1 hover:bg-white/20 transition-all"
                    >
                        <span className={language === 'es' ? 'text-white' : 'text-slate-500'}>ES</span>
                        <span className="text-slate-500">/</span>
                        <span className={language === 'en' ? 'text-white' : 'text-slate-500'}>EN</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white p-2"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass mt-4 mx-4 rounded-xl p-4">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item)}
                            className={`block w-full text-left py-3 text-slate-300 hover:text-white transition-colors ${isActive(item) ? 'text-white' : ''}`}
                        >
                            {t(item.labelKey)}
                        </button>
                    ))}

                    {/* Language Toggle - Mobile */}
                    <button
                        onClick={toggleLanguage}
                        className="mt-3 pt-3 border-t border-white/10 w-full flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                    >
                        <span className={language === 'es' ? 'text-white font-semibold' : 'text-slate-500'}>ES</span>
                        <span className="text-slate-500">/</span>
                        <span className={language === 'en' ? 'text-white font-semibold' : 'text-slate-500'}>EN</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
