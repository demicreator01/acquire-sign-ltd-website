import { useState, useEffect, useRef } from 'react';
import { useImageModal } from '../../context/ImageModalContext';

const CATEGORIES = [
    { id: 1, name: 'Watches', image: '/images/collection-watch.jpg' },
    { id: 2, name: 'Rings', image: '/images/collection-ring.jpg' },
    { id: 3, name: 'Necklaces', image: '/images/collection-necklace.jpg' },
    { id: 4, name: 'Bracelets', image: '/images/collection-bracelet.jpg' },
    { id: 5, name: 'Earrings', image: '/images/collection-earrings.jpg' },
    { id: 6, name: 'Accessories', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=70&w=600&auto=format&fit=crop' },
];

export function ProductCategories() {
    return (
        <>
            {/* Section Divider */}
            <div className="w-full h-[80px] bg-divider-gradient" />

            <section
                id="collections"
                className="relative py-24 md:py-32 px-6 w-full bg-atmosphere-collections overflow-hidden"
            >
                <div className="max-w-[1100px] mx-auto relative z-10">
                    <SectionHeader />

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-[12px] md:gap-4 lg:gap-5">
                        {CATEGORIES.map((cat, index) => (
                            <CategoryCard key={cat.id} category={cat} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

function SectionHeader() {
    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={headerRef} className="text-center mb-16 flex flex-col items-center">
            {/* Animated Gold Line */}
            <div className={`h-[1px] bg-[#d4af37] mb-6 ${isVisible ? 'animate-draw-line' : 'w-0'}`} style={{ maxWidth: '40px' }} />

            <h3 className="text-[#d4af37] text-sm tracking-[3px] uppercase mb-2">Collections</h3>
            <h2 className="text-[#f5f5f0] text-4xl md:text-5xl font-display">Explore Our World</h2>
        </div>
    );
}

function CategoryCard({ category, index }: { category: typeof CATEGORIES[0], index: number }) {
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
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            onClick={() => openModal(category.image)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(category.image);
                }
            }}
            aria-label={`View ${category.name} collection`}
            className={`group relative aspect-[3/4] rounded-sm overflow-hidden cursor-pointer 
                ${isVisible ? 'animate-fade-in-scroll' : 'opacity-0 translate-y-[25px]'}
                shadow-[0_4px_24px_rgba(0,0,0,0.4)]
                hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] 
                transition-shadow duration-400 ease-lux`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Image Container with Zoom */}
            <div className="absolute inset-0 overflow-hidden bg-[#111]">
                <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-95"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="533"
                />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-400" />

            {/* Frosted Strip */}
            <div className="absolute bottom-0 inset-x-0 h-16 md:h-20 
                backdrop-blur-md bg-[#0a0805]/60 group-hover:bg-[#0a0805]/75 
                border-t border-[#d4af37]/30 group-hover:border-[#d4af37]/80
                flex items-center justify-center transition-all duration-400">
                <span className="text-[#f5f5f0] font-display text-lg md:text-xl tracking-[2px] uppercase group-hover:text-white transition-colors">
                    {category.name}
                </span>
            </div>

            {/* Interactive Border (Desktop Hover) */}
            <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/30 transition-colors duration-400 pointer-events-none rounded-sm" />
        </div>
    );
}
