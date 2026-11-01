import {
  ArrowUpRight,
  Camera,
  Gift,
  Heart,
  Images,
  Sparkles,
} from "lucide-react";
import Hero from "../components/Hero.jsx";

const pillars = [
  {
    id: "bookings",
    number: "01",
    icon: Camera,
    title: "Studio Bookings",
    subtitle: "तुमचा खास क्षण, आमची खास फ्रेम",
    body: "Festive portraits, tiny firsts, and family celebrations—made at your pace.",
    tone: "bg-[#fff4e8]",
    iconTone: "bg-[#ff6f00]/10 text-[#e65d00]",
    link: "Find a shoot",
  },
  {
    id: "albums",
    number: "02",
    icon: Images,
    title: "Karizma Albums",
    subtitle: "सुखद आठवणींचा सुंदर ठेवा",
    body: "Wedding albums, handcrafted finishes, and the wall art you grow with.",
    tone: "bg-[#f3edf2]",
    iconTone: "bg-[#4a0e2e]/10 text-[#4a0e2e]",
    link: "See the collection",
  },
  {
    id: "gifting",
    number: "03",
    icon: Gift,
    title: "Gifting Corner",
    subtitle: "आठवणींची भेट, मनापासून",
    body: "A favourite face on a mug, a family tee, and little gifts with a big heart.",
    tone: "bg-[#fff8e4]",
    iconTone: "bg-[#d4af37]/20 text-[#8a6c11]",
    link: "Make it personal",
  },
  {
    id: "cameras",
    number: "04",
    icon: Camera,
    title: "Camera Shop",
    subtitle: "नवा दृष्टिकोन, नवी सुरुवात",
    body: "Cameras and creator essentials, with friendly advice for every first frame.",
    tone: "bg-[#edf3ef]",
    iconTone: "bg-[#314f3d]/10 text-[#314f3d]",
    link: "Explore gear",
  },
];

function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <section id="studio-pillars" className="bg-rice-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kesari">
                OUR LITTLE WORLD
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-peshwa-purple sm:text-4xl">
                One studio, <span className="italic text-kesari">many</span> ways
                to remember.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-peshwa-purple/65">
              From the first click to the frame on your wall, we bring your
              favourite moments a little closer.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <button
                  type="button"
                  key={pillar.id}
                  onClick={() => onNavigate(pillar.id)}
                  className={`group flex min-h-[275px] flex-col rounded-2xl ${pillar.tone} p-6 text-left transition duration-200 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`grid size-12 place-items-center rounded-2xl ${pillar.iconTone}`}>
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-peshwa-purple/40">
                      {pillar.number}
                    </span>
                  </div>
                  <p className="mt-6 text-xs font-medium text-peshwa-purple/65">{pillar.subtitle}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-peshwa-purple">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-peshwa-purple/65">{pillar.body}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-bold text-peshwa-purple">
                    {pillar.link}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <a
            href="https://www.instagram.com/subhashphotoalbum/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex flex-col gap-4 rounded-2xl border border-paithani-gold/35 bg-[#fffaf0] p-5 transition hover:border-paithani-gold hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-7"
          >
            <span className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-peshwa-purple text-paithani-gold">
                <Images size={21} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-kesari">
                  A peek at the real moments
                </span>
                <span className="mt-1 block font-display text-lg font-semibold text-peshwa-purple">
                  See our wedding &amp; family albums on Instagram
                </span>
                <span className="mt-1 block text-xs text-peshwa-purple/60">
                  @subhashphotoalbum
                </span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2 pl-[3.75rem] text-xs font-bold text-peshwa-purple sm:pl-0">
              Visit Instagram <ArrowUpRight size={16} />
            </span>
          </a>

          <div className="mt-14 overflow-hidden rounded-3xl bg-peshwa-purple px-6 py-8 text-white sm:px-10 sm:py-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-paithani-gold/15 text-paithani-gold">
                  <Sparkles size={21} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-paithani-gold">
                    A NOTE FROM THE STUDIO
                  </p>
                  <p className="mt-2 max-w-2xl font-display text-lg leading-7 sm:text-xl">
                    “The best photographs don’t just show you how it looked.
                    They bring you right back to how it felt.”
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 pl-14 text-sm text-white/70 sm:pl-0">
                Made with <Heart size={14} className="fill-kesari text-kesari" /> in Kolhapur
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
