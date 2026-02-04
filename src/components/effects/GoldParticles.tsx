
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

export function GoldParticles() {
    return (
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
    );
}

export default GoldParticles;
