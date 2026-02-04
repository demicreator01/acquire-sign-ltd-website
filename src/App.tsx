import { Suspense, lazy } from 'react';
import { ImageModalProvider } from './context/ImageModalContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';

// Lazy load below-the-fold content
const ProductCategories = lazy(() => import('./components/sections/ProductCategories').then(module => ({ default: module.ProductCategories })));
const Watches = lazy(() => import('./components/sections/Watches').then(module => ({ default: module.Watches })));
const SourceWatch = lazy(() => import('./components/sections/SourceWatch').then(module => ({ default: module.SourceWatch })));
const Jewellery = lazy(() => import('./components/sections/Jewellery').then(module => ({ default: module.Jewellery })));
const Footer = lazy(() => import('./components/layout/Footer').then(module => ({ default: module.Footer })));

function App() {
  return (
    <ImageModalProvider>
      <div className="bg-[#0a0a0a] min-h-screen w-full overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-screen bg-[#0a0a0a]" />}>
            <ProductCategories />
            <Watches />
            <SourceWatch />
            <Jewellery />
            <Footer />
          </Suspense>
        </main>
      </div>
    </ImageModalProvider>
  )
}
export default App;
