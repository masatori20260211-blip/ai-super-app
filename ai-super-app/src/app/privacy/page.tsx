export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">プライバシーポリシー</h1>
      <p className="text-xs text-gray-400 mb-8">最終更新日: 2026年2月14日</p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">1. はじめに</h2>
          <p>
            AI Super App（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、
            個人情報の保護に努めます。本ポリシーでは、本アプリが収集する情報、
            その利用方法、およびユーザーの権利について説明します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">2. 収集する情報</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>アカウント情報（メールアドレス、パスワード（ハッシュ化済み））</li>
            <li>利用履歴（使用したツール、入力・出力テキスト）</li>
            <li>サブスクリプション情報（プラン種別、決済状況）</li>
            <li>デバイス情報（OS、ブラウザ種別、言語設定）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">3. 情報の利用目的</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>AIツールの処理結果の生成・表示</li>
            <li>アカウント管理および認証</li>
            <li>サービスの改善および新機能の開発</li>
            <li>利用制限の管理（無料プランの日次制限等）</li>
            <li>サブスクリプションの決済処理</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">4. 第三者への提供</h2>
          <p>
            本アプリでは、以下の第三者サービスを利用しています。
            各サービスのプライバシーポリシーもご確認ください。
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Anthropic（Claude API）— AIテキスト生成処理</li>
            <li>Stripe — サブスクリプション決済処理</li>
          </ul>
          <p className="mt-2">
            法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">5. データの保管</h2>
          <p>
            ユーザーのデータは適切なセキュリティ対策を講じたサーバーに保管されます。
            パスワードはbcryptによりハッシュ化して保存しており、平文での保存は行いません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">6. ユーザーの権利</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>アカウント情報の確認・修正を求める権利</li>
            <li>アカウントの削除を求める権利</li>
            <li>利用履歴の削除を求める権利</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">7. お問い合わせ</h2>
          <p>
            プライバシーに関するお問い合わせは、アプリ内のお問い合わせ機能、
            または下記メールアドレスまでご連絡ください。
          </p>
          <p className="mt-2 font-medium">support@aisuper.tools</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">8. ポリシーの変更</h2>
          <p>
            本ポリシーは、法令の変更やサービス内容の変更に伴い、
            予告なく改定することがあります。重要な変更がある場合は、
            アプリ内で通知いたします。
          </p>
        </section>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <a href="/" className="text-sm text-indigo-600 hover:underline">
          &larr; アプリに戻る
        </a>
      </div>
    </main>
  );
}
