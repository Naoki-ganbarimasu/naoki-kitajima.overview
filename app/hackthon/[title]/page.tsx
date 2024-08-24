
const workPage = () => {
  return (
    <div className="flex h-screen">
      {/* 左側のパネル */}
      <div className="w-1/4 bg-gray-100 p-5 fixed h-full overflow-auto">
        <h1 className="text-xl font-bold">2023.12</h1>
        <h2 className="text-2xl font-bold mt-3">Spoon</h2>
        <p className="mt-5">使用技術・ツール</p>
        <ul className="list-disc list-inside mt-3">
          <li>Next.js, React, TypeScript</li>
          <li>Vercel, OpenAI API</li>
          <li>Figma, DaVinci Resolve</li>
        </ul>
        <div className="mt-5 space-x-2">
          <span className="inline-block bg-gray-300 text-sm px-3 py-1 rounded">
            アプリ
          </span>
          <span className="inline-block bg-gray-300 text-sm px-3 py-1 rounded">
            チーム開発
          </span>
          <span className="inline-block bg-gray-300 text-sm px-3 py-1 rounded">
            映像制作
          </span>
        </div>
        <a href="#" className="block mt-5 text-blue-500 hover:underline">
          ← 一覧に戻る
        </a>
      </div>
      {/* 右側のパネル */}
      <div className="ml-1/4 w-3/4 p-5 overflow-y-auto">
        <img
          src="/path/to/your/image.png"
          alt="Spoon App"
          className="w-full h-auto"
        />
        <h2 className="text-3xl font-bold mt-10">毎日をひんやり保存</h2>
        <p className="mt-5">
          このアプリは、1日1枚だけ写真を撮って、アイスクリームに変換して保存しておく、というものです。生成されたアイスクリームには、オリジナルでユニークな名前がつけられます。
        </p>
        {/* 他のコンテンツが続く */}
      </div>
    </div>
  );
}

export default workPage
