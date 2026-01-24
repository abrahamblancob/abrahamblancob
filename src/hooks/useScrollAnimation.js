import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Encapsulates Framer Motion's useInView logic
 * @param {Object} options - Configuration options
 * @returns {Object} - Reference and inView state
 */
export const useScrollAnimation = (options = {}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.3,
        ...options
    });

    return { ref, isInView };
};
