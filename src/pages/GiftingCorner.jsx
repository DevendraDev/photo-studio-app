import { useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Gift,
  Heart,
  Minus,
  Coffee,
  Plus,
  Shirt,
  Sparkles,
} from "lucide-react";

const gifts = [
  {
    id: "magic-mug",
    category: "Magic Mug",
    title: "A little magic, every morning",
    price: 499,
    type: "mug",
    badge: "CUSTOM FAVOURITE",
  },
  {
    id: "munj-tee",
    category: "Munj Package",
    title: "Munj memories, made to wear",
    price: 799,
    type: "tee",
    badge: "FAMILY EVENT",
  },
  {
    id: "dohale-tee",
    category: "Dohale Jevan",
    title: "A little one on the way",
    price: 849,
    type: "tee",
    badge: "FAMILY EVENT",
  },
  {
    id: "vastu-tee",
    category: "Vastu Shant",
    title: "New home, new beginnings",
    price: 899,
    type: "tee",
    badge: "FAMILY EVENT",
  },
  {
    id: "photo-clock",
    category: "Photo Wall Clock",
    title: "Every hour, a favourite face",
    price: 1199,
    type: "clock",
    badge: "MADE FOR YOUR WALL",
  },
];

const previewImage =
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85";

function GiftPreview({ selectedGift, message }) {
  if (selectedGift.type === "mug") {
    return (
      <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#fff4e8] to-[#f2e7dc]">
        <div className="absolute left-6 top-6 size-24 rounded-full bg-paithani-gold/20 blur-2xl" />
        <div className="relative h-36 w-36 -rotate-3 rounded-b-[42px] rounded-t-[22px] border border-peshwa-purple/10 bg-gradient-to-r from-[#f1f0ec] via-white to-[#e6e2d9] shadow-[8px_17px_20px_rgba(74,14,46,0.12)]">
          <div className="absolute -right-9 top-8 h-20 w-12 rounded-r-full border-[11px] border-l-0 border-[#e4e0d7] bg-transparent" />
          <div className="absolute inset-x-4 top-4 h-24 overflow-hidden rounded-xl border border-peshwa-purple/10 bg-white">
            <img src={previewImage} alt="Sample floral image on your mug preview" className="studio-photo h-full w-full object-cover" />
            <span className="absolute inset-x-1 bottom-1 rounded bg-white/80 px-1 py-0.5 text-center text-[8px] font-bold text-peshwa-purple">
              {message || "YOUR PHOTO"}
            </span>
          </div>
        </div>
        <span className="absolute bottom-5 rounded-full bg-white/75 px-3 py-1 text-[10px] font-semibold text-peshwa-purple/60 backdrop-blur">
          Magic reveal mug · preview
        </span>
      </div>
    );
  }

  if (selectedGift.type === "tee") {
    return (
      <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#f3edf2] to-[#e8dfe6]">
        <div className="relative flex h-44 w-52 items-center justify-center">
          <Shirt
            className="absolute size-52 fill-white text-[#e2dce0] drop-shadow-[8px_15px_12px_rgba(74,14,46,0.14)]"
            strokeWidth={0.75}
          />
          <div className="relative mt-3 flex size-16 flex-col items-center justify-center overflow-hidden rounded-full border border-peshwa-purple/10 bg-white">
            <img src={previewImage} alt="Sample image on your T-shirt preview" className="studio-photo h-full w-full object-cover" />
            <span className="absolute inset-x-0 bottom-0 bg-white/90 text-center text-[7px] font-bold text-peshwa-purple">
              {message || "OUR DAY"}
            </span>
          </div>
        </div>
        <span className="absolute bottom-5 rounded-full bg-white/75 px-3 py-1 text-[10px] font-semibold text-peshwa-purple/60 backdrop-blur">
          {selectedGift.category} · preview
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#fff8e4] to-[#eee4cb]">
      <div className="relative grid size-40 place-items-center rounded-full border-[10px] border-[#c4a351] bg-[#a98535] p-1 shadow-[0_15px_25px_rgba(74,14,46,0.18)]">
        <div className="relative grid size-full place-items-center overflow-hidden rounded-full border-[5px] border-[#f1d88c] bg-white">
          <img src={previewImage} alt="Sample photo on your wall clock preview" className="studio-photo absolute inset-0 h-full w-full object-cover opacity-80" />
          <span className="relative rounded bg-white/85 px-2 py-1 text-[9px] font-bold text-peshwa-purple">
            {message || "YOUR MOMENT"}
          </span>
        </div>
      </div>
      <span className="absolute bottom-5 rounded-full bg-white/75 px-3 py-1 text-[10px] font-semibold text-peshwa-purple/60 backdrop-blur">
        Photo wall clock · preview
      </span>
    </div>
  );
}

function GiftingCorner({ onAddToCart }) {
  const [selectedId, setSelectedId] = useState(gifts[0].id);
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState("");
  const selectedGift = gifts.find((gift) => gift.id === selectedId) ?? gifts[0];

  function addGift(gift, count = 1) {
    for (let index = 0; index < count; index += 1) onAddToCart();
    setAddedMessage(`${gift.category} added to your demo cart.`);
    window.setTimeout(() => setAddedMessage(""), 2400);
  }

  return (
    <section className="bg-rice-white">
      <div className="bg-[#fff4e8] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kesari">
            LITTLE THINGS, BIG FEELINGS
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-peshwa-purple sm:text-5xl">
            Gifts with your <span className="italic text-kesari">story</span> on them.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-peshwa-purple/70 sm:text-base">
            Add your favourite faces, a family in-joke, or the date you&apos;ll
            never forget. Made with love, right here in Kolhapur.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:px-12">
        <div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kesari">THE GIFT SHELF</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-peshwa-purple">
                Pick your happy.
              </h2>
            </div>
            <span className="text-xs text-peshwa-purple/50">{gifts.length} keepsake ideas</span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {gifts.map((gift) => {
              const isSelected = gift.id === selectedId;
              const Icon = gift.type === "mug" ? Coffee : gift.type === "tee" ? Shirt : Clock3;
              return (
                <article
                  key={gift.id}
                  className={`rounded-2xl border bg-white p-4 transition ${
                    isSelected ? "border-paithani-gold shadow-sm" : "border-peshwa-purple/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedId(gift.id);
                      setAddedMessage("");
                    }}
                    aria-pressed={isSelected}
                    className="w-full text-left"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#fff4e8] text-kesari">
                        <Icon size={19} />
                      </span>
                      <span className="rounded-full bg-peshwa-purple/5 px-2 py-1 text-[8px] font-bold tracking-wider text-peshwa-purple/60">
                        {gift.badge}
                      </span>
                    </span>
                    <span className="mt-4 block text-[10px] font-semibold uppercase tracking-wider text-kesari">
                      {gift.category}
                    </span>
                    <span className="mt-1 block font-display text-base font-semibold leading-6 text-peshwa-purple">
                      {gift.title}
                    </span>
                    <span className="mt-2 block text-sm font-bold text-peshwa-purple">
                      ₹{gift.price.toLocaleString("en-IN")}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedId(gift.id);
                      addGift(gift);
                    }}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-peshwa-purple/15 px-3 py-2.5 text-xs font-semibold text-peshwa-purple transition hover:border-peshwa-purple hover:bg-peshwa-purple hover:text-white"
                  >
                    <Gift size={15} />
                    Add to gift bag
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-peshwa-purple/10 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-28">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kesari">
                YOUR PREVIEW
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-peshwa-purple">
                A small glimpse of the magic.
              </h2>
            </div>
            <span className="grid size-10 place-items-center rounded-xl bg-paithani-gold/15 text-peshwa-purple">
              <Sparkles size={19} />
            </span>
          </div>

          <div className="mt-5">
            <GiftPreview selectedGift={selectedGift} message={message} />
          </div>

          <label className="mt-5 block text-xs font-semibold text-peshwa-purple">
            Your little message
            <input
              maxLength={24}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="e.g. Our happy place"
              className="mt-2 min-h-11 w-full rounded-xl border border-peshwa-purple/15 bg-rice-white px-3 text-sm text-peshwa-purple placeholder:text-peshwa-purple/40"
            />
            <span className="mt-1 block text-right text-[10px] font-normal text-peshwa-purple/45">
              {message.length}/24
            </span>
          </label>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-peshwa-purple/10 px-2 py-1.5">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                aria-label="Decrease quantity"
                className="grid size-8 place-items-center rounded-full text-peshwa-purple hover:bg-peshwa-purple/5"
              >
                <Minus size={14} />
              </button>
              <span className="min-w-4 text-center text-sm font-semibold text-peshwa-purple">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.min(20, value + 1))}
                aria-label="Increase quantity"
                className="grid size-8 place-items-center rounded-full text-peshwa-purple hover:bg-peshwa-purple/5"
              >
                <Plus size={14} />
              </button>
            </div>
            <span className="text-lg font-bold text-peshwa-purple">
              ₹{(selectedGift.price * quantity).toLocaleString("en-IN")}
            </span>
          </div>

          <button
            type="button"
            onClick={() => addGift(selectedGift, quantity)}
            className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-peshwa-purple px-5 text-sm font-semibold text-white transition hover:bg-peshwa-purple/90"
          >
            Add your custom gift <ArrowUpRight size={17} />
          </button>
          {addedMessage && (
            <p role="status" className="mt-3 flex items-center justify-center gap-2 text-xs text-green-800">
              <Heart size={14} className="fill-current" />
              {addedMessage}
            </p>
          )}
          <p className="mt-3 text-center text-[10px] leading-5 text-peshwa-purple/50">
            Preview artwork is illustrative. Final print placement is confirmed with our studio.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default GiftingCorner;
