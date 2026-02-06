// Theme configuration - Animation variants and design tokens
export const animationVariants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },

    slideUp: {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },

    slideInLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },

    slideInRight: {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },

    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    },

    scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }
};

export const navItems = [
    { id: "experiencia", label: "Experiencia", type: "scroll" },
    { id: "habilidades", label: "Habilidades", type: "scroll" },
    { id: "portfolio", label: "Portfolio", type: "route", path: "/portfolio" },
    { id: "contacto", label: "Contacto", type: "scroll" }
];
