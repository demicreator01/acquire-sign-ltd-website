import { useImageModal } from '../../context/ImageModalContext';

const CATEGORIES = [
    { id: 1, name: 'Watches', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-ebea2404e90c?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop' },
    { id: 4, name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop' },
    { id: 5, name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop' },
    { id: 6, name: 'Accessories', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop' },
];

export function ProductCategories() {
    const { openModal } = useImageModal();
    return (
        <section id="collections" className="py-24 md:py-32 px-6 max-w-[1100px] mx-auto">
            <div className="text-center mb-16 space-y-2">
                <h3 className="text-[#d4af37] text-sm tracking-[3px] uppercase">Collections</h3>
                <h2 className="text-[#f5f5f0] text-4xl md:text-5xl font-display">Explore Our World</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {CATEGORIES.map((cat) => (
                    <div
                        key={cat.id}
                        onClick={() => openModal(cat.image)}
                        className="group relative h-[360px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.4)]
                     hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-400 ease-lux"
                    >
                        {/* Image Container with Zoom */}
                        <div className="absolute inset-0 overflow-hidden">
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>

                        {/* Overlay Gradient (Darken bottom for text readability) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-400" />

                        {/* Frosted Strip */}
                        <div className="absolute bottom-0 inset-x-0 h-20 
                          backdrop-blur-md bg-[#0a0805]/60 group-hover:bg-[#0a0805]/75 
                          border-t border-[#d4af37]/30 group-hover:border-[#d4af37]/60
                          flex items-center justify-center transition-all duration-400 group-active:scale-95 origin-bottom">
                            <span className="text-[#f5f5f0] font-display text-xl tracking-[3px] uppercase group-hover:text-white transition-colors">
                                {cat.name}
                            </span>
                        </div>

                        {/* Mobile Active State Handling (Scale down slightly on touch) */}
                        <div className="absolute inset-0 group-active:scale-[0.98] transition-transform duration-150 rounded-2xl pointer-events-none border border-transparent group-hover:border-[#d4af37]/20" />
                    </div>
                ))}
            </div>
        </section>
    )
}
