'use client';

import { motion } from 'framer-motion';

export default function Research() {
  return (
    <div className="min-h-screen pt-[110px] bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white p-8">
      {/* タイトル */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          研究内容
        </h1>
        <p className="text-lg mt-4 text-gray-100">最先端の通信技術とネットワーク研究をご紹介します。</p>
      </motion.div>

      {/* 研究項目 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-200 mb-6">
          研究テーマ
        </h2>
        <ul className="space-y-4 text-gray-300 text-lg">
          <li>
            <h3 className="font-semibold text-yellow-400">無線メッシュネットワーク</h3>
            <p>
              複数のノードが相互に通信し、効率的なデータ伝送を実現するための技術。
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-blue-400">P2P通信技術</h3>
            <p>
              ピアツーピアネットワークでのデータ共有とセキュリティ向上のためのアルゴリズム研究。
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-green-400">分散ネットワークシステム</h3>
            <p>
              中央集権型の管理を排除し、柔軟で拡張性のあるネットワークを実現するための技術。
            </p>
          </li>
        </ul>
      </motion.div>

      {/* 研究のアプローチ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-gray-900 p-8 mt-10 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-semibold text-center text-gray-200 mb-4">
          研究のアプローチ
        </h3>
        <p className="text-gray-300 text-lg">
          私たちの研究室では、無線メッシュネットワークやP2P通信を利用した、データの高速伝送とセキュアな通信環境を実現するためのアルゴリズムを研究しています。
        </p>
        <ul className="space-y-4 text-gray-300 text-lg mt-6">
          <li>
            <h4 className="font-semibold text-yellow-400">効率的なルーティング技術</h4>
            <p>無線メッシュネットワーク内での最適なルーティングアルゴリズムの開発。</p>
          </li>
          <li>
            <h4 className="font-semibold text-blue-400">セキュリティ強化</h4>
            <p>P2P通信におけるデータの暗号化とセキュリティプロトコルの研究。</p>
          </li>
          <li>
            <h4 className="font-semibold text-green-400">スケーラビリティの向上</h4>
            <p>大規模なネットワークにおける性能とスケーラビリティの向上を目指しています。</p>
          </li>
        </ul>
      </motion.div>

      {/* イメージ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mt-16"
      >
        <img
          src="/research_image.png"  // ここに関連画像を指定
          alt="研究のイメージ"
          className="w-full max-w-2xl rounded-lg shadow-xl"
        />
      </motion.div>
    </div>
  );
}
