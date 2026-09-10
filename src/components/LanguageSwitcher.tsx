import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Locale } from "../i18n/messages";

type Props = {
  globeSrc: string;
  chevronSrc: string;
  className?: string;
  /** Compact for H5 header */
  compact?: boolean;
};

export default function LanguageSwitcher({
  globeSrc,
  chevronSrc,
  className = "",
  compact = false,
}: Props) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function pick(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className={`flex items-center gap-1.5 rounded-lg border-[1.67px] border-[#dfe1ef] bg-[#faf8ff] ${
          compact ? "px-3 py-2" : "px-3 py-2"
        }`}
        onClick={() => setOpen((v) => !v)}
      >
        <img src={globeSrc} alt="" className="size-3.5" />
        <span className="font-sans text-xs font-semibold text-[#191b24]">{t.langLabel}</span>
        <img
          src={chevronSrc}
          alt=""
          className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[96px] overflow-hidden rounded-lg border border-[#dfe1ef] bg-white py-1 shadow-lg"
        >
          {(
            [
              ["en", t.langEn],
              ["zh", t.langZh],
            ] as const
          ).map(([code, label]) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={locale === code}
                className={`block w-full px-3 py-2 text-left text-xs font-semibold ${
                  locale === code ? "bg-[#f2f3ff] text-[#0050cb]" : "text-[#191b24] hover:bg-[#faf8ff]"
                }`}
                onClick={() => pick(code)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
