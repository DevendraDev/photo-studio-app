import { useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  CloudUpload,
  FileImage,
  Frame,
  Images,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const albums = [
  {
    name: "Waterproof Matte",
    subtitle: "Soft-touch pages, made for a lifetime of turning.",
    price: "From ₹8,500",
    finish: "Velvety matte",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Heavy Acrylic Cover",
    subtitle: "A statement cover with a photograph that shines.",
    price: "From ₹12,500",
    finish: "Polished acrylic",
    image:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Royal Leather Binding",
    subtitle: "Rich texture and heirloom-worthy craftsmanship.",
    price: "From ₹15,000",
    finish: "Premium leather",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
  },
];

const frames = [
  {
    name: "Collage Frames",
    detail: "One wall, all your favourite chapters.",
    price: "From ₹1,800",
    icon: Images,
  },
  {
    name: "Canvas Prints",
    detail: "Gallery-style texture for your most-loved photograph.",
    price: "From ₹1,200",
    icon: Frame,
  },
  {
    name: "Floating Glass",
    detail: "A light, modern finish with a little extra shine.",
    price: "From ₹2,500",
    icon: Sparkles,
  },
];

function KarizmaAlbums() {
  const fileInput = useRef(null);
  const [files, setFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState("");
  const [dragging, setDragging] = useState(false);

  function receiveFiles(fileList) {
    const selectedFiles = Array.from(fileList ?? []);
    if (selectedFiles.length === 0) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/heic"];
    const invalidType = selectedFiles.find((file) => !allowedTypes.includes(file.type));
    if (invalidType) {
      setUploadMessage(`${invalidType.name} is not a supported image. Please use JPG, PNG, WebP or HEIC.`);
      return;
    }
    const tooLarge = selectedFiles.find((file) => file.size > 30 * 1024 * 1024);
    if (tooLarge) {
      setUploadMessage(`${tooLarge.name} is over 30 MB. Please choose a smaller image.`);
      return;
    }

    setFiles((currentFiles) => [
      ...currentFiles,
      ...selectedFiles.filter(
        (file) => !currentFiles.some((existing) => existing.name === file.name && existing.size === file.size),
      ),
    ]);
    setUploadMessage(`${selectedFiles.length} photo${selectedFiles.length === 1 ? "" : "s"} ready for your album design preview.`);
  }

  return (
    <section className="bg-rice-white">
      <div className="bg-[#f3edf2] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kesari">
            MADE TO BE HELD ONTO
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-peshwa-purple sm:text-5xl">
            Stories deserve a <span className="italic text-kesari">beautiful</span> cover.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-peshwa-purple/70 sm:text-base">
            Karizma albums, fine-art wall frames, and heirlooms made from the
            days you never want to forget.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-kesari">
              KARIZMA COLLECTION
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-peshwa-purple">
              Your wedding, bound to last.
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 text-xs text-peshwa-purple/60">
            <ShieldCheck size={16} className="text-kesari" />
            Archival-quality print finish
          </span>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {albums.map((album) => (
            <article
              key={album.name}
              className="group overflow-hidden rounded-2xl border border-peshwa-purple/10 bg-white"
            >
              <div className="relative h-56 overflow-hidden bg-[#eee8e2]">
                <img
                  src={album.image}
                  alt={`${album.name} wedding album inspiration`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-rice-white/90 px-3 py-1.5 text-[10px] font-semibold text-peshwa-purple backdrop-blur">
                  {album.finish}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-peshwa-purple">
                  {album.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-peshwa-purple/65">{album.subtitle}</p>
                <div className="mt-5 flex items-center justify-between border-t border-peshwa-purple/10 pt-4">
                  <span className="text-sm font-bold text-peshwa-purple">{album.price}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-kesari">
                    Customise <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kesari">
            MAKE ROOM FOR THE MOMENTS
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-peshwa-purple">
            Frames that feel like home.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {frames.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.name}
                  className="flex gap-4 rounded-2xl border border-peshwa-purple/10 bg-white p-5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-paithani-gold/15 text-peshwa-purple">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-peshwa-purple">{item.name}</h3>
                    <p className="mt-1 text-xs leading-5 text-peshwa-purple/60">{item.detail}</p>
                    <p className="mt-3 text-xs font-bold text-kesari">{item.price}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <section
          className={`mt-14 rounded-3xl border-2 border-dashed p-6 text-center transition sm:p-10 ${
            dragging ? "border-kesari bg-[#fff7ed]" : "border-paithani-gold/60 bg-[#fffdf7]"
          }`}
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            receiveFiles(event.dataTransfer.files);
          }}
        >
          <input
            ref={fileInput}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic"
            multiple
            className="sr-only"
            onChange={(event) => receiveFiles(event.target.files)}
            aria-label="Choose high-resolution album photos"
          />
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-paithani-gold/20 text-peshwa-purple">
            <CloudUpload size={27} />
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold text-peshwa-purple">
            Upload Your High-Res Photos Here to Design Your Album
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-peshwa-purple/60">
            Drop JPG, PNG, WebP or HEIC images here, or browse your device.
            Each image can be up to 30 MB. Files stay in this local demo.
          </p>
          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-peshwa-purple px-5 py-3 text-sm font-semibold text-white transition hover:bg-peshwa-purple/90"
          >
            <FileImage size={17} />
            Choose photos
          </button>

          {files.length > 0 && (
            <ul className="mx-auto mt-6 grid max-w-2xl gap-2 text-left sm:grid-cols-2">
              {files.map((file, index) => (
                <li
                  key={`${file.name}-${file.size}-${index}`}
                  className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 text-xs text-peshwa-purple shadow-sm"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <FileImage className="shrink-0 text-kesari" size={15} />
                    <span className="truncate">{file.name}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const remaining = files.filter((_, fileIndex) => fileIndex !== index);
                      setFiles(remaining);
                      setUploadMessage(
                        remaining.length
                          ? `${remaining.length} photo${remaining.length === 1 ? "" : "s"} ready for your album design preview.`
                          : "",
                      );
                    }}
                    aria-label={`Remove ${file.name}`}
                    className="grid size-7 shrink-0 place-items-center rounded-full text-peshwa-purple/60 hover:bg-peshwa-purple/5"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
          {uploadMessage && (
            <p
              role="status"
              className={`mt-4 inline-flex items-center gap-2 text-xs ${
                files.length ? "text-green-800" : "text-kesari"
              }`}
            >
              {files.length > 0 && <CheckCircle2 size={15} />}
              {uploadMessage}
            </p>
          )}
        </section>
      </div>
    </section>
  );
}

export default KarizmaAlbums;
