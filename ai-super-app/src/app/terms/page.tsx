export default function Terms() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">利用規約</h1>
      <p className="text-xs text-gray-400 mb-8">最終更新日: 2026年2月14日</p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">第1条（適用）</h2>
          <p>
            本規約は、AI Super App（以下「本アプリ」）の利用に関する条件を定めるものです。
            ユーザーは、本アプリを利用することにより、本規約に同意したものとみなされます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">第2条（サービス内容）</h2>
          <p>
            本アプリは、AIを活用した各種ツール（テキスト生成、画像分析、データ処理等）を
            提供するサービスです。80種類以上のAIツールを搭載しています。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">第3条（アカウント）</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>ユーザーはメールアドレスとパスワードでアカウントを作成できます。</li>
            <li>アカウント情報の管理はユーザー自身の責任となります。</li>
            <li>第三者へのアカウントの譲渡・共有は禁止します。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">第4条（料金プラン）</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>無料プラン:</strong> 1日2回までAIツールを利用可能。</li>
            <li><strong>プレミアムプラン:</strong> 月額制のサブスクリプション。無制限にAIツールを利用可能。</li>
            <li>サブスクリプションは自動更新されます。解約は次回更新日の24時間前までに行ってください。</li>
            <li>App Store / Google Playからの購入の場合、各ストアの規約が適用されます。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">第5条（禁止事項）</h2>
          <p>ユーザーは、以下の行為を行ってはなりません。</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>違法行為または違法行為を助長する利用</li>
            <li>他者の権利を侵害するコンテンツの生成</li>
            <li>本アプリのリバースエンジニアリング・不正アクセス</li>
            <li>本アプリに過度な負荷をかける行為</li>
            <li>自動化ツールによる大量リクエスト</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">第6条（AI生成コンテンツ）</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>AIの出力は参考情報であり、正確性を保証するものではありません。</li>
            <li>医療・法律・財務等の専門的判断にはAI出力を使用しないでください。</li>
            <li>AI生成コンテンツの利用により生じた損害について、当社は責任を負いません。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">第7条（免責事項）</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>本アプリは「現状のまま」提供されます。</li>
            <li>サービスの中断・停止・変更について、事前の通知なく行う場合があります。</li>
            <li>天災・システム障害等の不可抗力による損害には責任を負いません。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">第8条（規約の変更）</h2>
          <p>
            本規約は、必要に応じて変更することがあります。
            重要な変更がある場合は、アプリ内で通知いたします。
            変更後も本アプリを利用した場合、変更後の規約に同意したものとみなします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">第9条（準拠法・管轄）</h2>
          <p>
            本規約は日本法に準拠し、本アプリに関する紛争は
            東京地方裁判所を第一審の専属的合意管轄裁判所とします。
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
