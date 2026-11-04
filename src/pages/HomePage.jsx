import AboutSection from './home/AboutSection';
import GallerySection from './home/GallerySection';
import HeroSection from './home/HeroSection';
import ShopSection from './home/ShopSection';
import WorkshopsSection from './home/WorkshopsSection';

// The corporate enquiries section (./home/CorporateSection) is hidden for now; About takes its place.
// To bring it back, import CorporateSection and render it here, and restore the #corporate links in
// src/data/siteConfig.js and src/pages/home/HeroSection.jsx.

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkshopsSection />
      <AboutSection />
      <ShopSection />
      <GallerySection />
    </>
  );
}
