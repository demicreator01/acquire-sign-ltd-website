import { useState } from 'react';

export function Hero() {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-[#050505]">
            {/* Background with Ken Burns */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Skeleton Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0f0c08] to-[#030303] z-10 transition-opacity duration-600 ${imgLoaded ? 'opacity-0' : 'opacity-100'}`} />

                {/* Image */}
                <img
                    src="https://images.unsplash.com/photo-1622434641406-a158105c91d3?q=80&w=2560&auto=format&fit=crop"
                    alt="Luxury Watch Background"
                    className={`w-full h-full object-cover animate-ken-burns transition-opacity duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImgLoaded(true)}
                    loading="eager"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45 z-20" />
            </div>

            {/* Content */}
            <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6 selection:bg-[#d4af37] selection:text-black">
                <h1 className="flex flex-col items-center">
                    <span className="text-[#f5f5f0] text-4xl md:text-6xl lg:text-7xl font-display tracking-wide opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        Timepieces & Jewellery
                    </span>
                    <span className="text-[#d4af37] text-3xl md:text-5xl lg:text-6xl font-display italic mt-4 glow-text-gold opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        Curated for You
                    </span>
                </h1>

                <p className="mt-8 text-[#f5f5f0]/70 text-lg md:text-xl font-light tracking-wide max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    Exclusive pieces, sourced with care. Discover timepieces and jewellery that define elegance.
                </p>

                <div className="mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                    <a href="#collections" className="inline-block px-10 py-4 border border-[#d4af37] text-[#d4af37] tracking-[2px] text-sm uppercase rounded hover:bg-[#d4af37] hover:text-[#111] transition-all duration-300 font-medium">
                        View Collection
                    </a>
                </div>
            </div>
        </section>
    );
}
