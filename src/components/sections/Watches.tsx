import { ProductCard } from '../ui/ProductCard';

const WATCHES = [
    { id: 1, name: 'Rolex Submariner', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'Audemars Piguet Royal Oak', image: 'https://images.unsplash.com/photo-1618677833481-e243b6aaebbc?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, name: 'Patek Philippe Calatrava', image: 'https://images.unsplash.com/photo-1594576722512-582bcd46fba3?q=80&w=1000&auto=format&fit=crop' },
    { id: 4, name: 'Cartier Santos', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop' },
    { id: 5, name: 'Hublot Classic Fusion', image: 'https://images.unsplash.com/photo-1629581678313-36cf745a9af9?q=80&w=1000&auto=format&fit=crop' },
    { id: 6, name: 'Richard Mille RM 11', image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&w=1000&auto=format&fit=crop' },
];

export function Watches() {
    return (
        <section id="watches" className="py-24 px-6 max-w-[1100px] mx-auto">
            <div className="text-center mb-16 space-y-2">
                <h3 className="text-[#d4af37] text-sm tracking-[3px] uppercase">Timepieces</h3>
                <h2 className="text-[#f5f5f0] text-4xl md:text-5xl font-display">Our Collection</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {WATCHES.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </section>
    )
}
