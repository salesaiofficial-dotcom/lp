import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜SalesAI",
};

const sections = [
  {
    title: "1. 収集する情報",
    content: "当サービスは、以下の情報を収集する場合があります。",
    subsections: [
      {
        subtitle: "（1）ユーザーから直接提供される情報",
        list: [
          "メールアドレス",
          "パスワード（暗号化して保存）",
          "ユーザー名",
          "業界・職種情報",
          "プロフィール情報（経験年数、取扱商材、営業スタイル等）",
          "会社HP URL",
          "顧客情報（ユーザーが任意で入力するもの）",
        ],
      },
      {
        subtitle: "（2）自動的に収集される情報",
        list: [
          "アクセスログ（IPアドレス、ブラウザ情報、アクセス日時等）",
          "Cookie情報（セッション管理・認証のため）",
          "サービスの利用状況に関する情報",
        ],
      },
    ],
  },
  {
    title: "2. 情報の利用目的",
    content: "収集した情報は、以下の目的で利用します。",
    list: [
      "当サービスの提供・運営・改善",
      "ユーザー認証およびアカウント管理",
      "AIによるパーソナライズされた営業コンテンツの生成",
      "ユーザーサポートへの対応",
      "利用状況の分析およびサービス改善",
      "重要なお知らせ・サービス変更の通知",
      "利用料金の請求・決済処理",
      "不正利用の防止",
    ],
  },
  {
    title: "3. 情報の第三者提供",
    content:
      "当サービスは、以下の場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。",
    list: [
      "法令に基づく場合",
      "人の生命、身体または財産の保護のために必要がある場合",
      "公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合",
      "国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合",
    ],
  },
  {
    title: "4. 外部サービスとの連携",
    content:
      "当サービスは、以下の外部サービスを利用しています。各サービスのプライバシーポリシーもご確認ください。",
    table: [
      ["Supabase", "ユーザー認証・データベース・ファイルストレージ"],
      ["Anthropic（Claude AI）", "AI営業コンテンツの生成"],
      ["Stripe", "決済処理（カード情報は当サービスでは保存しません）"],
      ["Vercel", "サービスのホスティング"],
    ],
  },
  {
    title: "5. データの保存・管理",
    list: [
      "ユーザーの個人情報は、適切なセキュリティ対策を講じた上で保存・管理します。",
      "パスワードは暗号化して保存し、平文での保存は行いません。",
      "通信はSSL/TLSにより暗号化されています。",
    ],
    ordered: true,
  },
  {
    title: "6. ユーザーの権利",
    content: "ユーザーは、自身の個人情報について以下の権利を有します。上記の権利を行使される場合は、下記のお問い合わせ先までご連絡ください。",
    highlights: [
      { label: "アクセス権", text: "自身の個人情報の開示を請求する権利" },
      { label: "訂正権", text: "不正確な個人情報の訂正を請求する権利" },
      { label: "削除権", text: "個人情報の削除を請求する権利" },
      { label: "利用停止権", text: "個人情報の利用停止を請求する権利" },
    ],
  },
  {
    title: "7. Cookieについて",
    content:
      "当サービスは、ユーザー認証およびセッション管理のためにCookieを使用しています。Cookieはブラウザの設定により無効にすることができますが、その場合、当サービスの一部の機能がご利用いただけなくなる場合があります。",
  },
  {
    title: "8. 未成年者の利用について",
    content:
      "当サービスは、原則として18歳以上の方を対象としています。18歳未満の方が利用される場合は、保護者の同意を得た上でご利用ください。",
  },
  {
    title: "9. プライバシーポリシーの変更",
    content:
      "当サービスは、必要に応じて本プライバシーポリシーを変更することがあります。重要な変更がある場合は、当サービス上での通知またはメールにてお知らせします。",
  },
];

export default function PrivacyPage() {
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
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0f1a2e]">
            プライバシーポリシー
          </h1>
          <p className="text-xs text-[#8da0cc] mt-2">最終更新日: 2026年3月19日</p>
        </div>

        {/* Intro */}
        <div className="mb-10 bg-white border border-[#e1e7f3] rounded-xl p-6 shadow-[0_1px_8px_rgba(15,26,46,0.04)]">
          <p className="text-sm text-[#1e3a6e] leading-relaxed">
            SalesAI（以下「当サービス」）は、ユーザーの個人情報の保護を重要と考え、個人情報の保護に関する法律（個人情報保護法）を遵守し、以下のプライバシーポリシーに従って個人情報を適切に取り扱います。
          </p>
        </div>

        {/* TOC */}
        <nav className="mb-12 bg-white border border-[#e1e7f3] rounded-xl p-6 shadow-[0_1px_8px_rgba(15,26,46,0.04)]">
          <p className="text-xs font-bold text-[#8da0cc] tracking-widest uppercase mb-3">
            目次
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
            {sections.map((s, i) => (
              <li key={i}>
                <a
                  href={`#privacy-${i + 1}`}
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
              id={`privacy-${i + 1}`}
              className="py-7 border-b border-[#e1e7f3] last:border-b-0 scroll-mt-20"
            >
              <h2 className="text-base font-bold text-[#0f1a2e] mb-3">{s.title}</h2>

              {s.content && (
                <p className="text-sm text-[#1e3a6e] leading-relaxed">{s.content}</p>
              )}

              {/* subsections */}
              {"subsections" in s &&
                s.subsections?.map((sub, j) => (
                  <div key={j} className="mt-4">
                    <h3 className="text-sm font-bold text-[#0f1a2e] mb-2">{sub.subtitle}</h3>
                    <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#1e3a6e] leading-relaxed">
                      {sub.list.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}

              {/* basic list */}
              {"list" in s && s.list && !("subsections" in s) && (
                (() => {
                  const Tag = s.ordered ? "ol" : "ul";
                  return (
                    <Tag
                      className={`${s.ordered ? "list-decimal" : "list-disc"} pl-5 mt-3 space-y-1.5 text-sm text-[#1e3a6e] leading-relaxed`}
                    >
                      {s.list.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </Tag>
                  );
                })()
              )}

              {/* table */}
              {"table" in s && s.table && (
                <div className="mt-4 bg-[#f8f9fc] border border-[#e1e7f3] rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0f1a2e]/[0.03]">
                        <th className="text-left py-3 px-5 font-bold text-[#0f1a2e] w-[200px]">
                          サービス名
                        </th>
                        <th className="text-left py-3 px-5 font-bold text-[#0f1a2e]">
                          利用目的
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.map(([name, purpose], k) => (
                        <tr key={k} className="border-t border-[#e1e7f3]">
                          <td className="py-3 px-5 font-medium text-[#0f1a2e]">{name}</td>
                          <td className="py-3 px-5 text-[#1e3a6e]">{purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* highlights (rights) */}
              {"highlights" in s && s.highlights && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {s.highlights.map((h, k) => (
                    <div
                      key={k}
                      className="bg-white border border-[#e1e7f3] rounded-lg p-4"
                    >
                      <span className="text-xs font-bold text-[#c9a84c] tracking-wide">
                        {h.label}
                      </span>
                      <p className="text-sm text-[#1e3a6e] mt-1">{h.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 bg-white border border-[#e1e7f3] rounded-xl p-6 shadow-[0_1px_8px_rgba(15,26,46,0.04)]">
          <h2 className="text-base font-bold text-[#0f1a2e] mb-2">10. お問い合わせ</h2>
          <p className="text-sm text-[#1e3a6e] leading-relaxed">
            個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
          </p>
          <p className="text-sm text-[#1e3a6e] mt-3">
            SalesAI 運営事務局
            <br />
            メール:{" "}
            <a
              href="mailto:salesai.official@gmail.com"
              className="text-[#1e3a6e] font-medium hover:underline"
            >
              salesai.official@gmail.com
            </a>
          </p>
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
            <Link href="/terms" className="text-[#5a75b0] hover:text-[#0f1a2e] transition-colors">
              利用規約
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
