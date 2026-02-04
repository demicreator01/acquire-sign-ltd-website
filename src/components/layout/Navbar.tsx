import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants/navigation';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/85 backdrop-blur-md py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
                    <div className="flex-shrink-0 z-50">
                        <a href="#" className="text-[#f5f5f0] font-display text-2xl tracking-wider">
                            ACQUIRE SIGN LTD.
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="group relative text-[#f5f5f0] hover:text-[#d4af37] text-sm tracking-[2px] transition-colors duration-300"
                            >
                                {link.name}
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden z-50">
                        <button
                            onClick={toggleMenu}
                            aria-label="Open menu"
                            className="text-[#d4af37] focus:outline-none relative w-8 h-8 flex items-center justify-center"
                        >
                            <div className={`w-6 h-[2px] bg-[#d4af37] transition-all duration-300 absolute ${isOpen ? 'rotate-45' : 'translate-y-[-8px]'}`} />
                            <div className={`w-6 h-[2px] bg-[#d4af37] transition-all duration-300 absolute ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <div className={`w-6 h-[2px] bg-[#d4af37] transition-all duration-300 absolute ${isOpen ? '-rotate-45' : 'translate-y-[8px]'}`} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-350 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={`fixed inset-y-0 right-0 z-40 w-full sm:w-80 bg-gradient-to-b from-[#0a0a0a] via-[#141210] to-[#1a1815] transform transition-transform duration-350 ease-lux ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
                    {NAV_LINKS.map((link, index) => (
                        <React.Fragment key={link.name}>
                            <a
                                href={link.href}
                                className={`text-[#f5f5f0] font-display text-lg tracking-[4px] relative group transition-all duration-400 ease-lux transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                                style={{ transitionDelay: isOpen ? `${link.delay}ms` : '0ms' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="flex items-center">
                                    <span className="w-0 h-[2px] bg-[#d4af37] mr-0 group-active:w-[30px] group-active:mr-3 transition-all duration-200" />
                                    <span className="group-active:text-[#d4af37] transition-colors duration-200">
                                        {link.name}
                                    </span>
                                </div>
                            </a>
                            {index < NAV_LINKS.length - 1 && (
                                <div
                                    className={`w-12 h-[1px] bg-[#d4af37]/15 transition-all duration-400 delay-${link.delay} ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
