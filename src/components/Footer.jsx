import {
  Clock3,
  Camera,
  Images,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer id="contact" className="bg-peshwa-purple text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl border border-paithani-gold/45 bg-white/5 text-paithani-gold">
                <MapPin size={20} />
              </span>
              <div>
                <p className="font-display text-xl font-semibold">
                  Subhash <span className="font-sans text-base">Photos</span>
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-paithani-gold">
                  Photo Lab &amp; Studios · Kolhapur
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              तुमच्या प्रत्येक सोहळ्याला, आठवणींची सुंदर चौकट.
              <br />
              A little Maharashtrian magic in every frame.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="https://www.instagram.com/subhashphotographics/?hl=en"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-paithani-gold transition hover:bg-white/10"
              >
                <Camera size={17} />
              </a>
              <a
                href="https://www.instagram.com/subhashphotoalbum/"
                target="_blank"
                rel="noreferrer"
                aria-label="Subhash Photos wedding and family albums on Instagram"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-paithani-gold transition hover:bg-white/10"
              >
                <Images size={17} />
              </a>
              <a
                href="https://wa.me/919890908529"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-paithani-gold transition hover:bg-white/10"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-paithani-gold">
              Visit the studio
            </h2>
            <address className="mt-4 flex gap-3 text-sm not-italic leading-7 text-white/75">
              <MapPin className="mt-1 shrink-0 text-paithani-gold" size={17} />
              <span>
                741/A, E Ward, 3rd lane Shahupuri,
                <br />
                Kolhapur, Maharashtra 416001, India
              </span>
            </address>
            <a
              href="tel:+919890908529"
              className="mt-3 flex items-center gap-3 text-sm text-white/75 transition hover:text-white"
            >
              <Phone size={16} className="text-paithani-gold" />
              09890908529
            </a>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-paithani-gold">
              Hours &amp; directions
            </h2>
            <div className="mt-4 flex gap-3 text-sm text-white/75">
              <Clock3 size={17} className="mt-0.5 shrink-0 text-paithani-gold" />
              <div className="space-y-1">
                <p>Tue–Sun · 10:00 am–8:00 pm</p>
                <p>Monday · By appointment</p>
              </div>
            </div>
            <div className="map-grid relative mt-4 flex h-28 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/5">
              <div className="absolute left-[27%] top-1/4 h-20 w-20 rounded-full border border-paithani-gold/35" />
              <div className="absolute right-[20%] top-2 h-16 w-16 rounded-full border border-white/15" />
              <span className="relative grid size-10 place-items-center rounded-full bg-paithani-gold text-peshwa-purple shadow-lg">
                <MapPin size={19} />
              </span>
              <span className="absolute bottom-2 left-3 text-[10px] font-medium text-white/75">
                Shahupuri · Kolhapur
              </span>
              <span className="absolute right-3 top-2 rounded-full bg-white/10 px-2 py-1 text-[8px] uppercase tracking-widest text-paithani-gold">
                Studio map
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Holiday hours may vary during Ganeshotsav, Diwali &amp; Gudi Padwa.
            Please call ahead.
          </p>
          <p>© {new Date().getFullYear()} Subhash Photos</p>
        </div>
        <p className="mt-3 text-[10px] text-white/40">
          Demo storefront · No real payment processing
        </p>
      </div>
    </footer>
  );
}

export default Footer;
