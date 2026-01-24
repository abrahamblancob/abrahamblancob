import { motion } from 'framer-motion';

/**
 * Reusable Button component with variants
 * Follows Open/Closed Principle - extensible via props
 */
const Button = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    ...props
}) => {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2";

    const variants = {
        primary: "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/50 hover:scale-105",
        secondary: "glass glass-hover text-white",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
