"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  MessageSquareText,
  ShieldQuestion,
  Globe,
  Briefcase,
  ArrowRight,
  Zap,
  UserCheck,
  Rocket,
  BookOpen,
  Check,
  Sparkles,
  BarChart3,
  Clock,
  Target,
  PenLine,
  Mail,
  Crown,
  ChevronDown,
} from "lucide-react";

/* ───── scroll-triggered animation hook ───── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".lp-fade-up, .lp-stagger");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ───── Inline CTA banner component ───── */
function CtaBanner({ text = "無料で講座を体験する" }: { text?: string }) {
  return (
    <div className="lp-fade-up py-12 md:py-16 text-center">
      <Link
        href="/register"
        className="lp-cta-pulse inline-flex items-center gap-2.5 px-10 md:px-14 py-5 rounded-full
                   text-base md:text-lg font-bold text-[#0f1a2e]
                   bg-gradient-to-r from-[#c9a84c] to-[#d4b65e]
                   shadow-[0_4px_24px_rgba(201,168,76,0.3)]
                   transition-all duration-300"
      >
        {text}
        <ArrowRight className="w-5 h-5" />
      </Link>
      <p className="mt-4 text-xs text-[#8da0cc] flex items-center justify-center gap-4">
        <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#c9a84c]" />クレカ登録なし</span>
        <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#c9a84c]" />最短30秒で登録</span>
        <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#c9a84c]" />すぐに利用開始</span>
      </p>
    </div>
  );
}

/* ───── data ───── */
const testimonials = [
  { name: "T.S", role: "保険営業 / 3年目", before: "トーク準備に毎回1時間、ネタ切れで同じ話ばかりしていた", after: "AIで毎回新鮮なトーク台本を生成。準備時間を90%削減し、商談数が2倍に" },
  { name: "K.M", role: "不動産営業 / 5年目", before: "お客様の「検討します」に上手く切り返せず、失注が多かった", after: "反論対策集で切り返しパターンを習得。成約率が1.5倍に向上" },
  { name: "A.Y", role: "コンサル営業 / 2年目", before: "テンプレ営業メールの返信率が1%以下で限界を感じていた", after: "HP自動分析で企業別にカスタマイズ。返信率が5倍に改善" },
  { name: "R.H", role: "マーケ営業 / 4年目", before: "新規商談の事前準備が不十分で、的外れな提案をしがちだった", after: "商談準備ツールで企業分析を自動化。初回提案の採用率が大幅UP" },
  { name: "M.T", role: "リフォーム営業 / 6年目", before: "営業トークが属人的で、後輩への指導に苦戦していた", after: "AIトーク台本を教育ツールとして活用。チーム全体の成績が底上げ" },
  { name: "S.K", role: "アパレル営業 / 1年目", before: "営業未経験で何を話せばいいか分からず、毎日不安だった", after: "AIが場面別のトークを提案してくれるので、自信を持って営業できるように" },
  { name: "Y.N", role: "IT営業 / 3年目", before: "1日50件のテレアポ、台本作りだけで午前が終わっていた", after: "台本作成が数十秒に。午前中の架電数が3倍になり、アポ率も向上" },
  { name: "H.W", role: "人材営業 / 2年目", before: "フォーム営業を始めたいが、企業ごとに文面を変えるのが大変だった", after: "HP解析付きの営業文生成で1社30秒。1日のアプローチ数が10倍に" },
  { name: "N.O", role: "医療機器営業 / 7年目", before: "専門用語が多く、顧客ごとに説明の仕方を変えるのが負担だった", after: "AIが相手に合わせた説明文を自動生成。商談の質が格段に向上" },
  { name: "D.F", role: "広告営業 / 4年目", before: "提案書作成に半日かかり、件数をこなせなかった", after: "商談準備が10分に短縮。月の商談件数が1.8倍に増加" },
  { name: "E.I", role: "SaaS営業 / 3年目", before: "競合比較の質問に即答できず、持ち帰りが多かった", after: "反論対策集で想定Q&Aを事前準備。その場で即答でき信頼度UP" },
  { name: "J.U", role: "金融営業 / 8年目", before: "新規開拓のアプローチ方法がワンパターンで頭打ちだった", after: "企業分析付き営業文で差別化。新規アポ率が3倍に改善" },
  { name: "C.W", role: "教育営業 / 2年目", before: "学校ごとにニーズが違い、提案の方向性がいつも手探りだった", after: "HP分析で各校の課題を把握。的確な提案で導入率が大幅改善" },
  { name: "L.K", role: "物流営業 / 5年目", before: "既存顧客のフォローに追われ、新規開拓に手が回らなかった", after: "営業文の自動生成で新規アプローチを効率化。新規契約が月3件増" },
  { name: "P.G", role: "飲食営業 / 1年目", before: "飛び込み営業で何を話せばいいか分からず断られ続けていた", after: "場面別のトーク台本で会話の引き出しが増え、アポ獲得に成功" },
  { name: "W.A", role: "Web制作営業 / 3年目", before: "メール営業の文面がいつも同じで開封すらされなかった", after: "パーソナライズ営業文で開封率2倍、返信率3倍を達成" },
];

const tools = [
  {
    icon: MessageSquareText,
    name: "トーク台本作成",
    tag: "Talk Script",
    description:
      "初回訪問・テレアポ・クロージングなど、場面に応じたトーク台本をAIが自動生成。毎回ゼロから考える必要はありません。",
    features: ["5つの商談シーンに対応", "ターゲット情報で最適化", "コピー＆ペーストですぐ使える"],
  },
  {
    icon: ShieldQuestion,
    name: "反論対策集",
    tag: "Objection Handling",
    description:
      "「今は必要ない」「値段が高い」など、よくある断り文句への切り返しをAIが提案。自信を持って商談に臨めます。",
    features: ["あらゆる断り文句に対応", "状況に合わせた回答生成", "説得力のある切り返し"],
  },
  {
    icon: Globe,
    name: "フォーム営業文作成",
    tag: "Sales Letter",
    description:
      "相手のHPを自動解析し、企業に合わせたパーソナライズされた営業文を生成。刺さる営業メールを瞬時に作成。",
    features: ["HP自動スクレイピング", "企業ごとにカスタマイズ", "高い開封率・返信率"],
  },
  {
    icon: Briefcase,
    name: "商談準備ツール",
    tag: "Meeting Prep",
    description:
      "新規客向けの商談準備資料をワンクリックで作成。初めての商談でも、万全の準備で臨めます。",
    features: ["企業分析レポート生成", "想定Q&Aの準備", "提案ポイントの整理"],
  },
];

const industries = [
  { name: "保険", emoji: "🛡️" },
  { name: "不動産", emoji: "🏠" },
  { name: "マーケティング", emoji: "📊" },
  { name: "コンサル", emoji: "💼" },
  { name: "アパレル", emoji: "👔" },
  { name: "リフォーム", emoji: "🔨" },
  { name: "ナイトワーク", emoji: "🌙" },
  { name: "その他の営業", emoji: "🤝" },
];

const steps = [
  {
    icon: UserCheck,
    number: "01",
    title: "無料アカウント登録",
    description: "メールアドレスとパスワードだけで簡単に登録完了。クレジットカード不要。",
  },
  {
    icon: Zap,
    number: "02",
    title: "プロフィール設定",
    description: "業界・商材・強みを入力して、AIをあなた専用にカスタマイズ。",
  },
  {
    icon: Rocket,
    number: "03",
    title: "AIツールで営業開始",
    description: "すぐに全てのAI営業ツールが利用可能。成果を出し始めましょう。",
  },
];

const painPoints = [
  {
    icon: PenLine,
    text: "トーク台本を毎回ゼロから考えている",
    sub: "準備に時間がかかり、本来の営業活動に集中できない",
  },
  {
    icon: Target,
    text: "断り文句への切り返しに自信がない",
    sub: "商談中に詰まってしまい、チャンスを逃してしまう",
  },
  {
    icon: Clock,
    text: "営業メールの文面作成に時間がかかる",
    sub: "1通書くのに30分以上、テンプレでは響かない",
  },
  {
    icon: BarChart3,
    text: "新規商談の準備が不十分なまま臨んでしまう",
    sub: "相手のことをよく知らないまま商談に突入している",
  },
];

/* ───── Component ───── */
export default function LandingPage() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f8f9fc]">
      {/* ───── Header ───── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-[#e1e7f3]/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <img
            src="/lp/images/logo-dark.png"
            alt="SalesAI"
            className="h-8 w-auto"
          />
          <div className="flex items-center gap-3">
            <a
              href="#features"
              className="hidden md:inline-flex text-sm font-medium text-[#5a75b0] hover:text-[#0f1a2e] transition-colors px-3 py-2"
            >
              機能
            </a>
            <a
              href="#pricing"
              className="hidden md:inline-flex text-sm font-medium text-[#5a75b0] hover:text-[#0f1a2e] transition-colors px-3 py-2"
            >
              料金
            </a>
            <Link
              href="/login"
              className="hidden sm:inline-flex text-sm font-medium text-[#1e3a6e] hover:text-[#0f1a2e] transition-colors px-3 py-2"
            >
              ログイン
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold text-white
                         bg-gradient-to-r from-[#0f1a2e] to-[#1e3a6e]
                         shadow-[0_2px_8px_rgba(15,26,46,0.25)]
                         hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(15,26,46,0.3)]
                         transition-all duration-200"
            >
              無料で始める
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* ───── Hero ───── */}
      <section className="relative pt-32 pb-8 md:pt-48 md:pb-12 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 lp-dot-bg" />
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#c9a84c]/8 to-[#1e3a6e]/5 blur-3xl pointer-events-none lp-float" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#1e3a6e]/8 to-[#c9a84c]/5 blur-3xl pointer-events-none lp-float-delay" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="lp-fade-up">
            <span className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide
                          text-[#c9a84c] bg-[#c9a84c]/8 border border-[#c9a84c]/15
                          shadow-[0_0_20px_rgba(201,168,76,0.08)]">
              <Sparkles className="w-3.5 h-3.5" />
              業界特化型 AI営業支援プラットフォーム
            </span>
          </div>

          {/* Headline */}
          <div className="lp-fade-up" style={{ transitionDelay: "0.1s" }}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#0f1a2e] tracking-tight" style={{ lineHeight: 1.4 }}>
              <span className="lp-marker-strong">AIを駆使して</span>
              <br />
              <span className="lp-gradient-text bg-gradient-to-r from-[#0f1a2e] via-[#1e3a6e] to-[#c9a84c]">
                売れる営業マン
              </span>に
              <br className="md:hidden" />
              なろう。
            </h1>
          </div>

          {/* Subheadline */}
          <div className="lp-fade-up" style={{ transitionDelay: "0.2s" }}>
            <p className="mt-7 text-base md:text-xl text-[#5a75b0] leading-relaxed max-w-2xl mx-auto">
              トーク台本・反論対策・営業文作成・商談準備。
              <br className="hidden md:block" />
              <span className="lp-marker">業界特化のAI</span>が、<span className="lp-marker">成果につながる営業</span>を支援します。
            </p>
          </div>

          {/* Hero CTA */}
          <div className="lp-fade-up mt-12" style={{ transitionDelay: "0.3s" }}>
            <Link
              href="/register"
              className="lp-cta-pulse inline-flex items-center gap-2.5 px-12 md:px-16 py-5 md:py-6 rounded-full
                         text-base md:text-lg font-bold text-[#0f1a2e]
                         bg-gradient-to-r from-[#c9a84c] to-[#d4b65e]
                         shadow-[0_4px_24px_rgba(201,168,76,0.35)]
                         transition-all duration-300"
            >
              無料で始める
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-xs text-[#8da0cc]">
              クレカ登録なし・最短30秒で登録完了
            </p>
          </div>

          {/* Trust indicators */}
          <div className="lp-fade-up mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-[#5a75b0]" style={{ transitionDelay: "0.4s" }}>
            <span className="flex items-center gap-2 font-medium">
              <Check className="w-5 h-5 text-[#c9a84c]" />
              無料プランあり
            </span>
            <span className="flex items-center gap-2 font-medium">
              <Check className="w-5 h-5 text-[#c9a84c]" />
              全4種のAIツール
            </span>
            <span className="flex items-center gap-2 font-medium">
              <Check className="w-5 h-5 text-[#c9a84c]" />
              8業界に対応
            </span>
          </div>
        </div>
      </section>

      {/* ───── Stats / Social Proof Numbers ───── */}
      <section className="py-16 md:py-20 bg-white border-b border-[#e1e7f3]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lp-stagger grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "4", unit: "種類", label: "AIツール搭載", color: "text-[#c9a84c]" },
              { number: "8", unit: "業界", label: "に特化対応", color: "text-[#1e3a6e]" },
              { number: "30", unit: "秒", label: "で登録完了", color: "text-[#c9a84c]" },
              { number: "24", unit: "時間", label: "いつでも利用可能", color: "text-[#1e3a6e]" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl md:text-5xl font-extrabold ${stat.color}`} style={{ fontFeatureSettings: '"tnum"' }}>
                    {stat.number}
                  </span>
                  <span className="text-sm font-bold text-[#5a75b0]">{stat.unit}</span>
                </div>
                <p className="mt-1.5 text-xs md:text-sm text-[#8da0cc] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Pain Points (dark bg) ───── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a2e] via-[#152d5a] to-[#0f1a2e]" />
        <div className="absolute inset-0 lp-stripe-bg opacity-30" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="lp-fade-up text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              こんな<span className="lp-marker-strong">お悩み</span>ありませんか？
            </h2>
          </div>
          <div className="lp-stagger grid grid-cols-1 md:grid-cols-2 gap-5">
            {painPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-7 flex items-start gap-5
                             hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#c9a84c]/15
                                  flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-white font-bold leading-relaxed text-base">
                      {point.text}
                    </p>
                    <p className="mt-1.5 text-sm text-[#8da0cc] leading-relaxed">
                      {point.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Solution bridge ───── */}
      <section className="py-20 md:py-28 relative overflow-hidden lp-dot-bg">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="lp-fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full
                            bg-gradient-to-br from-[#c9a84c] to-[#d4b65e] mb-8
                            shadow-[0_4px_24px_rgba(201,168,76,0.3)] lp-pulse">
              <Sparkles className="w-9 h-9 text-white" />
            </div>
          </div>
          <div className="lp-fade-up" style={{ transitionDelay: "0.1s" }}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f1a2e] leading-tight">
              SalesAIが、
              <br className="md:hidden" />
              <span className="lp-marker-strong">すべて解決</span>します。
            </h2>
            <p className="mt-6 text-[#5a75b0] text-lg leading-relaxed max-w-xl mx-auto">
              AIがあなたの<strong className="text-[#1e3a6e]">業界・顧客・強み</strong>を理解した上で、
              パーソナライズされた営業コンテンツを<span className="lp-marker">瞬時に生成</span>します。
            </p>
          </div>
        </div>
      </section>


      {/* ───── Features ───── */}
      <section id="features" className="py-24 md:py-32 bg-white scroll-mt-20 relative lp-stripe-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="lp-fade-up text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase">Features</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0f1a2e]">
              <span className="lp-marker-strong">4つ</span>のAI営業ツール
            </h2>
            <p className="mt-4 text-[#5a75b0] text-lg max-w-lg mx-auto">
              営業のあらゆる場面をカバーする、あなた専用のAIアシスタント
            </p>
          </div>
          <div className="lp-stagger grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="lp-glow-card rounded-xl p-8 group relative overflow-hidden"
                >
                  {/* Point label */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold text-[#c9a84c] tracking-widest bg-[#c9a84c]/8 px-3 py-1 rounded-full">
                      POINT {i + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0f1a2e] to-[#1e3a6e]
                                    flex items-center justify-center
                                    shadow-[0_4px_12px_rgba(15,26,46,0.2)]
                                    group-hover:shadow-[0_4px_20px_rgba(15,26,46,0.3)]
                                    transition-shadow duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0f1a2e]">
                        {tool.name}
                      </h3>
                      <p className="text-xs font-medium text-[#8da0cc] tracking-wide">
                        {tool.tag}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5a75b0] leading-relaxed mb-5">
                    {tool.description}
                  </p>
                  <ul className="space-y-2.5">
                    {tool.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[#1e3a6e]">
                        <Check className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Product Demo Mockup ───── */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#f8f9fc]">
        <div className="absolute inset-0 lp-dot-bg opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="lp-fade-up text-center mb-14">
            <span className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase">Product</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0f1a2e]">
              直感的に使える<span className="lp-marker-strong">シンプル操作</span>
            </h2>
            <p className="mt-4 text-[#5a75b0] text-lg max-w-lg mx-auto">
              複雑な操作は不要。必要な情報を入力するだけで、AIが最適なコンテンツを生成します。
            </p>
          </div>
          {/* Mock browser window */}
          <div className="lp-fade-up" style={{ transitionDelay: "0.15s" }}>
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,26,46,0.15)] border border-[#e1e7f3]">
              {/* Browser chrome */}
              <div className="bg-[#f0f3f9] border-b border-[#e1e7f3] px-5 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-4 py-1.5 text-xs text-[#8da0cc] border border-[#e1e7f3] max-w-md mx-auto text-center">
                    salesai.jp/dashboard
                  </div>
                </div>
              </div>
              {/* Mock dashboard */}
              <div className="bg-white p-6 md:p-10">
                <div className="flex gap-6">
                  {/* Sidebar mock */}
                  <div className="hidden md:block w-52 flex-shrink-0">
                    <div className="bg-[#0f1a2e] rounded-xl p-5 h-full min-h-[320px]">
                      <div className="w-20 h-5 bg-white/20 rounded mb-8" />
                      {["ダッシュボード", "AIツール", "顧客管理", "記事", "設定"].map((item, i) => (
                        <div
                          key={item}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1.5 text-xs font-medium ${
                            i === 1
                              ? "bg-[#c9a84c]/15 text-[#c9a84c]"
                              : "text-white/50"
                          }`}
                        >
                          <div className={`w-4 h-4 rounded ${i === 1 ? "bg-[#c9a84c]/30" : "bg-white/10"}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Main content mock */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-lg font-bold text-[#0f1a2e]">AIツール</div>
                        <div className="text-xs text-[#8da0cc] mt-0.5">あなた専用のAI営業アシスタント</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {tools.slice(0, 4).map((tool) => {
                        const Icon = tool.icon;
                        return (
                          <div key={tool.name} className="border border-[#e1e7f3] rounded-xl p-5 hover:border-[#c9a84c]/30 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f1a2e] to-[#1e3a6e] flex items-center justify-center">
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-sm font-bold text-[#0f1a2e]">{tool.name}</span>
                            </div>
                            <p className="text-xs text-[#8da0cc] leading-relaxed line-clamp-2">{tool.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ───── Industries ───── */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 lp-dot-bg opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c9a84c]/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="lp-fade-up">
            <span className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase">Industries</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0f1a2e]">
              あなたの業界に<span className="lp-marker-strong">特化</span>したAI
            </h2>
            <p className="mt-4 text-[#5a75b0] text-lg max-w-lg mx-auto">
              業界ごとに最適化されたAIプロンプトで、より的確な営業コンテンツを生成します。
            </p>
          </div>
          <div className="lp-stagger mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="lp-glow-card rounded-xl p-6 text-center cursor-default"
              >
                <span className="text-3xl mb-3 block">{industry.emoji}</span>
                <span className="text-sm font-bold text-[#0f1a2e]">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Steps ───── */}
      <section className="py-24 md:py-32 relative lp-stripe-bg">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lp-fade-up text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase">How it works</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0f1a2e]">
              <span className="lp-marker-strong">かんたん3ステップ</span>で始められる
            </h2>
          </div>
          <div className="lp-stagger grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <div key={step.number} className={`text-center relative ${!isLast ? "lp-step-line" : ""}`}>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl
                                  bg-gradient-to-br from-[#0f1a2e] to-[#1e3a6e] mb-6
                                  shadow-[0_8px_24px_rgba(15,26,46,0.2)]
                                  relative z-10">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xs font-bold text-[#c9a84c] tracking-[0.2em] mb-2.5">
                    STEP {step.number}
                  </p>
                  <h3 className="text-xl font-bold text-[#0f1a2e] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5a75b0] leading-relaxed max-w-[280px] mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Inline CTA ── */}
      <CtaBanner text="今すぐ無料で始める" />

      {/* ───── Pricing ───── */}
      <section id="pricing" className="py-24 md:py-32 relative overflow-hidden scroll-mt-20 bg-white">
        <div className="absolute inset-0 lp-dot-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c9a84c]/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="lp-fade-up text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase">Pricing</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0f1a2e]">
              あなたに合った<span className="lp-marker-strong">プラン</span>を選べる
            </h2>
            <p className="mt-4 text-[#5a75b0] text-lg max-w-lg mx-auto">
              まずは無料で体験。本格利用はお得な長期プランがおすすめ
            </p>
          </div>

          <div className="lp-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {/* ── Free plan ── */}
            <div className="lp-glow-card rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-[#f0f3f9] px-6 py-4 text-center border-b border-[#e1e7f3]">
                <span className="text-base font-bold text-[#5a75b0]">無料プラン</span>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-lg font-bold text-[#8da0cc] mr-0.5">¥</span>
                    <span className="text-5xl font-extrabold tracking-tight text-[#0f1a2e]" style={{ fontFeatureSettings: '"tnum"' }}>0</span>
                  </div>
                  <p className="text-xs text-[#8da0cc] mt-2 tracking-wide">ずっと無料</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#e1e7f3] to-transparent mb-8" />
                <ul className="space-y-4 text-sm text-[#1e3a6e] flex-1">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <span className="font-medium">顧客管理 + メモ（無制限）</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <span className="font-medium">AIアドバイス（1日1回）</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <span className="font-medium">営業AIツール（1日1回）</span>
                  </li>
                  <li className="flex items-center gap-3 opacity-40">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#e1e7f3]/60 flex items-center justify-center">
                      <span className="text-[#8da0cc] text-sm">—</span>
                    </div>
                    <span className="font-medium">限定記事は読めない</span>
                  </li>
                </ul>
                <Link
                  href="/register"
                  className="mt-8 w-full inline-flex items-center justify-center py-4 rounded-xl
                             text-base font-bold text-[#1e3a6e] bg-[#f0f3f9] border border-[#e1e7f3]
                             hover:bg-[#e1e7f3] transition-colors"
                >
                  無料で始める
                </Link>
              </div>
            </div>

            {/* ── Monthly plan ── */}
            <div className="lp-glow-card rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-[#0f1a2e] to-[#1e3a6e] px-6 py-4 text-center">
                <span className="text-base font-bold text-white">月額プラン</span>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-lg font-bold text-[#8da0cc] mr-0.5">¥</span>
                    <span className="text-5xl font-extrabold tracking-tight text-[#0f1a2e]" style={{ fontFeatureSettings: '"tnum"' }}>2,980</span>
                    <span className="text-sm font-semibold text-[#8da0cc] ml-1">/月</span>
                  </div>
                  <p className="text-xs text-[#8da0cc] mt-2 tracking-wide">税込</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#e1e7f3] to-transparent mb-8" />
                <ul className="space-y-4 text-sm text-[#1e3a6e] flex-1">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <span className="font-medium">全機能使い放題</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <span className="font-medium">限定記事すべて読める</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0f1a2e]/5 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#1e3a6e]">¥</span>
                    </div>
                    <span className="font-medium">1日あたり<strong className="text-[#0f1a2e]">約99円</strong>で使い放題</span>
                  </li>
                </ul>
                <Link
                  href="/register"
                  className="btn-shimmer mt-8 w-full inline-flex items-center justify-center py-4 rounded-xl
                             text-base font-bold text-white
                             bg-gradient-to-r from-[#0f1a2e] to-[#1e3a6e]
                             shadow-[0_2px_12px_rgba(15,26,46,0.2)]
                             hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(15,26,46,0.3)]
                             transition-all duration-200"
                >
                  このプランで始める
                </Link>
              </div>
            </div>

            {/* ── Half-year plan (recommended) ── */}
            <div className="relative rounded-2xl overflow-hidden flex flex-col
                            bg-white border-2 border-[#c9a84c]/40
                            shadow-[0_8px_40px_rgba(201,168,76,0.12),0_0_0_1px_rgba(201,168,76,0.1)]">
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-[#c9a84c] text-[#0f1a2e] text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  おすすめ
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#c9a84c] to-[#d4b65e] px-6 py-4 text-center">
                <span className="inline-flex items-center gap-2 text-base font-bold text-[#0f1a2e]">
                  <Crown className="w-5 h-5" />
                  半年プラン
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-lg font-bold text-[#8da0cc] mr-0.5">¥</span>
                    <span className="text-5xl font-extrabold tracking-tight text-[#0f1a2e]" style={{ fontFeatureSettings: '"tnum"' }}>2,480</span>
                    <span className="text-sm font-semibold text-[#8da0cc] ml-1">/月</span>
                  </div>
                  <p className="text-xs text-[#8da0cc] mt-2 tracking-wide">6ヶ月一括 ¥14,880（税込）</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent mb-8" />
                <ul className="space-y-4 text-sm text-[#1e3a6e] flex-1">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <span className="font-bold text-[#c9a84c]">約17%OFF</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <span className="font-medium">全機能使い放題</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <span className="font-medium">限定記事すべて読める</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#c9a84c]">¥</span>
                    </div>
                    <span className="font-medium">1日あたり<strong className="text-[#c9a84c]">約83円</strong>で使い放題</span>
                  </li>
                </ul>
                <Link
                  href="/register"
                  className="lp-cta-pulse mt-8 w-full inline-flex items-center justify-center py-4 rounded-xl
                             text-base font-bold text-[#0f1a2e]
                             bg-gradient-to-r from-[#c9a84c] to-[#d4b65e]
                             shadow-[0_2px_16px_rgba(201,168,76,0.3)]
                             transition-all duration-200"
                >
                  このプランで始める
                </Link>
              </div>
            </div>

            {/* ── Annual plan ── */}
            <div className="lp-glow-card rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-[#0f1a2e] to-[#1e3a6e] px-6 py-4 text-center">
                <span className="text-base font-bold text-white">年間プラン</span>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-lg font-bold text-[#8da0cc] mr-0.5">¥</span>
                    <span className="text-5xl font-extrabold tracking-tight text-[#0f1a2e]" style={{ fontFeatureSettings: '"tnum"' }}>1,980</span>
                    <span className="text-sm font-semibold text-[#8da0cc] ml-1">/月</span>
                  </div>
                  <p className="text-xs text-[#8da0cc] mt-2 tracking-wide">12ヶ月一括 ¥23,760（税込）</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#e1e7f3] to-transparent mb-8" />
                <ul className="space-y-4 text-sm text-[#1e3a6e] flex-1">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <span className="font-bold text-[#c9a84c]">約34%OFF</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <span className="font-medium">全機能使い放題</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <span className="font-medium">限定記事すべて読める</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0f1a2e]/5 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#1e3a6e]">¥</span>
                    </div>
                    <span className="font-medium">1日あたり<strong className="text-[#0f1a2e]">約65円</strong>で使い放題</span>
                  </li>
                </ul>
                <Link
                  href="/register"
                  className="btn-shimmer mt-8 w-full inline-flex items-center justify-center py-4 rounded-xl
                             text-base font-bold text-white
                             bg-gradient-to-r from-[#0f1a2e] to-[#1e3a6e]
                             shadow-[0_2px_12px_rgba(15,26,46,0.2)]
                             hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(15,26,46,0.3)]
                             transition-all duration-200"
                >
                  このプランで始める
                </Link>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="lp-fade-up mt-10 text-center text-sm text-[#8da0cc]" style={{ transitionDelay: "0.2s" }}>
            <p>すべての有料プランはいつでも解約可能です。解約後も契約期間終了までご利用いただけます。</p>
          </div>
        </div>
      </section>

      {/* ───── Articles ───── */}
      <section className="py-24 md:py-32 relative overflow-hidden lp-stripe-bg">
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="lp-fade-up lp-glow-card rounded-2xl p-10 md:p-14 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
                            bg-gradient-to-br from-[#0f1a2e] to-[#1e3a6e] mb-6
                            shadow-[0_4px_16px_rgba(15,26,46,0.2)]">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f1a2e]">
              業界別の限定記事も<span className="lp-marker-strong">読み放題</span>
            </h2>
            <p className="mt-4 text-[#5a75b0] leading-relaxed max-w-lg mx-auto text-base">
              営業ノウハウ・業界トレンド・成功事例など、あなたの業界に合わせた限定コンテンツを配信。
              AIツールと合わせて、営業力を底上げします。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              {["営業テクニック", "業界トレンド", "成功事例", "マインドセット"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-[#f8f9fc] text-[#1e3a6e] font-medium border border-[#e1e7f3]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Testimonials (Before → After) ───── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 lp-dot-bg opacity-40" />
        <div className="relative">
          <div className="lp-fade-up text-center mb-16 px-6">
            <span className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase">Voice</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#0f1a2e] leading-tight">
              ご利用者の<span className="lp-marker-strong">声</span>
            </h2>
          </div>
          {/* Scrolling track */}
          <div className="lp-fade-up overflow-hidden">
            <div className="lp-scroll-track flex gap-5 w-max">
              {[...testimonials.map((v, i) => ({ ...v, _key: `a-${i}` })),
                ...testimonials.map((v, i) => ({ ...v, _key: `b-${i}` })),
              ].map((v) => (
                <div key={v._key} className="w-[300px] flex-shrink-0 bg-white border border-[#e1e7f3] rounded-xl overflow-hidden flex flex-col
                                              shadow-[0_2px_12px_rgba(15,26,46,0.06)]">
                  {/* Name header + Stars */}
                  <div className="px-6 pt-6 pb-4 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f1a2e] to-[#1e3a6e]
                                    flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {v.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-[#0f1a2e]">{v.name} さん</p>
                        <div className="flex gap-0.5 text-[#c9a84c]">
                          {[...Array(5)].map((_, j) => (
                            <svg key={j} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[#8da0cc]">{v.role}</p>
                    </div>
                  </div>

                  {/* Before */}
                  <div className="px-6 mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold text-white bg-[#e07b5c] mb-2">
                      Before
                    </span>
                    <p className="text-xs text-[#5a75b0] leading-relaxed">{v.before}</p>
                  </div>

                  {/* After */}
                  <div className="px-6 pb-6">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold text-white bg-[#3dab6e] mb-2">
                      After
                    </span>
                    <p className="text-xs text-[#1e3a6e] leading-relaxed font-medium">{v.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="lp-fade-up text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0f1a2e]">
              よくある質問
            </h2>
          </div>
          <div className="lp-stagger space-y-4">
            <FaqItem
              q="無料プランでもAIツールは使えますか？"
              a="はい、無料プランでも全4種類のAIツールをご利用いただけます。ただし、1日1回までの利用制限があります。有料プランにアップグレードすると、回数無制限でご利用いただけます。"
            />
            <FaqItem
              q="有料プランはいつでも解約できますか？"
              a="はい、いつでも解約可能です。解約後も、お支払い済みの契約期間が終了するまではすべての有料機能をご利用いただけます。解約手続きはアカウント設定画面から簡単に行えます。"
            />
            <FaqItem
              q="月額プランから半年・年間プランへ切り替えできますか？"
              a="はい、いつでもプランの切り替えが可能です。切り替え時は日割り計算で対応いたします。"
            />
            <FaqItem
              q="AIが生成した内容はそのまま使っても大丈夫ですか？"
              a="AIが生成するコンテンツは営業活動の参考資料としてご活用ください。そのままご利用いただくことも可能ですが、ご自身の状況や相手先に合わせて適宜調整されることをおすすめします。"
            />
            <FaqItem
              q="どの業界に対応していますか？"
              a="保険・不動産・マーケティング・コンサル・アパレル・リフォーム・ナイトワーク・その他の営業の8業界に対応しています。業界ごとに最適化されたAIプロンプトで、的確なコンテンツを生成します。"
            />
            <FaqItem
              q="顧客情報のセキュリティは大丈夫ですか？"
              a="お客様のデータはSSL/TLSによる暗号化通信で保護されており、パスワードも暗号化して保存しています。詳しくはプライバシーポリシーをご確認ください。"
            />
            <FaqItem
              q="支払い方法は何がありますか？"
              a="クレジットカード決済（Visa、Mastercard、American Express等）に対応しています。決済はStripeを通じて安全に処理されます。"
            />
          </div>
        </div>
      </section>

      {/* ───── Final CTA ───── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a2e] via-[#152d5a] to-[#1e3a6e]" />
        <div className="absolute inset-0 lp-dot-bg opacity-[0.06]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/3 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="lp-fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white" style={{ lineHeight: 1.4 }}>
              今すぐ、AIと一緒に
              <br />
              <span className="lp-gradient-text bg-gradient-to-r from-[#c9a84c] via-[#e0c96e] to-[#c9a84c]">
                営業を始めよう。
              </span>
            </h2>
          </div>
          <div className="lp-fade-up" style={{ transitionDelay: "0.1s" }}>
            <p className="mt-5 text-[#8da0cc] text-lg leading-relaxed">
              登録は無料。メールアドレスだけで、すぐに使い始められます。
            </p>
          </div>
          <div className="lp-fade-up mt-10" style={{ transitionDelay: "0.2s" }}>
            <Link
              href="/register"
              className="lp-cta-pulse inline-flex items-center gap-2.5 px-12 md:px-16 py-5 md:py-6 rounded-full
                         font-bold text-base md:text-lg
                         bg-gradient-to-r from-[#c9a84c] to-[#d4b65e] text-[#0f1a2e]
                         shadow-[0_4px_24px_rgba(201,168,76,0.35)]
                         transition-all duration-300"
            >
              無料で始める
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-xs text-[#5a75b0]">
              クレカ登録なし ・ 最短30秒で登録完了 ・ すぐに利用開始
            </p>
          </div>
          <div className="lp-fade-up mt-6" style={{ transitionDelay: "0.3s" }}>
            <Link
              href="/login"
              className="text-sm font-medium text-[#8da0cc] hover:text-white transition-colors"
            >
              すでにアカウントをお持ちの方はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="bg-[#080e1a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <img
                src="/lp/images/logo-white.png"
                alt="SalesAI"
                className="h-7 w-auto mb-3"
              />
              <p className="text-sm text-[#5a75b0] max-w-xs leading-relaxed">
                AIがあなたの営業をサポートする、業界特化型の営業支援プラットフォーム。
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <Link href="/register" className="text-[#8da0cc] hover:text-white transition-colors">
                新規登録
              </Link>
              <Link href="/login" className="text-[#8da0cc] hover:text-white transition-colors">
                ログイン
              </Link>
              <Link href="/terms" className="text-[#8da0cc] hover:text-white transition-colors">
                利用規約
              </Link>
              <Link href="/privacy" className="text-[#8da0cc] hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/legal" className="text-[#8da0cc] hover:text-white transition-colors">
                特定商取引法に基づく表記
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#5a75b0]">
              <Mail className="w-4 h-4" />
              <span>お問い合わせ: salesai.official@gmail.com</span>
            </div>
            <p className="text-xs text-[#3d4f73]">
              &copy; {new Date().getFullYear()} SalesAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ───── FAQ accordion item ───── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lp-glow-card rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 p-6 text-left
                   hover:bg-[#f8f9fc]/50 transition-colors"
      >
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f1a2e] flex items-center justify-center text-sm font-bold text-white">
          Q
        </span>
        <span className="flex-1 text-sm md:text-base font-bold text-[#0f1a2e] leading-relaxed">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#8da0cc] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex gap-5 px-6 pb-6">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center text-sm font-bold text-[#0f1a2e]">
              A
            </span>
            <p className="flex-1 text-sm text-[#5a75b0] leading-relaxed pt-1.5">{a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
