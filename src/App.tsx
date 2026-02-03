import { ImageModalProvider } from './context/ImageModalContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ProductCategories } from './components/sections/ProductCategories';
import { Watches } from './components/sections/Watches';
import { SourceWatch } from './components/sections/SourceWatch';
import { Jewellery } from './components/sections/Jewellery';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <ImageModalProvider>
      <div className="bg-[#0a0a0a] min-h-screen w-full overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <ProductCategories />
          <Watches />
          <SourceWatch />
          <Jewellery />
        </main>
        <Footer />
      </div>
    </ImageModalProvider>
  )
}
export default App;
