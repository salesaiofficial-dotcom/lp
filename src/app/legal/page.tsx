import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記｜SalesAI",
};

const rows: [string, string][] = [
  ["販売事業者", "寺村 優樹"],
  [
    "所在地",
    "〒576-0017\n大阪府交野市星田北6丁目52-29",
  ],
  [
    "電話番号",
    "090-6067-9140\n受付時間 10:00 - 18:00（土日祝を除く）\n※お問い合わせはメールにてお願いいたします",
  ],
  ["メールアドレス", "salesai.official@gmail.com"],
  [
    "商品販売価格",
    "各料金プランページに記載の金額（税込表示）",
  ],
  [
    "商品代金以外にかかる料金",
    "インターネット接続料金、通信料金等（ユーザー負担）",
  ],
  ["支払方法", "クレジットカード決済"],
  [
    "支払時期",
    "クレジットカード決済：お申込み時に直ちに処理されます。\nサブスクリプションの場合、各更新日に自動課金されます。",
  ],
  [
    "商品の引渡時期",
    "決済完了後、即時にサービスをご利用いただけます。",
  ],
  [
    "返金・キャンセル",
    "＜お客様都合の場合＞\nデジタルサービスの性質上、決済完了後の返金は原則として行っておりません。サブスクリプションの解約はいつでも可能で、解約後も当該請求期間の終了までサービスをご利用いただけます。\n\n＜サービスに不備がある場合＞\n個別に対応いたします。まずはメール（salesai.official@gmail.com）までご連絡ください。",
  ],
  [
    "動作環境",
    "最新版の Google Chrome、Safari、Firefox、Microsoft Edge を推奨。インターネット接続環境が必要です。",
  ],
];

export default function LegalPage() {
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
          <img src="/images/logo-dark.png" alt="SalesAI" className="h-6 w-auto" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        {/* Title block */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0f1a2e]">
            特定商取引法に基づく表記
          </h1>
          <p className="text-xs text-[#8da0cc] mt-2">最終更新日: 2026年3月19日</p>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#d6ddef] rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(15,26,46,0.06)]">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {rows.map(([label, value], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-[#f6f8fc]" : "bg-white"}>
                  <th
                    className="text-left align-top py-5 px-6 font-bold text-[#0f1a2e] whitespace-nowrap
                               w-[160px] md:w-[200px] border-b border-[#e4e9f4] bg-[#0f1a2e]/[0.025]"
                  >
                    {label}
                  </th>
                  <td className="py-5 px-6 text-[#1e3a6e] leading-relaxed border-b border-[#e4e9f4] whitespace-pre-line">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
            <Link href="/privacy" className="text-[#5a75b0] hover:text-[#0f1a2e] transition-colors">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
