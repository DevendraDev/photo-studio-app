import { useState } from "react";
import {
  Camera,
  ChevronDown,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "bookings", label: "Studio Bookings" },
  { id: "albums", label: "Karizma Albums" },
  { id: "gifting", label: "Gifting Corner" },
  { id: "cameras", label: "Camera Shop" },
];

function Navbar({ activePage, cartCount, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function selectPage(page) {
    onNavigate(page);
    setMenuOpen(false);
  }

  return (
    <>
      <div className="bg-peshwa-purple px-4 py-2 text-center text-xs font-medium tracking-wide text-white sm:px-6">
        <span className="text-paithani-gold">✦</span>
        <span className="mx-2">महाराष्ट्राची माती, आठवणींची सोबत</span>
        <span className="hidden text-white/70 sm:inline">
          · Pune&apos;s home for photographs that feel like home
        </span>
      </div>
      <header className="sticky top-0 z-40 border-b border-peshwa-purple/10 bg-rice-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <button
            type="button"
            className="flex min-w-0 items-center gap-2 text-left"
            onClick={() => selectPage("home")}
            aria-label="वास्तुचित्र Pro Lab home"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-peshwa-purple text-paithani-gold">
              <Camera size={21} strokeWidth={1.8} />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-semibold leading-tight text-peshwa-purple sm:text-lg">
                वास्तुचित्र <span className="font-sans text-sm font-bold">Pro Lab</span>
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-peshwa-purple/55">
                Pro Lab &amp; Studios · Pune
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            {links.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => selectPage(link.id)}
                aria-current={activePage === link.id ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  activePage === link.id
                    ? "bg-peshwa-purple/5 text-peshwa-purple"
                    : "text-peshwa-purple/70 hover:bg-peshwa-purple/5 hover:text-peshwa-purple"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full px-3 py-2 text-sm font-medium text-peshwa-purple/70 transition hover:bg-peshwa-purple/5 hover:text-peshwa-purple"
            >
              Contact
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="https://wa.me/919876543210?text=Namaskar%2C%20I%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-paithani-gold px-4 py-2.5 text-xs font-bold text-peshwa-purple shadow-sm transition hover:bg-[#e2c34d] sm:inline-flex"
            >
              <MessageCircle size={16} />
              WhatsApp us
            </a>
            <button
              type="button"
              onClick={() => selectPage("cameras")}
              className="relative grid size-10 place-items-center rounded-full border border-peshwa-purple/10 text-peshwa-purple transition hover:bg-peshwa-purple/5"
              aria-label={`Camera shop, ${cartCount} items in cart`}
            >
              <Camera size={17} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-kesari text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-full border border-peshwa-purple/10 text-peshwa-purple xl:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-peshwa-purple/10 bg-rice-white px-4 py-3 xl:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {links.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => selectPage(link.id)}
                  aria-current={activePage === link.id ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium ${
                    activePage === link.id
                      ? "bg-peshwa-purple/5 text-peshwa-purple"
                      : "text-peshwa-purple/75"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="-rotate-90" size={15} />
                </button>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-peshwa-purple/75"
              >
                Contact &amp; location
              </a>
              <a
                href="https://wa.me/919876543210?text=Namaskar%2C%20I%20would%20like%20to%20know%20more."
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-paithani-gold px-4 py-3 text-sm font-bold text-peshwa-purple"
              >
                <MessageCircle size={17} />
                Quick chat on WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;
