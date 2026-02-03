import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageModalContextType {
    openModal: (imgSrc: string) => void;
    closeModal: () => void;
}

const ImageModalContext = createContext<ImageModalContextType | undefined>(undefined);

export function useImageModal() {
    const context = useContext(ImageModalContext);
    if (!context) {
        throw new Error('useImageModal must be used within a ImageModalProvider');
    }
    return context;
}

export function ImageModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false); // Controls rendering
    const [isVisible, setIsVisible] = useState(false); // Controls CSS transition
    const [imgSrc, setImgSrc] = useState('');

    // Lock scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Zoom/Pan State
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });

    // UI Hints
    const [showHint, setShowHint] = useState(false);
    const [showPanToast, setShowPanToast] = useState(false);
    const hasZoomedRef = useRef(false);

    const openModal = (src: string) => {
        setImgSrc(src);
        setIsOpen(true);
        // Trigger transition after mount
        requestAnimationFrame(() => setIsVisible(true));

        // Reset state
        setScale(1);
        setPosition({ x: 0, y: 0 });

        // Hints
        setTimeout(() => setShowHint(true), 500);
        setTimeout(() => setShowHint(false), 3000);
    };

    const closeModal = () => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 300); // Wait for transition
    };

    // Zoom Logic
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const delta = -e.deltaY * 0.001;
        const newScale = Math.min(Math.max(1, scale + delta), 3);

        setScale(newScale);

        if (newScale > 1 && !hasZoomedRef.current) {
            hasZoomedRef.current = true;
            setShowPanToast(true);
            setTimeout(() => setShowPanToast(false), 2000);
        }

        // Reset position if zoomed out
        if (newScale === 1) setPosition({ x: 0, y: 0 });
    };

    // Pan Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale > 1) {
            setIsDragging(true);
            dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && scale > 1) {
            e.preventDefault();
            setPosition({
                x: e.clientX - dragStart.current.x,
                y: e.clientY - dragStart.current.y
            });
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    return (
        <ImageModalContext.Provider value={{ openModal, closeModal }}>
            {children}

            {isOpen && (
                <div
                    className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ease-lux ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-[#050302]/95 backdrop-blur-sm"
                        onClick={closeModal}
                    />

                    {/* Container */}
                    <div
                        className={`relative w-full max-w-[95vw] md:max-w-[75vw] h-[85vh] md:h-[80vh] z-10 
                          flex items-center justify-center overflow-hidden
                          transition-transform duration-300 ease-lux ${isVisible ? 'scale-100' : 'scale-92'}`}
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        {/* Image Wrapper */}
                        <div
                            style={{
                                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                                cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
                                transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                            }}
                            className="will-change-transform"
                        >
                            <img
                                src={imgSrc}
                                className="max-w-full max-h-full object-contain shadow-[0_8px_50px_rgba(0,0,0,0.6)]"
                                onDragStart={(e) => e.preventDefault()}
                            />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 md:top-0 md:right-[-60px] p-2 rounded-full bg-[#d4af37]/15 text-[#f5f5f0]
                             hover:bg-[#d4af37]/35 hover:text-[#d4af37] transition-all duration-300"
                        >
                            <X size={24} />
                        </button>

                        {/* Zoom Hint */}
                        <div
                            className={`absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#0a0805]/85 backdrop-blur rounded-full border border-[#d4af37]/20
                              flex items-center space-x-2 transition-opacity duration-500 pointer-events-none
                              ${showHint ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <ZoomIn size={14} className="text-[#f5f5f0]" />
                            <span className="text-[#f5f5f0] text-xs uppercase tracking-widest">Scroll to Zoom</span>
                        </div>

                        {/* Pan Hint Toast */}
                        <div
                            className={`absolute bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#d4af37] text-black rounded-full font-medium text-xs uppercase tracking-widest shadow-lg
                              transition-all duration-300 pointer-events-none transform
                              ${showPanToast ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        >
                            Drag to Pan
                        </div>
                    </div>
                </div>
            )}
        </ImageModalContext.Provider>
    )
}
