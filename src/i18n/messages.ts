export type Locale = "en" | "zh";

export const LANG_STORAGE_KEY = "knocknok-lang";

export type FaqItem = { q: string; a: string };

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
  calloutBody: string;
  balanceLabel: string;
  percentThisMonth: string;
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
  navHow: "How It Works",
  navFeatures: "Features",
  navFaq: "FAQ",
  desktopVersion: "Desktop version",
  menuAria: "Menu",
  heroLine1: "Get Paid in Dollars.",
  heroLine2: "Keep control of your money.",
  heroLine3: "",
  heroBody:
    "Get your own U.S. account details to receive payments from U.S. clients and platforms. Incoming USD is automatically converted to USDC and delivered to your self-custodial wallet.",
  calloutTitle: "No U.S. company required.",
  calloutBody:
    "Built for freelancers, independent contractors, creators, and digital nomads outside the U.S.",
  balanceLabel: "Your Balance",
  percentThisMonth: "+12.4% this month",
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
  receiveLabel: "Receive",
  receiveTitle: "Get paid like a local.",
  receiveBody:
    "Receive payments from U.S. clients and supported platforms using your personal U.S. account details.",
  receiveTag: "ACH · Wire",
  convertLabel: "Convert",
  convertTitle: "USD in. USDC out. Automatically.",
  convertBody:
    "When a payment arrives, your USD is automatically converted to USDC. No manual exchange or extra steps.",
  controlLabel: "Control",
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
    {
      q: "Do I get my own U.S. bank account?",
      a: "Eligible users receive U.S. account details that can be used to receive supported USD payments. Account availability and features depend on your country and eligibility.",
    },
    {
      q: "Is the account in my name?",
      a: "For eligible account programs, the beneficiary information is associated with your verified legal identity.",
    },
    {
      q: "Who can send money to my account?",
      a: "KnockNok is designed primarily for legitimate payments related to your own work, services, creator income, contractor income, or other supported sources. You should not use your account to receive or move money on behalf of other people.",
    },
    {
      q: "Can my U.S. client pay me through ACH?",
      a: "Eligible U.S. accounts support ACH payments. Wire transfers may also be supported depending on your account program.",
    },
    {
      q: "What happens when USD arrives?",
      a: "Incoming USD is converted into USDC through our financial infrastructure partners and delivered to your designated wallet.",
    },
    {
      q: "What is USDC?",
      a: "USDC is a digital dollar designed to maintain a value of approximately one U.S. dollar.",
    },
    {
      q: "Do I need to know how crypto works?",
      a: "No. KnockNok is designed to hide most of the blockchain complexity behind a familiar payment experience.",
    },
    {
      q: "Is my wallet self-custodial?",
      a: "Our intended wallet architecture allows users to control their own wallets and funds. Exact wallet functionality and recovery options depend on the wallet infrastructure available in your region.",
    },
    {
      q: "Can I receive payments from AdSense, App Store, Upwork, or other platforms?",
      a: "Upwork, Stripe, Amazon, Gusto, Deel, Fiverr, Shopify, Wise, Payoneer — any platform that sends USD to a bank account can deposit directly into KnockNok.",
    },
    {
      q: "Are USDC balances FDIC insured?",
      a: "No. USDC and other digital assets are not bank deposits and are not FDIC insured.",
    },
  ],
};

const zh: Messages = {
  langLabel: "中文",
  langEn: "EN",
  langZh: "中文",
  navHow: "运作方式",
  navFeatures: "产品功能",
  navFaq: "常见问题",
  desktopVersion: "桌面版",
  menuAria: "菜单",
  heroLine1: "轻松收取美元。",
  heroLine2: "资金始终由你掌控。",
  heroLine3: "",
  heroBody:
    "获取属于你的美国账户信息，轻松接收来自美国客户和平台的美元付款。美元到账后将自动转换为 USDC，并转入你的自托管钱包。",
  calloutTitle: "无需注册美国公司。",
  calloutBody: "专为美国境外的自由职业者、独立承包商、内容创作者和数字游民打造。",
  balanceLabel: "你的余额",
  percentThisMonth: "+12.4% 本月",
  usdAccount: "美元账户",
  copyDetails: "复制账户",
  accountHolder: "账户持有人",
  routingNumber: "Routing number",
  accountNumber: "账户号码",
  receiveUsd: "收取美元",
  send: "转账",
  bordersTitle1: "你的资金，不设边界。",
  bordersTitle2: "无论身在何处，都能轻松收取美元。",
  bordersSub: "低至约 0.5% 的费用，让美元收款更简单。",
  featuresTitle: "一种更简单的方式，收取并管理你的美元收入。",
  featuresSub: "无需再辗转于多个账户、交易平台和钱包之间。",
  receiveLabel: "收款",
  receiveTitle: "像美国本地用户一样轻松收款。",
  receiveBody: "使用你个人的美国账户信息，接收来自美国客户及支持平台的付款。",
  receiveTag: "ACH · Wire",
  convertLabel: "转换",
  convertTitle: "美元到账，自动转换为 USDC。",
  convertBody: "美元付款到账后，将自动转换为 USDC，无需手动兑换，也无需额外操作。",
  controlLabel: "掌控",
  controlTitle: "你的资金，你的钱包。",
  controlBody: "USDC 将直接进入你的自托管钱包，让你真正掌控自己的资金。",
  stepsTitle: "从美元付款到你的钱包，只需三步。",
  step1Title: "创建账户",
  step1Body:
    "注册并完成身份验证。审核通过后，你将获得与你本人身份信息对应的美国账户信息。",
  step1Note: "无需交易所账户",
  step2Title: "收取美元",
  step2Body:
    "将账户信息提供给美国客户、雇主或支持的平台，对方即可通过 ACH、Wire 等常见美国银行渠道向你付款。",
  step2Note: "无需手动兑换",
  step3Title: "收到 USDC",
  step3Body: "收到的美元将自动转换为 USDC，并转入你的自托管钱包。",
  step3Note: "无需复杂的加密货币操作",
  faqTitle: "常见问题",
  faqSubtitle: "你可能想了解的问题",
  footerLine1: "你的工作无国界，",
  footerLine2: "你的资金也应该如此。",
  footerTagline: "让全球资金流动更简单。",
  disclosure: "免责声明",
  disclosureBody:
    "KnockNok 是一家金融科技公司，并非银行。KnockNok 不持有或托管用户资金。相关银行、支付及数字资产服务由符合条件的第三方金融服务合作伙伴提供。",
  copyright: "© 2026 KNOCKNOK INC. All rights reserved.",
  faqs: [
    {
      q: "KnockNok 是银行吗？",
      a: "不是。KnockNok 是一家金融科技平台，而非银行。相关银行及支付服务由受监管的金融合作伙伴提供。",
    },
    {
      q: "我会获得属于自己的美国账户吗？",
      a: "符合条件的用户可以获得用于接收美元付款的美国账户信息。账户是否可用及具体功能取决于用户所在国家或地区及相关资格要求。",
    },
    {
      q: "账户是以我本人的姓名开立的吗？",
      a: "对于符合条件的账户服务，收款人信息将与你通过验证的本人法定身份信息一致。",
    },
    {
      q: "谁可以向我的账户付款？",
      a: "KnockNok 主要用于接收与你本人工作、服务、创作者收入、承包商收入及其他支持场景相关的合法款项。请勿使用你的账户代他人收款或转移资金。",
    },
    {
      q: "我的美国客户可以通过 ACH 向我付款吗？",
      a: "符合条件的美国账户支持 ACH 收款。根据具体账户服务，也可支持 Wire 电汇。",
    },
    {
      q: "美元到账后会发生什么？",
      a: "美元到账后，将由我们的金融基础设施合作伙伴转换为 USDC，并转入你指定的钱包。",
    },
    {
      q: "什么是 USDC？",
      a: "USDC 是一种与美元价值挂钩的数字美元，目标价值约为 1 USDC = 1 美元。",
    },
    {
      q: "我需要了解加密货币或区块链吗？",
      a: "不需要。KnockNok 将复杂的区块链操作隐藏在熟悉、简单的收付款体验背后。",
    },
    {
      q: "我的钱包是自托管钱包吗？",
      a: "我们的钱包架构旨在让用户自行控制自己的钱包和资金。具体的钱包功能及恢复方式可能因所在地区所支持的钱包基础设施而有所不同。",
    },
    {
      q: "我可以接收 AdSense、App Store、Upwork 等平台的付款吗？",
      a: "KnockNok 可用于接收部分支持美元银行账户付款的平台款项，例如 Upwork、Stripe、Amazon、Gusto、Deel、Fiverr、Shopify 等。实际是否支持取决于相关平台的付款规则、账户所在地及账户资格。",
    },
    {
      q: "USDC 余额受 FDIC 保险保障吗？",
      a: "不受保障。USDC 及其他数字资产不属于银行存款，也不受美国联邦存款保险公司（FDIC）保险保障。",
    },
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
