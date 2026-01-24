/**
 * Custom hook for smooth scroll navigation
 * Provides reusable scroll behavior
 * @returns {Function} - Scroll to section function
 */
export const useSmoothScroll = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return scrollToSection;
};
