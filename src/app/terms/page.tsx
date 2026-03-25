import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "利用規約｜SalesAI",
};

/* ───── 規約データ ───── */
const sections = [
  {
    title: "第1条（適用）",
    content: `本規約は、SalesAI（以下「当サービス」）の利用に関する条件を、当サービスを利用するすべてのユーザー（以下「ユーザー」）と当サービスの運営者（以下「運営者」）との間で定めるものです。ユーザーは、本規約に同意の上、当サービスを利用するものとします。`,
  },
  {
    title: "第2条（定義）",
    content: `本規約において使用する用語の定義は以下の通りとします。`,
    list: [
      "「当サービス」とは、運営者が提供するAI営業支援プラットフォーム「SalesAI」を指します。",
      "「ユーザー」とは、当サービスに登録し、利用する個人または法人を指します。",
      "「コンテンツ」とは、当サービス上で提供されるテキスト、画像、AIによる生成物その他一切の情報を指します。",
    ],
  },
  {
    title: "第3条（アカウント登録）",
    list: [
      "ユーザーは、当サービスの利用にあたり、正確かつ最新の情報を登録するものとします。",
      "ユーザーは、自身のアカウント情報（メールアドレス・パスワード等）を適切に管理する責任を負い、第三者に利用させてはなりません。",
      "アカウント情報の管理不十分、第三者の使用等による損害の責任は、ユーザーが負うものとします。",
    ],
    ordered: true,
  },
  {
    title: "第4条（料金および支払い）",
    list: [
      "当サービスの有料プランの料金は、当サービス上に表示される金額に従うものとします。",
      "ユーザーは、選択した料金プランに基づき、所定の方法で料金を支払うものとします。",
      "支払い済みの料金は、法令に定めがある場合を除き、返金いたしません。",
      "運営者は、事前に通知の上、料金を変更することができるものとします。",
    ],
    ordered: true,
  },
  {
    title: "第5条（禁止事項）",
    content: `ユーザーは、当サービスの利用にあたり、以下の行為を行ってはなりません。`,
    list: [
      "法令または公序良俗に違反する行為",
      "犯罪行為に関連する行為",
      "当サービスの運営を妨害する行為",
      "他のユーザーまたは第三者の知的財産権、プライバシー権、名誉等を侵害する行為",
      "不正アクセス、リバースエンジニアリング、スクレイピング等の行為",
      "当サービスを通じて取得した情報を、当サービスの趣旨に反する目的で利用する行為",
      "反社会的勢力等への利益供与",
      "その他、運営者が不適切と判断する行為",
    ],
  },
  {
    title: "第6条（AIコンテンツの取り扱い）",
    list: [
      "当サービスが生成するAIコンテンツは、参考情報として提供されるものであり、その正確性、完全性、有用性等を保証するものではありません。",
      "AIコンテンツの利用により生じた損害について、運営者は一切の責任を負いません。",
      "ユーザーは、AIコンテンツを自己の判断と責任のもとに利用するものとします。",
    ],
    ordered: true,
  },
  {
    title: "第7条（知的財産権）",
    list: [
      "当サービスに関する知的財産権は、運営者または正当な権利を有する第三者に帰属します。",
      "ユーザーが当サービスを利用して生成したAIコンテンツについて、ユーザーは自己の営業活動等の目的で自由に利用できるものとします。",
    ],
    ordered: true,
  },
  {
    title: "第8条（サービスの変更・中断・終了）",
    list: [
      "運営者は、ユーザーへの事前の通知なく、当サービスの内容を変更し、または提供を中断・終了することができるものとします。",
      "運営者は、サービスの変更・中断・終了によりユーザーに生じた損害について、一切の責任を負わないものとします。",
    ],
    ordered: true,
  },
  {
    title: "第9条（免責事項）",
    list: [
      "運営者は、当サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティ等に関する欠陥、エラーやバグ等を含みます）がないことを保証するものではありません。",
      "運営者は、当サービスに起因してユーザーに生じたあらゆる損害について、運営者の故意または重大な過失による場合を除き、一切の責任を負いません。",
    ],
    ordered: true,
  },
  {
    title: "第10条（退会）",
    content: `ユーザーは、運営者の定める手続きにより、いつでもアカウントを削除し、当サービスから退会することができます。退会後、ユーザーのデータは運営者のプライバシーポリシーに従い取り扱われます。`,
  },
  {
    title: "第11条（規約の変更）",
    content: `運営者は、必要と判断した場合には、ユーザーに通知することなく、いつでも本規約を変更することができるものとします。変更後の利用規約は、当サービス上に掲示した時点より効力を生じるものとします。`,
  },
  {
    title: "第12条（準拠法・裁判管轄）",
    list: [
      "本規約の解釈にあたっては、日本法を準拠法とします。",
      "当サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
    ],
    ordered: true,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-[#e1e7f3]/60">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/lp"
            className="flex items-center gap-2 text-sm text-[#5a75b0] hover:text-[#0f1a2e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            トップに戻る
          </Link>
          <img src="/lp/images/logo-dark.png" alt="SalesAI" className="h-6 w-auto" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        {/* Title block */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0f1a2e]">利用規約</h1>
          <p className="text-xs text-[#8da0cc] mt-2">最終更新日: 2026年3月19日</p>
        </div>

        {/* TOC */}
        <nav className="mb-12 bg-white border border-[#e1e7f3] rounded-xl p-6 shadow-[0_1px_8px_rgba(15,26,46,0.04)]">
          <p className="text-xs font-bold text-[#8da0cc] tracking-widest uppercase mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
            {sections.map((s, i) => (
              <li key={i}>
                <a
                  href={`#section-${i + 1}`}
                  className="text-[#1e3a6e] hover:text-[#c9a84c] transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-0">
          {sections.map((s, i) => (
            <section
              key={i}
              id={`section-${i + 1}`}
              className="py-7 border-b border-[#e1e7f3] last:border-b-0 scroll-mt-20"
            >
              <h2 className="text-base font-bold text-[#0f1a2e] mb-3">{s.title}</h2>
              {s.content && (
                <p className="text-sm text-[#1e3a6e] leading-relaxed">{s.content}</p>
              )}
              {s.list && (
                <ListBlock items={s.list} ordered={s.ordered} hasContent={!!s.content} />
              )}
            </section>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-[#e1e7f3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#8da0cc]">
            <Mail className="w-4 h-4" />
            <a href="mailto:salesai.official@gmail.com" className="text-[#1e3a6e] hover:underline">
              salesai.official@gmail.com
            </a>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-[#5a75b0] hover:text-[#0f1a2e] transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/legal" className="text-[#5a75b0] hover:text-[#0f1a2e] transition-colors">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ───── helper ───── */
function ListBlock({
  items,
  ordered,
  hasContent,
}: {
  items: string[];
  ordered?: boolean;
  hasContent: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={`${ordered ? "list-decimal" : "list-disc"} pl-5 space-y-2 text-sm text-[#1e3a6e] leading-relaxed ${hasContent ? "mt-3" : ""}`}
    >
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  );
}
