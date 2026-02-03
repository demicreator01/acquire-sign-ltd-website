import { ProductCard } from '../ui/ProductCard';

const JEWELLERY = [
    { id: 1, name: 'Diamond Pendant', image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'Gold Cuban Chain', image: 'https://images.unsplash.com/photo-1620325867502-221cfb5fa5f2?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, name: 'Rose Gold Bracelet', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop' },
    { id: 4, name: 'Sapphire Ring', image: 'https://images.unsplash.com/photo-1596944925666-1c5879cbe561?q=80&w=1000&auto=format&fit=crop' },
    { id: 5, name: 'Diamond Studs', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop' },
    { id: 6, name: 'Platinum Necklace', image: 'https://images.unsplash.com/photo-1601121141461-9f6644cb8707?q=80&w=1000&auto=format&fit=crop' },
];

export function Jewellery() {
    return (
        <section id="jewellery" className="py-24 px-6 max-w-[1100px] mx-auto">
            <div className="text-center mb-16 space-y-2">
                <h3 className="text-[#d4af37] text-sm tracking-[3px] uppercase">Jewellery</h3>
                <h2 className="text-[#f5f5f0] text-4xl md:text-5xl font-display">Fine Pieces</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {JEWELLERY.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </section>
    )
}
