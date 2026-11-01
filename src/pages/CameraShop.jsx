import { useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  GitCompareArrows,
  Heart,
  PackageCheck,
  ShoppingBag,
  SlidersHorizontal,
  X,
} from "lucide-react";

const products = [
  {
    id: "sony-a7-iv",
    name: "Sony Alpha 7 IV",
    category: "Mirrorless",
    brand: "Sony",
    price: 219990,
    detail: "33 MP · Full-frame · 4K 60p",
    image: "photo-1516035069371-29a1b244cc32",
    rating: "4.9",
  },
  {
    id: "canon-r6-ii",
    name: "Canon EOS R6 Mark II",
    category: "Mirrorless",
    brand: "Canon",
    price: 214990,
    detail: "24.2 MP · Full-frame · 4K 60p",
    image: "photo-1510127034890-ba27508e9f1c",
    rating: "4.8",
  },
  {
    id: "nikon-z6-iii",
    name: "Nikon Z6 III",
    category: "Mirrorless",
    brand: "Nikon",
    price: 229990,
    detail: "24.5 MP · Full-frame · 6K RAW",
    image: "photo-1502920917128-1aa500764cbd",
    rating: "4.9",
  },
  {
    id: "canon-90d",
    name: "Canon EOS 90D",
    category: "DSLR",
    brand: "Canon",
    price: 114990,
    detail: "32.5 MP · APS-C · 4K video",
    image: "photo-1495707902641-75cac588d2e9",
    rating: "4.7",
  },
  {
    id: "nikon-d7500",
    name: "Nikon D7500",
    category: "DSLR",
    brand: "Nikon",
    price: 82990,
    detail: "20.9 MP · APS-C · 4K video",
    image: "photo-1519183071298-a2962be90b8e",
    rating: "4.6",
  },
  {
    id: "sony-70200",
    name: "Sony FE 70–200mm f/2.8 GM II",
    category: "Lenses",
    brand: "Sony",
    price: 239990,
    detail: "Telephoto · f/2.8 · Full-frame",
    image: "photo-1617005082133-548c4dd27f35",
    rating: "4.9",
  },
  {
    id: "canon-24105",
    name: "Canon RF 24–105mm f/4 L IS",
    category: "Lenses",
    brand: "Canon",
    price: 114990,
    detail: "Standard zoom · f/4 · Image stabilised",
    image: "photo-1516035069371-29a1b244cc32",
    rating: "4.8",
  },
  {
    id: "nikon-tripod",
    name: "Nikon Carbon Travel Tripod",
    category: "Tripods",
    brand: "Nikon",
    price: 18990,
    detail: "Carbon fibre · 8 kg load · Travel-ready",
    image: "photo-1510270716297-7b6f0f8b4b37",
    rating: "4.5",
  },
  {
    id: "canon-flash",
    name: "Canon Speedlite EL-5",
    category: "Studio Flash Lights",
    brand: "Canon",
    price: 39990,
    detail: "Wireless flash · 60 guide number · Rechargeable",
    image: "photo-1516035069371-29a1b244cc32",
    rating: "4.6",
  },
  {
    id: "sony-flash",
    name: "Sony HVL-F60RM2 Flash",
    category: "Studio Flash Lights",
    brand: "Sony",
    price: 42990,
    detail: "Wireless flash · 60 guide number · 200 flashes",
    image: "photo-1519183071298-a2962be90b8e",
    rating: "4.7",
  },
];

const categories = [
  "All gear",
  "DSLR",
  "Mirrorless",
  "Lenses",
  "Tripods",
  "Studio Flash Lights",
];
const imageUrl = (image) =>
  `https://images.unsplash.com/${image}?auto=format&fit=crop&w=850&q=82`;
const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

function CameraShop({ onAddToCart }) {
  const [brand, setBrand] = useState("All brands");
  const [category, setCategory] = useState("All gear");
  const [maxPrice, setMaxPrice] = useState(250000);
  const [compareIds, setCompareIds] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [addedProductId, setAddedProductId] = useState("");

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          (brand === "All brands" || product.brand === brand) &&
          (category === "All gear" || product.category === category) &&
          product.price <= maxPrice,
      ),
    [brand, category, maxPrice],
  );
  const comparedProducts = products.filter((product) => compareIds.includes(product.id));

  function toggleCompare(productId) {
    setCompareIds((current) => {
      if (current.includes(productId)) return current.filter((id) => id !== productId);
      if (current.length >= 2) return current;
      return [...current, productId];
    });
  }

  function addProduct(productId) {
    onAddToCart();
    setAddedProductId(productId);
    window.setTimeout(() => setAddedProductId(""), 1500);
  }

  return (
    <section className="min-h-screen bg-white">
      <div className="border-b border-peshwa-purple/10 bg-white px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kesari">
            THE CAMERA COUNTER
          </p>
          <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="font-display text-4xl font-semibold text-peshwa-purple sm:text-5xl">
                Good gear. <span className="italic text-kesari">Better stories.</span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-peshwa-purple/65">
                Cameras, lenses, and light for wherever your curiosity takes you.
                Friendly guidance is always part of the kit.
              </p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f2f7f2] px-3 py-2 text-xs font-semibold text-green-800">
              <PackageCheck size={15} />
              Genuine gear · Studio-backed advice
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:px-8 lg:grid-cols-[220px_1fr] lg:gap-9 lg:px-12">
        <aside className="h-fit rounded-2xl border border-peshwa-purple/10 bg-white p-5 lg:sticky lg:top-28">
          <div className="flex items-center gap-2 font-semibold text-peshwa-purple">
            <SlidersHorizontal size={17} className="text-kesari" />
            Refine your kit
          </div>

          <fieldset className="mt-6">
            <legend className="text-xs font-bold uppercase tracking-wider text-peshwa-purple/55">
              Brand
            </legend>
            <div className="mt-3 space-y-3">
              {["All brands", "Sony", "Canon", "Nikon"].map((item) => (
                <label key={item} className="flex cursor-pointer items-center gap-2.5 text-sm text-peshwa-purple/80">
                  <input
                    type="radio"
                    name="brand"
                    value={item}
                    checked={brand === item}
                    onChange={() => setBrand(item)}
                    className="size-4 accent-[#4a0e2e]"
                  />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6 border-t border-peshwa-purple/10 pt-5">
            <legend className="text-xs font-bold uppercase tracking-wider text-peshwa-purple/55">
              Type
            </legend>
            <div className="mt-3 space-y-1">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs transition ${
                    category === item
                      ? "bg-peshwa-purple/5 font-semibold text-peshwa-purple"
                      : "text-peshwa-purple/60 hover:bg-peshwa-purple/5 hover:text-peshwa-purple"
                  }`}
                >
                  {item}
                  {category === item && <Check size={14} className="text-kesari" />}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6 border-t border-peshwa-purple/10 pt-5">
            <legend className="text-xs font-bold uppercase tracking-wider text-peshwa-purple/55">
              Price range
            </legend>
            <label htmlFor="price-range" className="mt-3 flex justify-between text-xs text-peshwa-purple/75">
              <span>Up to</span>
              <span className="font-bold text-peshwa-purple">{formatPrice(maxPrice)}</span>
            </label>
            <input
              id="price-range"
              type="range"
              min="15000"
              max="250000"
              step="5000"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="mt-3 w-full accent-[#4a0e2e]"
            />
            <div className="flex justify-between text-[10px] text-peshwa-purple/45">
              <span>₹15k</span>
              <span>₹2.5L</span>
            </div>
          </fieldset>

          <button
            type="button"
            onClick={() => {
              setBrand("All brands");
              setCategory("All gear");
              setMaxPrice(250000);
            }}
            className="mt-5 text-xs font-semibold text-kesari hover:underline"
          >
            Clear filters
          </button>
        </aside>

        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-peshwa-purple/60">
              <span className="font-bold text-peshwa-purple">{filteredProducts.length}</span>{" "}
              thoughtful picks
            </p>
            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-peshwa-purple/55 sm:inline">Sort by</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-peshwa-purple/10 px-3 py-2 text-xs text-peshwa-purple">
                Studio favourites <ChevronDown size={14} />
              </span>
              {compareIds.length > 0 && (
                <button
                  type="button"
                  onClick={() => setCompareOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-peshwa-purple px-3 py-2 text-xs font-semibold text-white"
                >
                  <GitCompareArrows size={14} />
                  Compare ({compareIds.length}/2)
                </button>
              )}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => {
                const isCompared = compareIds.includes(product.id);
                const compareDisabled = compareIds.length >= 2 && !isCompared;
                return (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-peshwa-purple/10 bg-white transition hover:border-peshwa-purple/20 hover:shadow-lg"
                  >
                    <div className="relative aspect-[1.13] overflow-hidden bg-[#f5f4f1]">
                      <img
                        src={imageUrl(product.image)}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-peshwa-purple backdrop-blur">
                        {product.brand}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleCompare(product.id)}
                        disabled={compareDisabled}
                        aria-pressed={isCompared}
                        className={`absolute right-3 top-3 grid size-9 place-items-center rounded-full backdrop-blur transition disabled:cursor-not-allowed disabled:opacity-40 ${
                          isCompared
                            ? "bg-peshwa-purple text-white"
                            : "bg-white/90 text-peshwa-purple hover:bg-white"
                        }`}
                        aria-label={`${isCompared ? "Remove" : "Add"} ${product.name} ${isCompared ? "from" : "to"} comparison`}
                      >
                        {isCompared ? <Check size={16} /> : <GitCompareArrows size={16} />}
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-wider text-kesari">
                            {product.category}
                          </p>
                          <h2 className="mt-1 font-display text-base font-semibold leading-6 text-peshwa-purple">
                            {product.name}
                          </h2>
                        </div>
                        <span className="mt-1 inline-flex shrink-0 items-center gap-1 text-[10px] font-semibold text-peshwa-purple/60">
                          <Heart size={12} className="fill-paithani-gold text-paithani-gold" />
                          {product.rating}
                        </span>
                      </div>
                      <p className="mt-2 text-[10px] leading-5 text-peshwa-purple/55">{product.detail}</p>
                      <p className="mt-3 text-base font-bold text-peshwa-purple">{formatPrice(product.price)}</p>
                      <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
                        <button
                          type="button"
                          onClick={() => addProduct(product.id)}
                          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-peshwa-purple px-3 text-xs font-semibold text-white transition hover:bg-peshwa-purple/90"
                        >
                          <ShoppingBag size={15} />
                          {addedProductId === product.id ? "Added!" : "Add to Cart"}
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleCompare(product.id)}
                          disabled={compareDisabled}
                          className={`inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border px-3 text-[10px] font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${
                            isCompared
                              ? "border-kesari bg-[#fff4e8] text-peshwa-purple"
                              : "border-peshwa-purple/15 text-peshwa-purple hover:border-peshwa-purple"
                          }`}
                        >
                          <GitCompareArrows size={13} />
                          Compare Specs
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-peshwa-purple/20 px-6 py-16 text-center">
              <ShoppingBag className="mx-auto text-peshwa-purple/35" size={30} />
              <p className="mt-3 font-semibold text-peshwa-purple">No gear in that range just yet.</p>
              <p className="mt-1 text-sm text-peshwa-purple/55">Try a different brand, type, or price cap.</p>
            </div>
          )}
        </div>
      </div>

      {compareOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-peshwa-purple/50 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setCompareOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="compare-heading"
            className="max-h-[85vh] w-full max-w-3xl overflow-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-kesari">SIDE BY SIDE</p>
                <h2 id="compare-heading" className="mt-2 font-display text-2xl font-semibold text-peshwa-purple">
                  Compare your shortlist
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setCompareOpen(false)}
                aria-label="Close comparison"
                className="grid size-9 place-items-center rounded-full border border-peshwa-purple/10 text-peshwa-purple"
              >
                <X size={17} />
              </button>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {comparedProducts.map((product) => (
                <article key={product.id} className="overflow-hidden rounded-2xl border border-peshwa-purple/10">
                  <img src={imageUrl(product.image)} alt="" className="h-36 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold text-peshwa-purple">{product.name}</h3>
                    <dl className="mt-3 space-y-2 text-xs">
                      <div className="flex justify-between gap-2">
                        <dt className="text-peshwa-purple/55">Brand</dt><dd>{product.brand}</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-peshwa-purple/55">Type</dt><dd>{product.category}</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-peshwa-purple/55">Key specs</dt><dd className="text-right">{product.detail}</dd>
                      </div>
                      <div className="flex justify-between gap-2 border-t border-peshwa-purple/10 pt-2">
                        <dt className="font-semibold">Studio price</dt><dd className="font-bold">{formatPrice(product.price)}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-4 text-[10px] text-peshwa-purple/50">
              Demo catalogue · Prices and specifications are illustrative.
            </p>
          </section>
        </div>
      )}
    </section>
  );
}

export default CameraShop;
