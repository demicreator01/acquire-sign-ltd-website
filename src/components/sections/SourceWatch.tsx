export function SourceWatch() {
    return (
        <section id="source" className="relative py-28 md:py-36 w-full overflow-hidden border-y border-[#d4af37]/40 my-16">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#141210] to-[#0a0a0a]" />

            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-[800px] mx-auto text-center px-6">
                <h4 className="text-[#d4af37] text-sm tracking-[3px] uppercase mb-4">Bespoke Service</h4>
                <h2 className="text-[#f5f5f0] text-4xl md:text-5xl font-display mb-3">Can't find what you're looking for?</h2>
                <h3 className="text-[#d4af37] text-3xl md:text-4xl font-display italic mb-8">Source Me A Watch</h3>

                <p className="text-[#f5f5f0]/65 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                    We can source virtually any timepiece in the world on your behalf. From rare vintage pieces to the latest releases — if it exists, we can find it. Simply get in touch and tell us what you're after.
                </p>

                <a
                    href="mailto:support@acquiresignltd.co.uk?subject=Source me a watch"
                    className="inline-block px-10 py-4 bg-[#d4af37] text-[#111111] rounded text-sm uppercase tracking-[2px] font-medium
                     hover:bg-[#eac455] hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.2)]"
                >
                    Get In Touch
                </a>
            </div>
        </section>
    )
}
