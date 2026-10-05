export default function MobileMenu({ id, links, onNavigate }) {
  return (
    <nav id={id} aria-label="Mobile" className="md:hidden border-b border-brand-200 bg-brand-50 px-4 pt-2 pb-6 space-y-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className="block py-2 text-base font-medium text-brand-800 hover:text-brand-500"
        >
          {link.label}
        </a>
      ))}
      <a
        href="#workshops"
        onClick={onNavigate}
        className="w-full text-center block mt-4 px-5 py-3 rounded-xl bg-brand-800 text-brand-50 font-medium"
      >
        Book Workshop
      </a>
    </nav>
  );
}
