import { footerLinks, siteConfig } from '../../data/siteConfig';
import { siteHref } from '../../utils/links';

const COPYRIGHT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100 py-12 border-t border-brand-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="font-serif text-xl font-bold text-white block mb-2">{siteConfig.shortName}</span>
            <p className="text-xs text-brand-300 leading-relaxed">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs text-brand-300">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={siteHref(link.href)} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Location & Studio</h4>
            <p className="text-xs text-brand-300">{siteConfig.location}</p>
            <p className="text-xs text-brand-300 mt-1">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Follow Us</h4>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-brand-300 hover:text-white [overflow-wrap:anywhere]"
            >
              <i className="fa-brands fa-instagram text-base" aria-hidden="true" />
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-800 text-center text-[11px] text-brand-400">
          © {COPYRIGHT_YEAR} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
