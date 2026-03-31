import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * Preloader — SVG "AB" logo that draws itself, then wipes away
 * Shows only on first visit (sessionStorage flag)
 */
const Preloader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (!show) return;

        const container = containerRef.current;
        if (!container) return;

        const tl = gsap.timeline({
            onComplete: () => {
                setShow(false);
                onComplete?.();
            },
        });

        // 1. Draw the SVG paths
        const paths = container.querySelectorAll('.draw-path');
        paths.forEach((path) => {
            const length = path.getTotalLength();
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        });

        tl.to(paths, {
            strokeDashoffset: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power2.inOut',
        })
        // 2. Pulse glow
        .to('.preloader-glow', {
            opacity: 0.4, scale: 1.5, duration: 0.4, ease: 'power2.out',
        })
        .to('.preloader-glow', {
            opacity: 0, scale: 2, duration: 0.3,
        })
        // 3. Scale up logo and fade out
        .to('.preloader-logo', {
            scale: 1.2, opacity: 0, duration: 0.4, ease: 'power2.in',
        }, '-=0.2')
        // 4. Wipe background with clip-path
        .to(container, {
            clipPath: 'circle(0% at 50% 50%)',
            duration: 0.6,
            ease: 'power3.inOut',
        });

    }, [show, onComplete]);

    if (!show) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[10000] bg-slate-900 flex items-center justify-center"
            style={{ clipPath: 'circle(150% at 50% 50%)' }}
        >
            {/* Glow effect */}
            <div className="preloader-glow absolute w-40 h-40 rounded-full bg-gradient-to-r from-primary to-accent opacity-0" />

            {/* Grid lines background */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Logo SVG — "AB" initials */}
            <div className="preloader-logo relative">
                <svg width="160" height="120" viewBox="0 0 160 120" fill="none">
                    {/* A */}
                    <path
                        className="draw-path"
                        d="M 10 110 L 45 15 L 80 110"
                        stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" fill="none"
                    />
                    <path
                        className="draw-path"
                        d="M 25 70 L 65 70"
                        stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" fill="none"
                    />
                    {/* B */}
                    <path
                        className="draw-path"
                        d="M 90 110 L 90 15 L 130 15 Q 150 15 150 35 Q 150 55 130 55 L 90 55 L 135 55 Q 155 55 155 80 Q 155 110 130 110 Z"
                        stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
                    />
                    {/* Decorative circle */}
                    <circle
                        className="draw-path"
                        cx="80" cy="60" r="55"
                        stroke="rgba(0,200,255,0.2)" strokeWidth="1" fill="none" strokeDasharray="4 4"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default Preloader;
