import { ProductCard } from '../ui/ProductCard';

const JEWELLERY = [
    { id: 1, name: 'Diamond Pendant', image: 'https://images.unsplash.com/photo-1724937721228-f7bf3df2a4d8?q=70&w=600&auto=format&fit=crop' },
    { id: 2, name: 'Gold Cuban Chain', image: 'https://images.unsplash.com/photo-1685970731194-e27b477e87ba?q=70&w=600&auto=format&fit=crop' },
    { id: 3, name: 'Tint Gold Bracelet', image: 'https://media.istockphoto.com/id/92399873/photo/three-gold-bracelets-isolated-on-the-black.jpg?s=612x612&w=0&k=20&c=fU2R2NE4Cy1lIms4d2KWFkhEqhVxi9x2Ep-jskJoeJA=' },
    { id: 4, name: 'Sapphire Ring', image: 'https://images.unsplash.com/photo-1684643548096-e023536fb5ba?q=70&w=600&auto=format&fit=crop' },
    { id: 5, name: 'Dark Studs', image: 'https://media.istockphoto.com/id/1221252893/photo/beautiful-grooms-wedding-jewellery-detail.webp?a=1&b=1&s=612x612&w=0&k=20&c=HqEjzvntb1arhO3JEvwMwvH_iQG-vbly3x822CUhFzk=' },
    { id: 6, name: 'Sapphire Necklace', image: 'https://images.unsplash.com/photo-1640353806012-ba33732504d5?q=70&w=600&auto=format&fit=crop' },
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
