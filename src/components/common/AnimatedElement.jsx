import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { animationVariants } from '../../constants/theme';

/**
 * Animated wrapper component
 * Centralizes animation logic and follows DIP
 */
const AnimatedElement = ({
    children,
    variant = 'fadeIn',
    className = '',
    delay = 0,
    ...props
}) => {
    const { ref, isInView } = useScrollAnimation();

    const animationVariant = {
        ...animationVariants[variant],
        visible: {
            ...animationVariants[variant].visible,
            transition: {
                ...animationVariants[variant].visible.transition,
                delay
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animationVariant}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedElement;
