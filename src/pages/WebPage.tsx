import { useState } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";

const a = "/assets/web";
const imgUs = `${a}/imgUs.svg`;
const imgRectangle1 = `${a}/imgRectangle1.png`;
const imgRectangle2 = `${a}/imgRectangle2.png`;
const imgRectangle3 = `${a}/imgRectangle3.png`;
const imgLogo = `${a}/imgKnockNokLogo.png`;
const imgReceive = `${a}/imgContainer.svg`;
const imgConvert = `${a}/imgContainer1.svg`;
const imgControl = `${a}/imgContainer2.svg`;
const imgGlobe = `${a}/imgContainer3.svg`;
const imgTrend = `${a}/imgContainer4.svg`;
const imgCopy = `${a}/imgContainer5.svg`;
const imgPlus = `${a}/imgContainer6.svg`;
const imgSend = `${a}/imgContainer7.svg`;
const imgChevronUp = `${a}/imgContainer8.svg`;
const imgChevronDown = `${a}/imgContainer9.svg`;
const imgIcon = `${a}/imgIcon.svg`;
const imgIcon1 = `${a}/imgIcon1.svg`;
const imgDisclosure = `${a}/imgContainer10.svg`;
const imgVector = `${a}/imgVector.svg`;
const imgVector1 = `${a}/imgVector1.svg`;
const imgVector2 = `${a}/imgVector2.svg`;
const imgVector3 = `${a}/imgVector3.svg`;

function DashboardCard() {
  const { t } = useLanguage();
  return (
    <div className="flex w-full max-w-[476px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-[rgba(194,198,216,0.4)] bg-[#f2f3ff] px-8 py-16 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
      <div className="relative flex w-full max-w-[384px] flex-col gap-4 rounded-2xl border border-[rgba(194,198,216,0.3)] bg-[#faf8ff] p-6 shadow-md">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium tracking-wide text-[#424656]">{t.balanceLabel}</p>
            <p className="text-[32px] font-bold leading-10 tracking-tight text-[#191b24]">$5,280.00</p>
            <div className="flex items-center gap-1">
              <img src={imgTrend} alt="" className="size-[9px]" />
              <span className="text-sm font-medium text-[#ba1a1a]">+12.4%</span>
              <span className="text-sm font-medium text-[#424656]">{t.thisMonth}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[rgba(194,198,216,0.5)] bg-[#ecedfa] px-3 py-1.5">
            <div className="flex size-5 items-center justify-center rounded-full bg-[#0050cb] text-[10px] font-bold text-white">
              $
            </div>
            <span className="text-sm font-medium text-[#191b24]">USDC</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-xl border border-[rgba(194,198,216,0.3)] bg-white px-4 pb-4 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={imgUs} alt="" className="size-6" />
              <span className="text-sm font-semibold text-[#191b24]">{t.usdAccount}</span>
            </div>
            <button type="button" className="flex items-center gap-1 text-sm font-medium text-[#0050cb]">
              <img src={imgCopy} alt="" className="h-[12px] w-[10px]" />
              {t.copyDetails}
            </button>
          </div>
          {[
            [t.accountHolder, "David Chen"],
            [t.routingNumber, "•••• 2819"],
            [t.accountNumber, "•••• 7642"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4 text-sm">
              <span className="text-[#424656]">{label}</span>
              <span className="font-medium text-[#191b24]">{value}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0050cb] px-4 py-2.5 text-sm font-medium text-white"
          >
            <img src={imgPlus} alt="" className="size-[9px]" />
            {t.receiveUsd}
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#c2c6d8] bg-[#faf8ff] px-4 py-2.5 text-sm font-medium text-[#191b24]"
          >
            <img src={imgSend} alt="" className="size-[9px]" />
            {t.send}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WebPage() {
  const { t, locale } = useLanguage();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans text-[#191b24]" data-node-id="66:2812" lang={locale === "zh" ? "zh-CN" : "en"}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(194,198,216,0.15)] bg-[rgba(250,248,255,0.8)] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] backdrop-blur-[12px]">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-10">
          <a href="#top" className="flex items-center gap-3">
            <img src={imgLogo} alt="KnockNok" className="size-8 rounded-full object-cover" />
            <span className="text-2xl font-bold tracking-tight">KnockNok</span>
          </a>
          <nav className="flex items-center gap-8 text-sm font-medium text-[#424656]">
            <a href="#features" className="hover:text-[#191b24]">
              {t.navFeatures}
            </a>
            <a href="#how" className="hover:text-[#191b24]">
              {t.navHow}
            </a>
            <a href="#faq" className="hover:text-[#191b24]">
              {t.navFaq}
            </a>
          </nav>
          <LanguageSwitcher globeSrc={imgIcon} chevronSrc={imgIcon1} />
        </div>
      </header>

      <main id="top" className="pt-20">
        <section className="relative overflow-hidden bg-[#faf8ff] px-10 py-20">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -right-64 -top-96 size-[800px] rounded-full bg-[rgba(179,197,255,0.2)] blur-[32px]" />
            <div className="absolute -bottom-48 -left-36 size-[600px] rounded-full bg-[rgba(214,227,255,0.3)] blur-[32px]" />
          </div>
          <div className="relative mx-auto flex max-w-[1200px] items-center justify-center gap-16">
            <div className="flex max-w-[576px] flex-1 flex-col gap-6">
              <h1 className="text-5xl font-bold tracking-tight leading-14">
                <span className="block text-[#191b24]">{t.heroLine1}</span>
                <span className="block font-normal text-[#0050cb]">{t.heroLine2}</span>
                <span className="block font-normal text-[#0050cb]">{t.heroLine3}</span>
              </h1>
              <p className="text-lg leading-7 text-[#424656]">{t.heroBody}</p>
              <div className="pt-4">
                <div className="flex items-center gap-4 rounded-xl border border-[rgba(194,198,216,0.3)] bg-[#f2f3ff] p-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#06f]">
                    <img src={imgGlobe} alt="" className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium tracking-wide text-[#191b24]">{t.calloutTitle}</p>
                    <p className="text-sm leading-5 text-[#424656]">
                      {t.calloutBody1}
                      <br />
                      {t.calloutBody2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <DashboardCard />
          </div>
        </section>

        <section className="border-y border-[rgba(194,198,216,0.2)] bg-white px-10 pb-0 pt-20">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
            <div className="flex max-w-[808px] flex-col items-center gap-4 text-center">
              <h2 className="text-5xl font-bold leading-14 tracking-tight text-[#191b24]">
                {t.bordersTitle1}
                <br />
                {t.bordersTitle2}
              </h2>
              <p className="text-2xl leading-8 tracking-tight text-[#424656]">{t.bordersSub}</p>
            </div>
            <div className="flex items-end justify-center gap-10 overflow-hidden">
              <div className="relative h-[380px] w-[326px] overflow-hidden rounded-t-[40px] border border-[#898d98]">
                <img src={imgRectangle1} alt="" className="absolute inset-0 h-[186%] w-full object-cover object-top" />
              </div>
              <div className="relative h-[515px] w-[326px] overflow-hidden rounded-t-[40px] border border-[#898d98]">
                <img src={imgRectangle2} alt="" className="absolute inset-0 h-[137%] w-full object-cover object-top" />
              </div>
              <div className="relative h-[427px] w-[326px] overflow-hidden rounded-t-[40px] border border-[#898d98]">
                <img src={imgRectangle3} alt="" className="absolute inset-0 h-[165%] w-full object-cover object-top" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-y border-[rgba(194,198,216,0.2)] bg-[#faf8ff] px-10 py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
            <div className="flex max-w-[800px] flex-col items-center gap-4 text-center">
              <h2 className="text-5xl font-bold leading-14 tracking-tight text-[#191b24]">{t.featuresTitle}</h2>
              <p className="text-lg leading-7 text-[#424656]">{t.featuresSub}</p>
            </div>
            <div className="grid w-full grid-cols-3 gap-8">
              {[
                {
                  icon: imgReceive,
                  iconBg: "bg-[#dae1ff]",
                  label: t.receiveLabel,
                  title: t.receiveTitle,
                  body: t.receiveBody,
                  tag: t.receiveTag,
                },
                {
                  icon: imgConvert,
                  iconBg: "bg-[#d6e3ff]",
                  label: t.convertLabel,
                  title: t.convertTitle,
                  body: t.convertBody,
                },
                {
                  icon: imgControl,
                  iconBg: "bg-[#d3e4fe]",
                  label: t.controlLabel,
                  title: t.controlTitle,
                  body: t.controlBody,
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="flex flex-col rounded-2xl border border-[rgba(194,198,216,0.3)] bg-[#faf8ff] p-8 shadow-sm"
                >
                  <div className={`mb-6 flex size-12 items-center justify-center rounded-xl ${card.iconBg}`}>
                    <img src={card.icon} alt="" className="size-5" />
                  </div>
                  <p className="mb-2 text-sm font-medium uppercase tracking-[0.7px] text-[#424656]">{card.label}</p>
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-[#191b24]">{card.title}</h3>
                  <p className="mb-6 flex-1 text-base leading-6 text-[#424656]">{card.body}</p>
                  {card.tag ? (
                    <span className="w-fit rounded-md bg-[rgba(179,197,255,0.3)] px-3 py-1 text-xs font-medium tracking-wide text-[#003fa4]">
                      {card.tag}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="bg-white px-10 py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-20">
            <h2 className="mx-auto max-w-[800px] text-center text-5xl font-bold leading-14 tracking-tight text-[#191b24]">
              {t.stepsTitle}
            </h2>
            <div className="relative grid grid-cols-3 gap-12">
              <div className="pointer-events-none absolute left-[4%] right-[28%] top-6 h-0.5 bg-[rgba(194,198,216,0.3)]" />
              {[
                { n: "1", title: t.step1Title, body: t.step1Body, note: t.step1Note },
                { n: "2", title: t.step2Title, body: t.step2Body, note: t.step2Note },
                { n: "3", title: t.step3Title, body: t.step3Body, note: t.step3Note },
              ].map((step) => (
                <div key={step.n} className="relative flex flex-col">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-[#0050cb] text-2xl font-semibold text-white shadow-md">
                    {step.n}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mb-8 min-h-[124px] text-base leading-6 text-[#424656]">{step.body}</p>
                  <div className="rounded-lg border border-[rgba(194,198,216,0.4)] bg-white px-4 py-3 text-center text-sm text-[#424656]">
                    {step.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#faf8ff] px-10 py-20">
          <div className="mx-auto flex max-w-[768px] flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl font-bold tracking-tight text-[#191b24]">{t.faqTitle}</h2>
              <p className="mt-4 text-lg text-[#424656]">{t.faqSubtitle}</p>
            </div>
            <div className="flex flex-col gap-4">
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
                      className="flex w-full items-center justify-between gap-4 p-6 text-left"
                      onClick={() => setOpenFaq(open ? -1 : i)}
                    >
                      <span className="text-lg font-semibold tracking-tight text-[#191b24]">{item.q}</span>
                      <img
                        src={open ? imgChevronUp : imgChevronDown}
                        alt=""
                        className="h-[7px] w-3 shrink-0"
                      />
                    </button>
                    {open && item.a ? (
                      <div className="border-t border-[rgba(194,198,216,0.2)] px-6 pb-6 pt-4">
                        <p className="text-base leading-7 text-[#424656]">{item.a}</p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-[#191b24]">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <img src={imgVector} alt="" className="absolute left-[40%] top-[-20%] w-[60%]" />
          <img src={imgVector1} alt="" className="absolute bottom-0 left-[-30%] w-[70%]" />
          <img src={imgVector2} alt="" className="absolute right-0 top-[10%] w-[50%]" />
          <img src={imgVector3} alt="" className="absolute left-[-15%] top-0 w-[55%]" />
        </div>
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-24 px-10 py-32">
          <h2 className="max-w-[924px] text-center text-7xl font-extrabold tracking-tight text-white">
            <span className="block leading-[72px]">{t.footerLine1}</span>
            <span className="block font-normal leading-[72px] text-[#b3c5ff]">{t.footerLine2}</span>
          </h2>
          <div className="grid w-full grid-cols-12 gap-8 border-t border-[rgba(225,226,238,0.2)] pt-12">
            <div className="col-span-4">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(225,226,238,0.2)] bg-[rgba(225,226,238,0.1)] px-4 py-2 backdrop-blur-sm">
                <img src={imgLogo} alt="" className="size-8 rounded-full object-cover shadow-[0_0_0_2px_#dae1ff]" />
                <span className="text-xl text-white">KnockNok</span>
              </div>
              <p className="max-w-sm text-base leading-6 text-[rgba(225,226,238,0.8)]">{t.footerTagline}</p>
            </div>
            <div className="col-span-6 col-start-7 flex flex-col justify-between">
              <div className="mb-8 rounded-2xl border border-[rgba(225,226,238,0.1)] bg-[rgba(225,226,238,0.05)] p-6 backdrop-blur-md">
                <div className="mb-3 flex items-center gap-2">
                  <img src={imgDisclosure} alt="" className="size-3" />
                  <span className="text-sm uppercase tracking-[0.7px] text-[#e1e2ee]">{t.disclosure}</span>
                </div>
                <p className="text-sm leading-[22.75px] text-[rgba(225,226,238,0.7)]">{t.disclosureBody}</p>
              </div>
              <p className="border-t border-[rgba(225,226,238,0.1)] pt-4 text-xs text-[rgba(225,226,238,0.5)]">
                {t.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
