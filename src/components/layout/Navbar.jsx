import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { navItems } from '../../constants/theme';
import { profileData } from '../../constants/profile';

/**
 * Navigation bar component
 * Handles navigation UI, smooth scrolling, and route navigation
 */
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const scrollToSection = useSmoothScroll();
    const navigate = useNavigate();
    const location = useLocation();

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
            // If we're not on the landing page, navigate there first
            if (location.pathname !== '/') {
                navigate('/');
                // Wait for navigation, then scroll
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
                    {profileData.logo}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item)}
                            className={`text-slate-300 hover:text-white transition-colors relative group ${isActive(item) ? 'text-white' : ''}`}
                        >
                            {item.label}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${isActive(item) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </button>
                    ))}
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
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
