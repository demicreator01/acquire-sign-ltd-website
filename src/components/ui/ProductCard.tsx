import { useImageModal } from '../../context/ImageModalContext';

export interface Product {
    id: string | number;
    name: string;
    image: string;
}

export function ProductCard({ product }: { product: Product }) {
    const { openModal } = useImageModal();

    return (
        <div className="group relative bg-[#111111] rounded-[10px] 
                    shadow-[0_2px_16px_rgba(0,0,0,0.35)] 
                    transition-all duration-350 ease-lux
                    hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] 
                    hover:-translate-y-1 
                    border border-transparent hover:border-[#d4af37]/40 ring-0 hover:ring-1 hover:ring-[#d4af37]/10">

            {/* Image Area - darker frame */}
            <div className="p-3">
                <div
                    className="aspect-square rounded-lg overflow-hidden bg-[#0a0a0a] relative cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
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
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="300"
                        height="300"
                    />
                    {/* Subtle inner shadow on image */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] pointer-events-none rounded-lg" />
                </div>
            </div>

            {/* Floating Gold Divider */}
            <div className="mx-6 mt-2 mb-5 h-[1px] bg-[#d4af37]/50" />

            {/* Content */}
            <div className="px-6 pb-8 text-center flex flex-col items-center">
                <h3 className="text-[#f5f5f0] font-body font-medium text-lg leading-snug mb-6 min-h-[56px] flex items-center justify-center">
                    {product.name}
                </h3>

                <a
                    href={`mailto:support@acquiresignltd.co.uk?subject=Enquiry about ${product.name}`}
                    className="inline-block px-6 py-2.5 border border-[#d4af37] text-[#d4af37] rounded-md text-xs uppercase tracking-[2px] font-medium
                     bg-transparent
                     group-hover:bg-[#d4af37] group-hover:text-[#111111] 
                     active:bg-[#d4af37] active:text-[#111111]
                     transition-all duration-300 w-auto"
                >
                    Contact Us
                </a>
            </div>

            {/* Glow Effect Element caused by hover */}
            <div className="absolute inset-0 rounded-[10px] shadow-[0_0_20px_rgba(212,175,55,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />
        </div>
    )
}
