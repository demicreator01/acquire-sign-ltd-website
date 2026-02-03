import { useState, useEffect, useRef } from 'react';
import { useImageModal } from '../../context/ImageModalContext';

const WATCHES = [
    { id: 1, name: 'Rolex Submariner', image: 'https://images.unsplash.com/photo-1662990209247-7ddb7ca0fccd?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'Audemars Piguet Royal Oak', image: 'https://images.unsplash.com/photo-1729078945948-4485f0a58494?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, name: 'Patek Philippe Calatrava', image: 'https://images.unsplash.com/photo-1642984120374-da83fef6bb20?q=80&w=1000&auto=format&fit=crop' },
    { id: 4, name: 'Cartier Santos', image: 'https://images.unsplash.com/photo-1609482806891-7b1b31891da3??q=80&w=1000&auto=format&fit=crop' },
    { id: 5, name: 'Hublot Classic Fusion', image: 'https://images.unsplash.com/photo-1629581678313-36cf745a9af9?q=80&w=1000&auto=format&fit=crop' },
    { id: 6, name: 'Richard Mille RM 11', image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&w=1000&auto=format&fit=crop' },
];

export function Watches() {
    return (
        <section id="watches" className="relative py-24 px-6 w-full bg-atmosphere-collections overflow-hidden">
            <div className="max-w-[1100px] mx-auto relative z-10">
                <div className="text-center mb-16 space-y-2">
                    <h3 className="text-[#d4af37] text-sm tracking-[3px] uppercase">Timepieces</h3>
                    <h2 className="text-[#f5f5f0] text-4xl md:text-5xl font-display">Our Collection</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WATCHES.map((product, index) => (
                        <WatchCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function WatchCard({ product, index }: { product: typeof WATCHES[0], index: number }) {
    const { openModal } = useImageModal();
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`group relative bg-[#111111] rounded-[4px] 
                         transition-all duration-500 ease-lux
                         hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] 
                         border border-[#d4af37]/20 hover:border-[#d4af37]/60
                         ${isVisible ? 'animate-fade-in-scroll' : 'opacity-0 translate-y-[25px]'}`}
            style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* Inner Glow (Subtle gold accent always present) */}
            <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(212,175,55,0.05)] rounded-[4px] pointer-events-none" />

            {/* Image Area - darker frame */}
            <div className="p-4">
                <div
                    className="aspect-square rounded-sm overflow-hidden bg-[#0a0a0a] relative cursor-zoom-in group-hover:ring-1 ring-[#d4af37]/20 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    onClick={() => openModal(product.image)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            openModal(product.image);
                        }
                    }}
                    aria-label={`View ${product.name} in detail`}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                    />
                    {/* Vignette Overlay for consistent 'dark cinematic' look */}
                    <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%] pointer-events-none" />
                </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-8 text-center flex flex-col items-center">
                <h3 className="text-[#f5f5f0] font-display text-xl tracking-wide mb-6 min-h-[56px] flex items-center justify-center">
                    {product.name}
                </h3>

                <a
                    href={`mailto:support@acquiresignltd.co.uk?subject=Enquiry about ${product.name}`}
                    className="inline-block px-8 py-3 border border-[#d4af37]/60 text-[#d4af37] text-xs uppercase tracking-[2px] font-medium
                     bg-transparent
                     hover:bg-[#d4af37] hover:text-[#050505] hover:border-[#d4af37]
                     transition-all duration-300 w-auto rounded-sm"
                >
                    Enquire Now
                </a>
            </div>
        </div>
    );
}
