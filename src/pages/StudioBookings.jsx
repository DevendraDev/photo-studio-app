import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  IndianRupee,
  Sparkles,
} from "lucide-react";

const bookingTypes = [
  {
    name: "Ganeshotsav Special",
    detail: "Family portraits, aarti moments & festive finery",
    price: 2500,
    tag: "MOST LOVED",
  },
  {
    name: "Diwali & Kojagiri",
    detail: "Warm, glowing portraits for your brightest nights",
    price: 3200,
    tag: "FESTIVE FAVOURITE",
  },
  {
    name: "Janmashtami & Baby Shoots",
    detail: "Little Krishna magic and baby-first milestones",
    price: 2800,
    tag: "LITTLE MOMENTS",
  },
];

const timeSlots = ["10:00 am", "11:30 am", "1:00 pm", "3:30 pm", "5:00 pm", "6:30 pm"];
const tokenAmount = 501;

function dateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function StudioBookings() {
  const [activeType, setActiveType] = useState(0);
  const [viewMonth, setViewMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingName, setBookingName] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");

  const calendarDays = useMemo(() => {
    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return [
      ...Array.from({ length: firstWeekday }, () => null),
      ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
    ];
  }, [viewMonth]);

  function changeMonth(direction) {
    const nextMonth = new Date(
      viewMonth.getFullYear(),
      viewMonth.getMonth() + direction,
      1,
    );
    const today = new Date();
    if (
      nextMonth.getFullYear() < today.getFullYear() ||
      (nextMonth.getFullYear() === today.getFullYear() &&
        nextMonth.getMonth() < today.getMonth())
    ) {
      return;
    }
    setViewMonth(nextMonth);
  }

  function isPastDate(day) {
    if (!day) return true;
    const today = new Date();
    const candidate = new Date(
      viewMonth.getFullYear(),
      viewMonth.getMonth(),
      day,
    );
    today.setHours(0, 0, 0, 0);
    return candidate < today;
  }

  function submitBooking(event) {
    event.preventDefault();
    if (!selectedDate || !selectedTime) {
      setBookingMessage("Please pick a date and time to continue.");
      return;
    }
    setBookingMessage(
      `Namaskar, ${bookingName.trim()}! Your ${bookingTypes[activeType].name} slot for ${new Date(`${selectedDate}T12:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long" })} at ${selectedTime} is reserved in this demo. No payment has been taken.`,
    );
  }

  const monthLabel = viewMonth.toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });
  const canGoBack = (() => {
    const now = new Date();
    return (
      viewMonth.getFullYear() > now.getFullYear() ||
      (viewMonth.getFullYear() === now.getFullYear() &&
        viewMonth.getMonth() > now.getMonth())
    );
  })();

  return (
    <section className="bg-rice-white">
      <div className="bg-[#f3ecf1] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kesari">
            LET&apos;S MAKE A MEMORY
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-peshwa-purple sm:text-5xl">
            Festive studio <span className="italic text-kesari">bookings.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-peshwa-purple/70 sm:text-base">
            Choose a celebration, find a time that feels right, and we&apos;ll
            take care of the rest. तुमचा खास क्षण, आमची खास फ्रेम.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1fr_0.85fr] lg:gap-12 lg:px-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.17em] text-peshwa-purple/60">
            <Sparkles size={15} className="text-kesari" />
            Pick your occasion
          </div>
          <div className="mt-4 grid gap-3">
            {bookingTypes.map((type, index) => (
              <button
                type="button"
                key={type.name}
                onClick={() => {
                  setActiveType(index);
                  setBookingMessage("");
                }}
                aria-pressed={activeType === index}
                className={`rounded-2xl border p-4 text-left transition sm:p-5 ${
                  activeType === index
                    ? "border-paithani-gold bg-[#fffaf0] shadow-sm"
                    : "border-peshwa-purple/10 bg-white hover:border-peshwa-purple/25"
                }`}
              >
                <span className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-display text-lg font-semibold text-peshwa-purple">
                    {type.name}
                  </span>
                  <span className="rounded-full bg-paithani-gold/20 px-2.5 py-1 text-[9px] font-bold tracking-wider text-peshwa-purple">
                    {type.tag}
                  </span>
                </span>
                <span className="mt-1 block text-xs text-peshwa-purple/60">{type.detail}</span>
                <span className="mt-3 block text-sm font-bold text-peshwa-purple">
                  From ₹{type.price.toLocaleString("en-IN")}
                  <span className="ml-1 font-normal text-peshwa-purple/50">· 45-minute session</span>
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-peshwa-purple/10 bg-white p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} className="text-kesari" />
                <h2 className="font-display text-lg font-semibold text-peshwa-purple">
                  Choose a date
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => changeMonth(-1)}
                  disabled={!canGoBack}
                  aria-label="Previous month"
                  className="grid size-8 place-items-center rounded-full border border-peshwa-purple/10 text-peshwa-purple disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ArrowLeft size={15} />
                </button>
                <span className="min-w-28 text-center text-sm font-semibold text-peshwa-purple">
                  {monthLabel}
                </span>
                <button
                  type="button"
                  onClick={() => changeMonth(1)}
                  aria-label="Next month"
                  className="grid size-8 place-items-center rounded-full border border-peshwa-purple/10 text-peshwa-purple"
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-7 gap-y-2 text-center">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <span key={day} className="pb-2 text-[10px] font-bold uppercase text-peshwa-purple/45">
                  {day}
                </span>
              ))}
              {calendarDays.map((day, index) => {
                const key = day
                  ? dateKey(viewMonth.getFullYear(), viewMonth.getMonth(), day)
                  : `empty-${index}`;
                const disabled = isPastDate(day);
                return (
                  <span key={key} className="grid place-items-center">
                    {day ? (
                      <button
                        type="button"
                        disabled={disabled}
                        onClick={() => {
                          setSelectedDate(key);
                          setBookingMessage("");
                        }}
                        aria-pressed={selectedDate === key}
                        className={`grid size-9 place-items-center rounded-full text-xs transition ${
                          selectedDate === key
                            ? "bg-peshwa-purple font-bold text-white"
                            : disabled
                              ? "cursor-not-allowed text-peshwa-purple/25"
                              : "text-peshwa-purple hover:bg-paithani-gold/20"
                        }`}
                      >
                        {day}
                      </button>
                    ) : (
                      <span className="size-9" />
                    )}
                  </span>
                );
              })}
            </div>
            <p className="mt-3 text-center text-[10px] text-peshwa-purple/50">
              Studio hours: 10:00 am–7:00 pm · All times are local to Kolhapur
            </p>
          </div>

          <div className="mt-7">
            <div className="flex items-center gap-2">
              <Clock3 size={17} className="text-kesari" />
              <h2 className="font-display text-lg font-semibold text-peshwa-purple">
                Pick a time
              </h2>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {timeSlots.map((time) => (
                <button
                  type="button"
                  key={time}
                  disabled={!selectedDate}
                  onClick={() => {
                    setSelectedTime(time);
                    setBookingMessage("");
                  }}
                  aria-pressed={selectedTime === time}
                  className={`rounded-xl border px-3 py-3 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${
                    selectedTime === time
                      ? "border-peshwa-purple bg-peshwa-purple text-white"
                      : "border-peshwa-purple/15 bg-white text-peshwa-purple hover:border-paithani-gold"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-3xl bg-peshwa-purple p-5 text-white sm:p-7 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paithani-gold">
            YOUR SESSION
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold">
            A little more you, in every picture.
          </h2>
          <div className="mt-6 space-y-3 rounded-2xl bg-white/8 p-4">
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-white/65">Experience</span>
              <span className="text-right font-medium">{bookingTypes[activeType].name}</span>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-white/65">Selected slot</span>
              <span className="text-right font-medium">
                {selectedDate
                  ? new Date(`${selectedDate}T12:00:00`).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })
                  : "Choose a date"}
                {selectedTime ? ` · ${selectedTime}` : ""}
              </span>
            </div>
            <div className="border-t border-white/15 pt-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/65">Session starting at</span>
                <span>₹{bookingTypes[activeType].price.toLocaleString("en-IN")}</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 font-semibold">
                  <IndianRupee size={15} /> Token to reserve
                </span>
                <span className="text-lg font-bold text-paithani-gold">
                  ₹{tokenAmount}
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={submitBooking} className="mt-6 space-y-4">
            <label className="block text-xs font-semibold text-white/85">
              Your name
              <input
                required
                value={bookingName}
                onChange={(event) => setBookingName(event.target.value)}
                placeholder="e.g. Ananya Deshmukh"
                className="mt-2 min-h-11 w-full rounded-xl border border-white/15 bg-white/10 px-3 text-sm text-white placeholder:text-white/40"
              />
            </label>
            <label className="block text-xs font-semibold text-white/85">
              Mobile number
              <input
                required
                type="tel"
                inputMode="tel"
                pattern="[+0-9 ()-]{10,16}"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="09890908529"
                className="mt-2 min-h-11 w-full rounded-xl border border-white/15 bg-white/10 px-3 text-sm text-white placeholder:text-white/40"
              />
            </label>
            <button
              type="submit"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-paithani-gold px-5 text-sm font-bold text-peshwa-purple transition hover:bg-[#e2c34d]"
            >
              <IndianRupee size={16} />
              Pay token amount to book
            </button>
          </form>

          {bookingMessage && (
            <p
              role="status"
              className="mt-4 flex gap-2 rounded-xl border border-paithani-gold/30 bg-white/10 p-3 text-xs leading-5 text-white"
            >
              <CheckCircle2 className="mt-0.5 shrink-0 text-paithani-gold" size={16} />
              {bookingMessage}
            </p>
          )}
          <p className="mt-4 text-center text-[10px] leading-5 text-white/50">
            Demo checkout only · No payment is processed and no card details are requested.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default StudioBookings;
