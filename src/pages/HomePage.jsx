import CorporateSection from './home/CorporateSection';
import GallerySection from './home/GallerySection';
import HeroSection from './home/HeroSection';
import ShopSection from './home/ShopSection';
import WorkshopsSection from './home/WorkshopsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkshopsSection />
      <CorporateSection />
      <ShopSection />
      <GallerySection />
    </>
  );
}
