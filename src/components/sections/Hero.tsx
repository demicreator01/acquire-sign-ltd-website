import { useState, useEffect } from 'react';

// Random Position Generators for Particles (approximate distribution)
const PARTICLES = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 2, // 2px to 5px
    animation: `animate-float-${(i % 4) + 1}`, // Cycle through float-1 to float-4
    delay: `${Math.random() * 6}s`,
    duration: `${Math.random() * 10 + 8}s` // 8s to 18s
}));

export function Hero() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch/flash of heavy content

    // Mobile Check Logic (Fix for TBT)
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Check initially
        checkMobile();

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Scroll Indicator Logic
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollIndicator(window.scrollY < 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-[#050505]">
            {/* 
         Z-INDEX LAYERING:
         z-0: Skeleton (always visible)
         z-10: Image (fades in)
         z-15: Gold Particles (floats above image)
         z-20: Dark Overlay (readability)
         z-30: Content (Text, Button, Scroll Indicator)
      */}

            {/* z-0: Skeleton Gradient Background (Permanent) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0f0c08] to-[#030303] z-0" />

            {/* z-10: Image with Ken Burns (Fix LCP with srcset) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <img
                    src="/images/hero-watch.jpg"
                    srcSet="/images/hero-watch-mobile.jpg 800w, /images/hero-watch.jpg 1920w"
                    sizes="(max-width: 768px) 800px, 100vw"
                    alt="Luxury Watch Background"
                    className={`w-full h-full object-cover animate-ken-burns transition-opacity duration-700 ease-out ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImgLoaded(true)}
                    loading="eager"
                    fetchPriority="high"
                    width="1920"
                    height="1080"
                />
            </div>

            {/* z-15: Gold Particle Dust (DISABLED ON MOBILE TO FIX TBT) */}
            {!isMobile && (
                <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
                    {PARTICLES.map((p) => (
                        <div
                            key={p.id}
                            className={`absolute rounded-full ${p.animation}`}
                            style={{
                                top: p.top,
                                left: p.left,
                                width: `${p.size}px`,
                                height: `${p.size}px`,
                                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, rgba(212, 175, 55, 0) 100%)',
                                animationDelay: p.delay,
                                animationDuration: p.duration
                            }}
                        />
                    ))}
                </div>
            )}

            {/* z-20: Dark Overlay */}
            <div className="absolute inset-0 bg-black/45 z-20" />

            {/* z-30: Content */}
            {/* Asymmetric Layout: Center on mobile, Left-aligned on Desktop (lg) */}
            <div className="relative z-30 h-full flex flex-col items-center justify-center lg:items-start lg:pl-[10%] text-center lg:text-left px-6 selection:bg-[#d4af37] selection:text-black">
                <h1 className="flex flex-col items-center lg:items-start">
                    <span className="text-[#f5f5f0] text-4xl md:text-6xl lg:text-7xl font-display tracking-wide opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        Timepieces & Jewellery
                    </span>
                    <div className="flex flex-col items-center lg:items-start w-full">
                        {/* Modified Color for Accessibility Compliance (#c5a028) */}
                        <span className="text-[#c5a028] text-3xl md:text-5xl lg:text-6xl font-display italic mt-4 glow-text-gold opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                            Curated for You
                        </span>
                        {/* Animated Gold Underline */}
                        <div className="h-[2px] bg-[#d4af37] rounded-sm mt-3 lg:mt-4 animate-draw-line" />
                    </div>
                </h1>

                <p className="mt-8 text-[#f5f5f0] text-lg md:text-xl font-light tracking-wide max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    Exclusive pieces, sourced with care. Discover timepieces and jewellery that define elegance.
                </p>

                <div className="mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                    <a href="#collections" className="inline-block px-10 py-4 border border-[#d4af37] text-[#d4af37] tracking-[2px] text-sm uppercase rounded hover:bg-[#d4af37] hover:text-[#111] transition-all duration-300 font-medium">
                        View Collection
                    </a>
                </div>
            </div>

            {/* z-30: Scroll Indicator */}
            <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center transition-opacity duration-400 ${showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-hidden="true"
            >
                <div className="w-[2px] h-6 bg-[#d4af37]/60 animate-pulse-down" />
                <div className="scroll-chevron animate-pulse-down" style={{ animationDelay: '0.1s' }} />
            </div>

        </section>
    );
}
