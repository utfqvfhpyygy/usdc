import { useState } from "react";

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

const faqs: { q: string; a?: string }[] = [
  {
    q: "Is KnockNok a bank?",
    a: "No. KnockNok is a financial technology platform, not a bank. Banking and payment services are provided by regulated financial partners where applicable.",
  },
  { q: "Do I get my own U.S. bank account?" },
  { q: "Is the account in my name?" },
  { q: "Who can send money to my account?" },
  { q: "Can my U.S. client pay me through ACH?" },
  { q: "What happens when USD arrives?" },
  { q: "What is USDC?" },
  { q: "Do I need to know how crypto works?" },
  { q: "Is my wallet self-custodial?" },
  { q: "Can I receive payments from AdSense, App Store, Upwork, or other platforms?" },
  { q: "Are USDC balances FDIC insured?" },
];

function DashboardCard() {
  return (
    <div className="flex w-full max-w-[476px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-[rgba(194,198,216,0.4)] bg-[#f2f3ff] px-8 py-16 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
      <div className="relative flex w-full max-w-[384px] flex-col gap-4 rounded-2xl border border-[rgba(194,198,216,0.3)] bg-[#faf8ff] p-6 shadow-md">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium tracking-wide text-[#424656]">Your Balance</p>
            <p className="text-[32px] font-bold leading-10 tracking-tight text-[#191b24]">$5,280.00</p>
            <div className="flex items-center gap-1">
              <img src={imgTrend} alt="" className="size-[9px]" />
              <span className="text-sm font-medium text-[#ba1a1a]">+12.4%</span>
              <span className="text-sm font-medium text-[#424656]">this month</span>
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
              <span className="text-sm font-semibold text-[#191b24]">USD Account</span>
            </div>
            <button type="button" className="flex items-center gap-1 text-sm font-medium text-[#0050cb]">
              <img src={imgCopy} alt="" className="h-[12px] w-[10px]" />
              Copy Details
            </button>
          </div>
          {[
            ["Account holder", "David Chen"],
            ["Routing number", "•••• 2819"],
            ["Account number", "•••• 7642"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between text-sm">
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
            Receive USD
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#c2c6d8] bg-[#faf8ff] px-4 py-2.5 text-sm font-medium text-[#191b24]"
          >
            <img src={imgSend} alt="" className="size-[9px]" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WebPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans text-[#191b24]" data-node-id="66:2812">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(194,198,216,0.15)] bg-[rgba(250,248,255,0.8)] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] backdrop-blur-[12px]">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-10">
          <a href="#top" className="flex items-center gap-3">
            <img src={imgLogo} alt="KnockNok" className="size-8 rounded-full object-cover" />
            <span className="text-2xl font-bold tracking-tight">KnockNok</span>
          </a>
          <nav className="flex items-center gap-8 text-sm font-medium text-[#424656]">
            <a href="#features" className="hover:text-[#191b24]">
              Features
            </a>
            <a href="#how" className="hover:text-[#191b24]">
              How It Works
            </a>
            <a href="#faq" className="hover:text-[#191b24]">
              FAQ
            </a>
          </nav>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg border-[1.67px] border-[#dfe1ef] bg-[#faf8ff] px-3 py-2"
          >
            <img src={imgIcon} alt="" className="size-3.5" />
            <span className="font-sans text-xs font-semibold">EN</span>
            <img src={imgIcon1} alt="" className="size-3.5" />
          </button>
        </div>
      </header>

      <main id="top" className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#faf8ff] px-10 py-20">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -right-64 -top-96 size-[800px] rounded-full bg-[rgba(179,197,255,0.2)] blur-[32px]" />
            <div className="absolute -bottom-48 -left-36 size-[600px] rounded-full bg-[rgba(214,227,255,0.3)] blur-[32px]" />
          </div>
          <div className="relative mx-auto flex max-w-[1200px] items-center justify-center gap-16">
            <div className="flex max-w-[576px] flex-1 flex-col gap-6">
              <h1 className="text-5xl font-bold tracking-tight leading-14">
                <span className="block text-[#191b24]">Get Paid in Dollars.</span>
                <span className="block font-normal text-[#0050cb]">Keep control of your</span>
                <span className="block font-normal text-[#0050cb]">money.</span>
              </h1>
              <p className="text-lg leading-7 text-[#424656]">
                Get your own U.S. account details to receive payments from U.S. clients and platforms.
                Incoming USD is automatically converted to USDC and delivered to your self-custodial wallet.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4 rounded-xl border border-[rgba(194,198,216,0.3)] bg-[#f2f3ff] p-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#06f]">
                    <img src={imgGlobe} alt="" className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium tracking-wide text-[#191b24]">No U.S. company required.</p>
                    <p className="text-sm leading-5 text-[#424656]">
                      Built for freelancers, independent contractors, creators,
                      <br />
                      and digital nomads outside the U.S
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <DashboardCard />
          </div>
        </section>

        {/* Phone showcase */}
        <section className="border-y border-[rgba(194,198,216,0.2)] bg-white px-10 pb-0 pt-20">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
            <div className="flex max-w-[808px] flex-col items-center gap-4 text-center">
              <h2 className="text-5xl font-bold leading-14 tracking-tight text-[#191b24]">
                Your Money. Without Borders.
                <br />
                Get Paid in USD, Wherever You Are.
              </h2>
              <p className="text-2xl leading-8 tracking-tight text-[#424656]">
                Low transfer fees, around 0.5%. Settles from your USDC in seconds.
              </p>
            </div>
            <div className="flex items-end justify-center gap-10 overflow-hidden">
              <div className="relative h-[380px] w-[326px] overflow-hidden rounded-t-[40px] border border-[#898d98]">
                <img src={imgRectangle1} alt="USD Account app screen" className="absolute inset-0 h-[186%] w-full object-cover object-top" />
              </div>
              <div className="relative h-[515px] w-[326px] overflow-hidden rounded-t-[40px] border border-[#898d98]">
                <img src={imgRectangle2} alt="Wallet app screen" className="absolute inset-0 h-[137%] w-full object-cover object-top" />
              </div>
              <div className="relative h-[427px] w-[326px] overflow-hidden rounded-t-[40px] border border-[#898d98]">
                <img src={imgRectangle3} alt="Earn app screen" className="absolute inset-0 h-[165%] w-full object-cover object-top" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-y border-[rgba(194,198,216,0.2)] bg-[#faf8ff] px-10 py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
            <div className="flex max-w-[800px] flex-col items-center gap-4 text-center">
              <h2 className="text-5xl font-bold leading-14 tracking-tight text-[#191b24]">
                One simple way to receive and manage your U.S. income.
              </h2>
              <p className="text-lg leading-7 text-[#424656]">
                Stop stitching together multiple accounts, exchanges, and wallets.
              </p>
            </div>
            <div className="grid w-full grid-cols-3 gap-8">
              {[
                {
                  icon: imgReceive,
                  iconBg: "bg-[#dae1ff]",
                  label: "RECEIVE",
                  title: "Get paid like a local.",
                  body: "Receive payments from U.S. clients and supported platforms using your personal U.S. account details.",
                  tag: "ACH • Wire",
                },
                {
                  icon: imgConvert,
                  iconBg: "bg-[#d6e3ff]",
                  label: "CONVERT",
                  title: "USD in. USDC out. Automatically.",
                  body: "When a payment arrives, your USD is automatically converted to USDC. No manual exchange or extra steps.",
                },
                {
                  icon: imgControl,
                  iconBg: "bg-[#d3e4fe]",
                  label: "CONTROL",
                  title: "Your money. Your wallet.",
                  body: "Your USDC is delivered to your self-custodial wallet, giving you direct control over your funds.",
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

        {/* Steps */}
        <section id="how" className="bg-white px-10 py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-20">
            <h2 className="mx-auto max-w-[800px] text-center text-5xl font-bold leading-14 tracking-tight text-[#191b24]">
              From a U.S. payment to your wallet in three steps.
            </h2>
            <div className="relative grid grid-cols-3 gap-12">
              <div className="pointer-events-none absolute left-[4%] right-[28%] top-6 h-0.5 bg-[rgba(194,198,216,0.3)]" />
              {[
                {
                  n: "1",
                  title: "Create your account",
                  body: "Sign up and verify your identity. Once approved, you'll receive U.S. account details associated with your verified identity.",
                  note: "No exchange account.",
                },
                {
                  n: "2",
                  title: "Get paid in USD",
                  body: "Share your account details with your U.S. clients, employers, or supported platforms. They pay you through familiar U.S. banking rails such as ACH or wire.",
                  note: "No manual conversion.",
                },
                {
                  n: "3",
                  title: "Receive USDC",
                  body: "Incoming USD is automatically converted to USDC and sent to your self-custodial wallet.",
                  note: "No complicated crypto workflow.",
                },
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

        {/* FAQ */}
        <section id="faq" className="bg-[#faf8ff] px-10 py-20">
          <div className="mx-auto flex max-w-[768px] flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl font-bold tracking-tight text-[#191b24]">FAQ</h2>
              <p className="mt-4 text-lg text-[#424656]">Frequently asked questions</p>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((item, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={item.q}
                    className="overflow-hidden rounded-xl border border-[rgba(194,198,216,0.3)] bg-white"
                  >
                    <button
                      type="button"
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
                      <p className="px-6 pb-6 text-base leading-6 text-[#424656]">{item.a}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#191b24]">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <img src={imgVector} alt="" className="absolute left-[40%] top-[-20%] w-[60%]" />
          <img src={imgVector1} alt="" className="absolute bottom-0 left-[-30%] w-[70%]" />
          <img src={imgVector2} alt="" className="absolute right-0 top-[10%] w-[50%]" />
          <img src={imgVector3} alt="" className="absolute left-[-15%] top-0 w-[55%]" />
        </div>
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-24 px-10 py-32">
          <h2 className="max-w-[924px] text-center text-7xl font-extrabold tracking-tight text-white">
            <span className="block leading-[72px]">Your work is global.</span>
            <span className="block font-normal leading-[72px] text-[#b3c5ff]">Your money should be too.</span>
          </h2>
          <div className="grid w-full grid-cols-12 gap-8 border-t border-[rgba(225,226,238,0.2)] pt-12">
            <div className="col-span-4">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(225,226,238,0.2)] bg-[rgba(225,226,238,0.1)] px-4 py-2 backdrop-blur-sm">
                <img src={imgLogo} alt="" className="size-8 rounded-full object-cover shadow-[0_0_0_2px_#dae1ff]" />
                <span className="text-xl text-white">KnockNok</span>
              </div>
              <p className="max-w-sm text-base leading-6 text-[rgba(225,226,238,0.8)]">
                Global payments for a more open world.
              </p>
            </div>
            <div className="col-span-6 col-start-7 flex flex-col justify-between">
              <div className="mb-8 rounded-2xl border border-[rgba(225,226,238,0.1)] bg-[rgba(225,226,238,0.05)] p-6 backdrop-blur-md">
                <div className="mb-3 flex items-center gap-2">
                  <img src={imgDisclosure} alt="" className="size-3" />
                  <span className="text-sm uppercase tracking-[0.7px] text-[#e1e2ee]">Disclosure</span>
                </div>
                <p className="text-sm leading-[22.75px] text-[rgba(225,226,238,0.7)]">
                  KnockNok is a financial technology company, not a bank. KnockNok does not hold or have custody of
                  customer funds.
                </p>
              </div>
              <p className="border-t border-[rgba(225,226,238,0.1)] pt-4 text-xs text-[rgba(225,226,238,0.5)]">
                © 2026 KNOCKNOK INC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
