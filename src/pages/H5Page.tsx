import { useState } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";

const a = "/assets/h5";
const imgLogo = `${a}/imgKnockNokLogo.png`;
const imgRectangle1 = `${a}/imgRectangle1.png`;
const imgRectangle2 = `${a}/imgRectangle2.png`;
const imgRectangle3 = `${a}/imgRectangle3.png`;
const imgIcon = `${a}/imgIcon.svg`;
const imgIcon1 = `${a}/imgIcon1.svg`;
const imgMenu = `${a}/imgMenu.svg`;
const imgGlobe = `${a}/imgContainer.svg`;
const imgTrend = `${a}/imgContainer1.svg`;
const imgUs = `${a}/imgUs.svg`;
const imgCopy = `${a}/imgContainer2.svg`;
const imgPlus = `${a}/imgContainer3.svg`;
const imgSend = `${a}/imgContainer4.svg`;
const imgReceive = `${a}/imgContainer5.svg`;
const imgConvert = `${a}/imgContainer6.svg`;
const imgControl = `${a}/imgContainer7.svg`;
const imgChevronUp = `${a}/imgContainer8.svg`;
const imgChevronDown = `${a}/imgContainer9.svg`;
const imgDisclosure = `${a}/imgContainer10.svg`;
const imgVector = `${a}/imgVector.svg`;
const imgVector1 = `${a}/imgVector1.svg`;
const imgVector2 = `${a}/imgVector2.svg`;
const imgVector3 = `${a}/imgVector3.svg`;

export default function H5Page() {
  const { t, locale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div
      className="mx-auto min-h-screen w-full max-w-[375px] bg-[#faf8ff] font-sans text-[#191b24] shadow-xl"
      data-node-id="66:3150"
      lang={locale === "zh" ? "zh-CN" : "en"}
    >
      <header className="sticky top-0 z-50 bg-[rgba(250,248,255,0.8)] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] backdrop-blur-[12px]">
        <div className="flex items-center justify-between p-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={imgLogo} alt="KnockNok" className="size-8 rounded-full object-cover" />
            <span className="text-xl font-bold tracking-tight">KnockNok</span>
          </a>
          <div className="flex items-center gap-3">
            <LanguageSwitcher globeSrc={imgIcon} chevronSrc={imgIcon1} compact />
            <button
              type="button"
              aria-label={t.menuAria}
              className="flex size-8 items-center justify-center rounded-lg border border-[#dfe1ef] bg-[#faf8ff]"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <img src={imgMenu} alt="" className="size-5" />
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="flex flex-col gap-3 border-t border-[rgba(194,198,216,0.3)] px-4 py-3 text-sm font-medium text-[#424656]">
            <a href="#features" onClick={() => setMenuOpen(false)}>
              {t.navFeatures}
            </a>
            <a href="#how" onClick={() => setMenuOpen(false)}>
              {t.navHow}
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              {t.navFaq}
            </a>
            <a href="/web" className="text-[#0050cb]">
              {t.desktopVersion}
            </a>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-4 pb-6 pt-4">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute right-0 top-[-400px] h-[688px] w-[375px] rounded-full bg-[rgba(179,197,255,0.2)] blur-[32px]" />
            <div className="absolute bottom-[-288px] left-0 h-[688px] w-[375px] rounded-full bg-[rgba(214,227,255,0.3)] blur-[32px]" />
          </div>
          <div className="relative flex flex-col gap-4">
            <h1 className="text-[26px] font-bold leading-8 tracking-tight">
              <span className="block text-[#191b24]">{t.heroLine1}</span>
              <span className="block font-normal text-[#0050cb]">{t.heroLine2}</span>
              <span className="block font-normal text-[#0050cb]">{t.heroLine3}</span>
            </h1>
            <p className="text-base leading-6 text-[#424656]">{t.heroBody}</p>
            <div className="flex items-center gap-3 rounded-xl border border-[rgba(194,198,216,0.3)] bg-[#f2f3ff] p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#06f]">
                <img src={imgGlobe} alt="" className="size-[18px]" />
              </div>
              <div>
                <p className="text-[13px] font-medium text-[#191b24]">{t.calloutTitle}</p>
                <p className="text-[13px] leading-[18px] text-[#424656]">
                  {t.calloutBody1}
                  <br />
                  {t.calloutBody2}
                </p>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-[20px] border border-[rgba(194,198,216,0.4)] bg-[#f2f3ff] px-4 py-2 shadow-xl">
              <div className="flex flex-col gap-3 rounded-2xl border border-[rgba(194,198,216,0.3)] bg-[#faf8ff] p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[13px] font-medium text-[#424656]">{t.balanceLabel}</p>
                    <p className="text-2xl font-bold leading-8 tracking-tight">$5,280.00</p>
                    <div className="mt-1 flex items-center gap-1">
                      <img src={imgTrend} alt="" className="size-2" />
                      <span className="text-[13px] font-medium text-[#ba1a1a]">+12.4%</span>
                      <span className="text-[13px] font-medium text-[#424656]">{t.thisMonth}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-[rgba(194,198,216,0.5)] bg-[#ecedfa] px-2.5 py-1.5">
                    <div className="flex size-[18px] items-center justify-center rounded-full bg-[#0050cb] text-[9px] font-bold text-white">
                      $
                    </div>
                    <span className="text-[13px] font-medium">USDC</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 rounded-xl border border-[rgba(194,198,216,0.3)] bg-white px-3 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={imgUs} alt="" className="size-5" />
                      <span className="text-sm font-semibold">{t.usdAccount}</span>
                    </div>
                    <span className="flex items-center gap-1 text-[13px] font-medium text-[#0050cb]">
                      <img src={imgCopy} alt="" className="h-2.5 w-2" />
                      {t.copyDetails}
                    </span>
                  </div>
                  {[
                    [t.accountHolder, "David Chen"],
                    [t.routingNumber, "•••• 2819"],
                    [t.accountNumber, "•••• 7642"],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between gap-2 text-[13px]">
                      <span className="text-[#424656]">{l}</span>
                      <span className="font-medium">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#0050cb] py-2.5 text-[13px] font-medium text-white"
                  >
                    <img src={imgPlus} alt="" className="size-2" />
                    {t.receiveUsd}
                  </button>
                  <button
                    type="button"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#c2c6d8] bg-[#faf8ff] py-2.5 text-[13px] font-medium"
                  >
                    <img src={imgSend} alt="" className="size-2" />
                    {t.send}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(194,198,216,0.2)] bg-white px-4 py-10">
          <div className="mb-6 text-center">
            <h2 className="text-[26px] font-bold leading-8 tracking-tight">
              {t.bordersTitle1}
              <br />
              {t.bordersTitle2}
            </h2>
            <p className="mt-3 text-base leading-6 text-[#424656]">{t.bordersSub}</p>
          </div>
          <div className="flex items-end justify-center gap-2 overflow-hidden">
            <div className="relative h-[140px] w-[100px] overflow-hidden rounded-t-2xl border border-[#898d98]">
              <img src={imgRectangle1} alt="" className="absolute inset-0 h-[180%] w-full object-cover object-top" />
            </div>
            <div className="relative h-[170px] w-[110px] overflow-hidden rounded-t-2xl border border-[#898d98]">
              <img src={imgRectangle2} alt="" className="absolute inset-0 h-[140%] w-full object-cover object-top" />
            </div>
            <div className="relative h-[150px] w-[100px] overflow-hidden rounded-t-2xl border border-[#898d98]">
              <img src={imgRectangle3} alt="" className="absolute inset-0 h-[165%] w-full object-cover object-top" />
            </div>
          </div>
        </section>

        <section id="features" className="bg-[#faf8ff] px-4 py-10">
          <div className="mb-6 text-center">
            <h2 className="text-[26px] font-bold leading-8 tracking-tight">{t.featuresTitle}</h2>
            <p className="mt-3 text-base leading-6 text-[#424656]">{t.featuresSub}</p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: imgReceive,
                bg: "bg-[#dae1ff]",
                label: t.receiveLabel,
                title: t.receiveTitle,
                body: t.receiveBody,
                tag: t.receiveTag,
              },
              {
                icon: imgConvert,
                bg: "bg-[#d6e3ff]",
                label: t.convertLabel,
                title: t.convertTitle,
                body: t.convertBody,
              },
              {
                icon: imgControl,
                bg: "bg-[#d3e4fe]",
                label: t.controlLabel,
                title: t.controlTitle,
                body: t.controlBody,
              },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-[rgba(194,198,216,0.3)] bg-[#faf8ff] p-6 shadow-sm">
                <div className={`mb-4 flex size-10 items-center justify-center rounded-xl ${c.bg}`}>
                  <img src={c.icon} alt="" className="size-[18px]" />
                </div>
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.7px] text-[#424656]">{c.label}</p>
                <h3 className="mb-3 text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mb-4 text-sm leading-5 text-[#424656]">{c.body}</p>
                {c.tag ? (
                  <span className="inline-block rounded-md bg-[rgba(179,197,255,0.3)] px-3 py-1 text-[11px] font-medium text-[#003fa4]">
                    {c.tag}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="bg-white px-4 py-10">
          <h2 className="mb-10 text-center text-[26px] font-bold leading-8 tracking-tight">{t.stepsTitle}</h2>
          <div className="flex flex-col gap-8">
            {[
              { n: "1", title: t.step1Title, body: t.step1Body, note: t.step1Note },
              { n: "2", title: t.step2Title, body: t.step2Body, note: t.step2Note },
              { n: "3", title: t.step3Title, body: t.step3Body, note: t.step3Note },
            ].map((s) => (
              <div key={s.n}>
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-[#0050cb] text-2xl font-semibold text-white shadow-md">
                  {s.n}
                </div>
                <h3 className="mb-3 text-lg font-semibold">{s.title}</h3>
                <p className="mb-4 text-sm leading-6 text-[#424656]">{s.body}</p>
                <div className="rounded-lg border border-[rgba(194,198,216,0.4)] bg-white px-4 py-3 text-center text-sm text-[#424656]">
                  {s.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="bg-[#faf8ff] px-4 py-10">
          <div className="mb-8 text-center">
            <h2 className="text-[26px] font-bold">{t.faqTitle}</h2>
            <p className="mt-2 text-base text-[#424656]">{t.faqSubtitle}</p>
          </div>
          <div className="flex flex-col gap-3">
            {t.faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={`${locale}-${item.q}`}
                  className="rounded-xl border border-[rgba(194,198,216,0.3)] bg-white"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-3 p-4 text-left"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                  >
                    <span className="text-base font-semibold tracking-tight">{item.q}</span>
                    <img src={open ? imgChevronUp : imgChevronDown} alt="" className="mt-2 h-[7px] w-3 shrink-0" />
                  </button>
                  {open && item.a ? (
                    <div className="border-t border-[rgba(194,198,216,0.2)] px-4 pb-4 pt-3">
                      <p className="text-sm leading-6 text-[#424656]">{item.a}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-[#191b24] px-4 pb-8 pt-16">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <img src={imgVector} alt="" className="absolute right-0 top-0 w-3/4" />
          <img src={imgVector1} alt="" className="absolute bottom-0 left-0 w-full" />
          <img src={imgVector2} alt="" className="absolute top-1/3 w-full" />
          <img src={imgVector3} alt="" className="absolute left-0 top-0 w-2/3" />
        </div>
        <div className="relative">
          <h2 className="mb-12 text-[32px] font-extrabold leading-10 tracking-tight text-white">
            <span className="block">{t.footerLine1}</span>
            <span className="block font-normal text-[#b3c5ff]">{t.footerLine2}</span>
          </h2>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(225,226,238,0.2)] bg-[rgba(225,226,238,0.1)] px-4 py-2">
            <img src={imgLogo} alt="" className="size-8 rounded-full object-cover" />
            <span className="text-lg text-white">KnockNok</span>
          </div>
          <p className="mb-8 text-sm leading-6 text-[rgba(225,226,238,0.8)]">{t.footerTagline}</p>
          <div className="mb-6 rounded-2xl border border-[rgba(225,226,238,0.1)] bg-[rgba(225,226,238,0.05)] p-5">
            <div className="mb-2 flex items-center gap-2">
              <img src={imgDisclosure} alt="" className="size-3" />
              <span className="text-xs uppercase tracking-[0.7px] text-[#e1e2ee]">{t.disclosure}</span>
            </div>
            <p className="text-xs leading-5 text-[rgba(225,226,238,0.7)]">{t.disclosureBody}</p>
          </div>
          <div className="flex items-center justify-between border-t border-[rgba(225,226,238,0.1)] pt-4 text-[11px] text-[rgba(225,226,238,0.5)]">
            <span>{t.copyright}</span>
            <a href="/web" className="underline">
              Web
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
