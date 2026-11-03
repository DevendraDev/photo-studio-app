import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, CalendarHeart, Camera } from "lucide-react";

const slides = [
  {
    name: "Happy Diwali",
    season: "HAPPY DIWALI",
    detail: "Wishing your family a festival filled with light, laughter, and memories to cherish.",
    image: "/DiwaliFamilyPic.jpg",
    theme: "diwali",
  },
  {
    name: "Gudi Padwa",
    season: "A NEW YEAR, A NEW MEMORY",
    image: "/family-portrait-gudiPadwa.avif",
    localizedMessage:
      "चैत्राची सोनेरी पहाट: नव्या स्वप्नांची नवी लाट, नव्या वर्षाची सुरवात",
    theme: "brand",
  },
  {
    name: "Ganeshotsav",
    season: "MANGALMAY GANESHOTSAV",
    image: "/Family-Ganesh.webp",
    localizedMessage: "गणपती बाप्पा मोरया, मंगलमूर्ती मोरया!",
    theme: "brand",
  },
  {
    name: "Maharashtrian Weddings",
    season: "A WEDDING, ROOTED IN YOU",
    detail: "The shehnai, the silk, the moments between the rituals.",
    localizedMessage: "महाराष्ट्राच्या परंपरा, तुमच्या आठवणी... आम्ही जपू आयुष्यभर।",
    image:
      "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?auto=format&fit=crop&w=2000&q=88",
    theme: "brand",
  },
];

function Hero({ onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, []);

  function moveSlide(direction) {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length,
    );
  }

  const slide = slides[activeSlide];

  return (
    <section className="relative isolate min-h-[610px] overflow-hidden bg-peshwa-purple sm:min-h-[680px]">
      <div
        key={slide.name}
        className={`hero-image absolute inset-0 -z-20 hero-slide ${
          slide.theme === "diwali" ? "hero-image--diwali" : ""
        }`}
        style={{
          backgroundImage: `url("${slide.image}"), linear-gradient(125deg, #153d66 0%, #285c89 54%, #ddb63e 100%)`,
        }}
        role="img"
        aria-label={`${slide.name} photography at Subhash Photos`}
      />
      <div className="hero-glow absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className={`absolute inset-0 -z-10 ${
          slide.theme === "diwali"
            ? "bg-gradient-to-r from-[#19140f]/80 via-[#19140f]/45 to-[#19140f]/10"
            : "bg-gradient-to-r from-peshwa-purple/78 via-peshwa-purple/42 to-peshwa-purple/8"
        }`}
      />
      <div
        className={`absolute inset-0 -z-10 ${
          slide.theme === "diwali"
            ? "bg-gradient-to-t from-[#19140f]/42 via-transparent to-[#19140f]/10"
            : "bg-gradient-to-t from-peshwa-purple/42 via-transparent to-peshwa-purple/10"
        }`}
      />

      <div className="mx-auto flex min-h-[610px] max-w-7xl items-center px-5 py-16 sm:min-h-[680px] sm:px-8 lg:px-12">
        <div key={`copy-${slide.name}`} className="hero-slide max-w-2xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-paithani-gold/60 bg-peshwa-purple/35 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-paithani-gold backdrop-blur">
            <span className="size-1.5 rounded-full bg-kesari" />
            {slide.season}
          </div>
          {slide.theme === "diwali" ? (
            <>
              <h1 className="max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Happy <span className="text-paithani-gold">Diwali!</span>
              </h1>
              <p className="mt-4 max-w-xl font-display text-xl font-medium text-white sm:text-2xl">
                दिवाळीच्या हार्दिक शुभेच्छा
              </p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                Preserving the light, laughter, and little moments your family
                will treasure for years to come.
              </p>
            </>
          ) : (
            <>
              <h1 className="max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                {slide.name}
              </h1>
              <p className="mt-4 max-w-xl font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
                {slide.localizedMessage}
              </p>
              {slide.detail && (
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                  {slide.detail}
                </p>
              )}
            </>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("bookings")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-paithani-gold px-6 py-3 text-sm font-bold text-peshwa-purple shadow-lg transition hover:-translate-y-0.5 hover:bg-[#e4c453]"
            >
              <CalendarHeart size={17} />
              Book Festive Shoot
            </button>
            <button
              type="button"
              onClick={() => onNavigate("cameras")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Camera size={17} />
              Explore Camera Shop
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-5 mx-auto flex max-w-7xl items-center justify-between px-5 sm:bottom-8 sm:px-8 lg:px-12">
        <a
          href="#studio-pillars"
          className="hidden items-center gap-2 text-xs font-medium text-white/70 transition hover:text-white sm:inline-flex"
        >
          Discover the studio <ArrowDown size={14} />
        </a>
        <div className="ml-auto flex items-center gap-3">
          <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-white/70">
            {String(activeSlide + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1.5">
            {slides.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${item.name} slide`}
                aria-pressed={activeSlide === index}
                className={`h-1 rounded-full transition-all ${
                  activeSlide === index ? "w-8 bg-paithani-gold" : "w-4 bg-white/50"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => moveSlide(-1)}
            aria-label="Previous slide"
            className="grid size-9 place-items-center rounded-full border border-white/35 text-white transition hover:bg-white/15"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => moveSlide(1)}
            aria-label="Next slide"
            className="grid size-9 place-items-center rounded-full border border-white/35 text-white transition hover:bg-white/15"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
