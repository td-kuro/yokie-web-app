import { useCallback, useState } from 'react';
import logo from '../../assets/yokie-scent-logo.png';
import { mainNavLinks, siteConfig } from '../../data/siteConfig';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import CartButton from '../cart/CartButton';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  useEscapeKey(closeMenu, isMenuOpen);

  return (
    <header className="sticky top-0 z-40 w-full glass-card border-b border-brand-100/80 transition-all duration-300">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="group shrink-0" aria-label={`${siteConfig.name} home`}>
            <img
              src={logo}
              alt=""
              width="720"
              height="403"
              className="h-16 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          <nav aria-label="Main" className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-800">
            {mainNavLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-brand-500 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {siteConfig.shopEnabled && <CartButton />}
            <a
              href="#workshops"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-800 text-brand-50 text-sm font-medium hover:bg-brand-900 transition-all shadow-sm hover:shadow"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {siteConfig.shopEnabled && <CartButton compact />}
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-lg text-brand-800 hover:bg-brand-100 focus:outline-none"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} fa-fw text-xl`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && <MobileMenu id="mobile-menu" links={mainNavLinks} onNavigate={closeMenu} />}
    </header>
  );
}
