import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Custom cursor — circle that follows mouse with delay
 * Grows on hover over interactive elements
 * Hidden on mobile/touch devices
 */
const CustomCursor = () => {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const dot = dotRef.current;
        if (!cursor || !dot) return;

        // Hide on touch devices
        if ('ontouchstart' in window) {
            cursor.style.display = 'none';
            dot.style.display = 'none';
            return;
        }

        let mouseX = 0, mouseY = 0;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Dot follows instantly
            gsap.set(dot, { x: mouseX, y: mouseY });
            // Ring follows with delay
            gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.5, ease: 'power3.out' });
        };

        const handleMouseEnterInteractive = () => {
            gsap.to(cursor, { scale: 2.5, opacity: 0.4, duration: 0.3, ease: 'power2.out' });
            gsap.to(dot, { scale: 0, duration: 0.3 });
        };

        const handleMouseLeaveInteractive = () => {
            gsap.to(cursor, { scale: 1, opacity: 0.6, duration: 0.3, ease: 'power2.out' });
            gsap.to(dot, { scale: 1, duration: 0.3 });
        };

        const handleMouseDown = () => {
            gsap.to(cursor, { scale: 0.8, duration: 0.15 });
        };

        const handleMouseUp = () => {
            gsap.to(cursor, { scale: 1, duration: 0.15 });
        };

        // Track mouse
        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Observe interactive elements
        const addHoverListeners = () => {
            document.querySelectorAll('a, button, [role="button"], .cursor-hover').forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnterInteractive);
                el.addEventListener('mouseleave', handleMouseLeaveInteractive);
            });
        };

        // Initial + observe DOM changes
        addHoverListeners();
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Outer ring */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-cyan-400/60 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                style={{ opacity: 0.6 }}
            />
            {/* Inner dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
            />
        </>
    );
};

export default CustomCursor;
