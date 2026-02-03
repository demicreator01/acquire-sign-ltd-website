import { NAV_LINKS } from '../../constants/navigation';

export function Footer() {
    return (
        <footer id="contact" className="bg-[#0a0a0a] pt-16 border-t border-[#d4af37]/30 relative">
            <div className="max-w-[1100px] mx-auto px-6">

                {/* Contact Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 space-y-12 md:space-y-0">

                    {/* Left: Contact CTA */}
                    <div className="space-y-4 max-w-lg">
                        <h4 className="text-[#d4af37] text-sm tracking-[3px] uppercase">Get In Touch</h4>
                        <h2 className="text-[#f5f5f0] text-3xl md:text-4xl font-display">We'd love to hear from you</h2>
                        <a href="mailto:support@acquiresignltd.co.uk" className="text-[#d4af37] text-xl md:text-2xl hover:text-white transition-colors border-b border-[#d4af37] pb-1 inline-block mt-2">
                            support@acquiresignltd.co.uk
                        </a>
                    </div>

                    {/* Right: Address Card */}
                    <div className="bg-[#141414] p-8 rounded-lg border border-[#d4af37]/20 w-full md:w-auto min-w-[320px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                        <h5 className="text-[#f5f5f0] font-display text-lg mb-4 tracking-wide">Acquire Sign Ltd.</h5>
                        <div className="w-8 h-[1px] bg-[#d4af37] mb-4" />
                        <p className="text-[#f5f5f0]/70 font-light leading-relaxed tracking-wide">
                            51 Princes Street<br />
                            Ipswich, Suffolk<br />
                            IP1 1RJ<br />
                            United Kingdom
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#d4af37]/20 py-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-xs md:text-sm text-[#f5f5f0]/50 font-light tracking-wider">
                    <div>
                        &copy; {new Date().getFullYear()} Acquire Sign Ltd. All rights reserved.
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {NAV_LINKS.map(link => (
                            <a key={link.name} href={link.href} className="hover:text-[#d4af37] transition-colors uppercase">{link.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
