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
  navHow: "使用流程",
  navFeatures: "功能亮点",
  navFaq: "常见问题",
  desktopVersion: "桌面版",
  menuAria: "菜单",
  heroLine1: "用美元收款。",
  heroLine2: "资金掌控权始终在你手中。",
  heroLine3: "",
  heroBody:
    "获取专属美国账户信息，接收来自美国客户与平台的付款。到账美元将自动兑换为 USDC，并交付至你的自托管钱包。",
  calloutTitle: "无需美国公司主体。",
  calloutBody: "专为自由职业者、独立承包商、创作者，以及身在美国以外的数字游民打造。",
  balanceLabel: "账户余额",
  percentThisMonth: "+12.4% 本月",
  usdAccount: "USD 账户",
  copyDetails: "复制信息",
  accountHolder: "账户持有人",
  routingNumber: "路由号码",
  accountNumber: "账户号码",
  receiveUsd: "接收 USD",
  send: "转出",
  bordersTitle1: "你的资金，无国界。",
  bordersTitle2: "身在何处，都能用 USD 收款。",
  bordersSub: "转账费率约 0.5%。从你的 USDC 结算，数秒完成。",
  featuresTitle: "一种更简单的方式，接收并管理你的美国收入。",
  featuresSub: "不必再拼凑多个账户、交易所和钱包。",
  receiveLabel: "收款",
  receiveTitle: "像本地人一样收款。",
  receiveBody: "使用个人美国账户信息，接收来自美国客户及支持平台的付款。",
  receiveTag: "ACH · Wire",
  convertLabel: "兑换",
  convertTitle: "USD 进，USDC 出。全自动。",
  convertBody: "付款到账后，你的 USD 将自动兑换为 USDC。无需手动换汇，也无需额外步骤。",
  controlLabel: "掌控",
  controlTitle: "你的钱，你的钱包。",
  controlBody: "USDC 交付至你的自托管钱包，让你直接掌控自己的资金。",
  stepsTitle: "从美国付款到你的钱包，只需三步。",
  step1Title: "创建账户",
  step1Body:
    "注册并完成身份验证。审核通过后，你将获得与已验证身份关联的美国账户信息。",
  step1Note: "无需交易所账户。",
  step2Title: "用 USD 收款",
  step2Body:
    "把账户信息分享给美国客户、雇主或支持的平台。他们可通过 ACH 或电汇等熟悉的美国银行通道向你付款。",
  step2Note: "无需手动换汇。",
  step3Title: "收到 USDC",
  step3Body: "到账 USD 将自动兑换为 USDC，并发送到你的自托管钱包。",
  step3Note: "无需复杂的加密货币操作。",
  faqTitle: "常见问题",
  faqSubtitle: "常见问题解答",
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
      a: "不是。KnockNok 是金融科技平台，不是银行。银行与支付服务在适用情况下由受监管的金融合作伙伴提供。",
    },
    {
      q: "我会获得自己的美国银行账户吗？",
      a: "符合条件的用户将获得可用于接收支持的 USD 付款的美国账户信息。账户可用性与功能取决于你所在的国家/地区及资格条件。",
    },
    {
      q: "账户是在我名下吗？",
      a: "在符合条件的账户项目中，收款人信息与你的已验证法定身份相关联。",
    },
    {
      q: "谁可以向我的账户打款？",
      a: "KnockNok 主要用于接收与你本人工作、服务、创作者收入、承包商收入或其他支持来源相关的合法付款。你不应使用该账户代他人收款或转移资金。",
    },
    {
      q: "美国客户可以通过 ACH 向我付款吗？",
      a: "符合条件的美国账户支持 ACH 付款。是否支持电汇取决于你的账户项目。",
    },
    {
      q: "USD 到账后会发生什么？",
      a: "到账的 USD 将通过我们的金融基础设施合作伙伴兑换为 USDC，并交付到你指定的钱包。",
    },
    {
      q: "什么是 USDC？",
      a: "USDC 是一种数字美元，设计目标是维持约等于 1 美元的价值。",
    },
    {
      q: "我需要懂加密货币吗？",
      a: "不需要。KnockNok 旨在把大部分区块链复杂性隐藏在熟悉的支付体验背后。",
    },
    {
      q: "我的钱包是自托管的吗？",
      a: "我们规划的钱包架构允许用户掌控自己的钱包与资金。具体钱包功能与恢复选项取决于你所在地区可用的钱包基础设施。",
    },
    {
      q: "我可以从 AdSense、App Store、Upwork 或其他平台收款吗？",
      a: "Upwork、Stripe、Amazon、Gusto、Deel、Fiverr、Shopify、Wise、Payoneer——任何能向银行账户发送 USD 的平台，都可以直接打款到 KnockNok。",
    },
    {
      q: "USDC 余额有 FDIC 保险吗？",
      a: "没有。USDC 及其他数字资产不是银行存款，不受 FDIC 保险。",
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
