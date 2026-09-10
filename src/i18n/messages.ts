export type Locale = "en" | "zh";

export const LANG_STORAGE_KEY = "knocknok-lang";

/** `a` only when officially approved; omit for questions awaiting copy. */
export type FaqItem = { q: string; a?: string };

export type Messages = {
  langLabel: string;
  langEn: string;
  langZh: string;
  navFeatures: string;
  navHow: string;
  navFaq: string;
  desktopVersion: string;
  menuAria: string;
  heroLine1: string;
  heroLine2: string;
  heroLine3: string;
  heroBody: string;
  calloutTitle: string;
  calloutBody1: string;
  calloutBody2: string;
  balanceLabel: string;
  thisMonth: string;
  usdAccount: string;
  copyDetails: string;
  accountHolder: string;
  routingNumber: string;
  accountNumber: string;
  receiveUsd: string;
  send: string;
  bordersTitle1: string;
  bordersTitle2: string;
  bordersSub: string;
  featuresTitle: string;
  featuresSub: string;
  receiveLabel: string;
  receiveTitle: string;
  receiveBody: string;
  receiveTag: string;
  convertLabel: string;
  convertTitle: string;
  convertBody: string;
  controlLabel: string;
  controlTitle: string;
  controlBody: string;
  stepsTitle: string;
  step1Title: string;
  step1Body: string;
  step1Note: string;
  step2Title: string;
  step2Body: string;
  step2Note: string;
  step3Title: string;
  step3Body: string;
  step3Note: string;
  faqTitle: string;
  faqSubtitle: string;
  footerLine1: string;
  footerLine2: string;
  footerTagline: string;
  disclosure: string;
  disclosureBody: string;
  copyright: string;
  faqs: FaqItem[];
};

const en: Messages = {
  langLabel: "EN",
  langEn: "EN",
  langZh: "中文",
  navFeatures: "Features",
  navHow: "How It Works",
  navFaq: "FAQ",
  desktopVersion: "Desktop version",
  menuAria: "Menu",
  heroLine1: "Get Paid in Dollars.",
  heroLine2: "Keep control of your",
  heroLine3: "money.",
  heroBody:
    "Get your own U.S. account details to receive payments from U.S. clients and platforms. Incoming USD is automatically converted to USDC and delivered to your self-custodial wallet.",
  calloutTitle: "No U.S. company required.",
  calloutBody1: "Built for freelancers, independent contractors, creators,",
  calloutBody2: "and digital nomads outside the U.S.",
  balanceLabel: "Your Balance",
  thisMonth: "this month",
  usdAccount: "USD Account",
  copyDetails: "Copy Details",
  accountHolder: "Account holder",
  routingNumber: "Routing number",
  accountNumber: "Account number",
  receiveUsd: "Receive USD",
  send: "Send",
  bordersTitle1: "Your Money. Without Borders.",
  bordersTitle2: "Get Paid in USD, Wherever You Are.",
  bordersSub: "Low transfer fees, around 0.5%. Settles from your USDC in seconds.",
  featuresTitle: "One simple way to receive and manage your U.S. income.",
  featuresSub: "Stop stitching together multiple accounts, exchanges, and wallets.",
  receiveLabel: "RECEIVE",
  receiveTitle: "Get paid like a local.",
  receiveBody:
    "Receive payments from U.S. clients and supported platforms using your personal U.S. account details.",
  receiveTag: "ACH • Wire",
  convertLabel: "CONVERT",
  convertTitle: "USD in. USDC out. Automatically.",
  convertBody:
    "When a payment arrives, your USD is automatically converted to USDC. No manual exchange or extra steps.",
  controlLabel: "CONTROL",
  controlTitle: "Your money. Your wallet.",
  controlBody:
    "Your USDC is delivered to your self-custodial wallet, giving you direct control over your funds.",
  stepsTitle: "From a U.S. payment to your wallet in three steps.",
  step1Title: "Create your account",
  step1Body:
    "Sign up and verify your identity. Once approved, you'll receive U.S. account details associated with your verified identity.",
  step1Note: "No exchange account.",
  step2Title: "Get paid in USD",
  step2Body:
    "Share your account details with your U.S. clients, employers, or supported platforms. They pay you through familiar U.S. banking rails such as ACH or wire.",
  step2Note: "No manual conversion.",
  step3Title: "Receive USDC",
  step3Body:
    "Incoming USD is automatically converted to USDC and sent to your self-custodial wallet.",
  step3Note: "No complicated crypto workflow.",
  faqTitle: "FAQ",
  faqSubtitle: "Frequently asked questions",
  footerLine1: "Your work is global.",
  footerLine2: "Your money should be too.",
  footerTagline: "Global payments for a more open world.",
  disclosure: "Disclosure",
  disclosureBody:
    "KnockNok is a financial technology company, not a bank. KnockNok does not hold or have custody of customer funds.",
  copyright: "© 2026 KNOCKNOK INC. All rights reserved.",
  faqs: [
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
  ],
};

const zh: Messages = {
  langLabel: "中文",
  langEn: "EN",
  langZh: "中文",
  navFeatures: "功能亮点",
  navHow: "使用流程",
  navFaq: "常见问题",
  desktopVersion: "桌面版",
  menuAria: "菜单",
  heroLine1: "用美元收款。",
  heroLine2: "资金掌控权，",
  heroLine3: "始终在你手中。",
  heroBody:
    "获取专属美国账户信息，接收来自美国客户与平台的付款。到账美元将自动兑换为 USDC，并转入你的自托管钱包。",
  calloutTitle: "无需美国公司主体。",
  calloutBody1: "专为自由职业者、独立承包商、创作者，",
  calloutBody2: "以及身在美国以外的数字游民打造。",
  balanceLabel: "账户余额",
  thisMonth: "本月",
  usdAccount: "美元账户",
  copyDetails: "复制信息",
  accountHolder: "账户持有人",
  routingNumber: "路由号码",
  accountNumber: "账户号码",
  receiveUsd: "接收美元",
  send: "转出",
  bordersTitle1: "你的资金，无国界。",
  bordersTitle2: "身在何处，都能用美元收款。",
  bordersSub: "转账费率约 0.5%。USDC 到账可在数秒内完成结算。",
  featuresTitle: "一种更简单的方式，接收并管理你的美国收入。",
  featuresSub: "不必再拼凑多个账户、交易所和钱包。",
  receiveLabel: "收款",
  receiveTitle: "像本地人一样收款。",
  receiveBody: "使用个人美国账户信息，接收来自美国客户及支持平台的付款。",
  receiveTag: "ACH • 电汇",
  convertLabel: "兑换",
  convertTitle: "美元进，USDC 出。全自动。",
  convertBody: "付款到账后，美元将自动兑换为 USDC。无需手动换汇，也无需额外步骤。",
  controlLabel: "掌控",
  controlTitle: "你的钱，你的钱包。",
  controlBody: "USDC 直接打入你的自托管钱包，资金由你亲自掌控。",
  stepsTitle: "从美国付款到你的钱包，只需三步。",
  step1Title: "创建账户",
  step1Body: "注册并完成身份验证。审核通过后，你将获得与已验证身份关联的美国账户信息。",
  step1Note: "无需交易所账户。",
  step2Title: "用美元收款",
  step2Body:
    "把账户信息分享给美国客户、雇主或支持的平台。他们可通过 ACH 或电汇等熟悉的美国银行通道向你付款。",
  step2Note: "无需手动换汇。",
  step3Title: "收到 USDC",
  step3Body: "到账美元将自动兑换为 USDC，并发送到你的自托管钱包。",
  step3Note: "无需复杂的加密货币操作。",
  faqTitle: "常见问题",
  faqSubtitle: "你可能想了解的问题",
  footerLine1: "你的工作无国界。",
  footerLine2: "你的资金也应如此。",
  footerTagline: "为更开放的世界提供全球支付。",
  disclosure: "披露说明",
  disclosureBody:
    "KnockNok 是一家金融科技公司，不是银行。KnockNok 不持有、也不保管客户资金。",
  copyright: "© 2026 KNOCKNOK INC. 保留所有权利。",
  faqs: [
    {
      q: "KnockNok 是银行吗？",
      a: "不是。KnockNok 是金融科技平台，不是银行。银行与支付服务在适用情况下由受监管的合作机构提供。",
    },
    { q: "我会获得自己的美国银行账户吗？" },
    { q: "账户是在我名下吗？" },
    { q: "谁可以向我的账户打款？" },
    { q: "美国客户可以通过 ACH 向我付款吗？" },
    { q: "美元到账后会发生什么？" },
    { q: "什么是 USDC？" },
    { q: "我需要懂加密货币吗？" },
    { q: "我的钱包是自托管的吗？" },
    { q: "我可以从 AdSense、App Store、Upwork 或其他平台收款吗？" },
    { q: "USDC 余额有 FDIC 保险吗？" },
  ],
};

export const messages: Record<Locale, Messages> = { en, zh };

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "zh";
}

export function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
  return isLocale(stored) ? stored : "en";
}
