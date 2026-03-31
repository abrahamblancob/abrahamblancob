import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Text that reveals word-by-word linked to scroll position
 * Each word goes from dim gray to bright white as you scroll
 */
const ScrubText = ({ children, className = '', highlightClass = 'gradient-text' }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const words = container.querySelectorAll('.scrub-word');
        if (!words.length) return;

        const frameId = requestAnimationFrame(() => {
            gsap.fromTo(words,
                { opacity: 0.15, y: 5 },
                {
                    opacity: 1, y: 0,
                    stagger: 0.05,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: true,
                    },
                }
            );
        });

        return () => cancelAnimationFrame(frameId);
    }, [children]);

    // Split text into words, preserving React elements
    const text = typeof children === 'string' ? children : '';
    const words = text.split(' ');

    return (
        <span ref={containerRef} className={className}>
            {words.map((word, i) => (
                <span key={i} className="scrub-word inline-block mr-[0.3em]">
                    {word}
                </span>
            ))}
        </span>
    );
};

export default ScrubText;
