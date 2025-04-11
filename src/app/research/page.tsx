'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Research() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white p-8">
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
        <p className="text-lg mt-4 text-gray-100">
          ユーザ参加型自律分散ネットワークを中心に、無線メッシュやP2P通信などの分野で先進的な研究を行っています。
        </p>
      </motion.div>

      {/* 研究テーマ */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-200 mb-6">
          研究テーマ
        </h2>
        <ul className="space-y-6 text-gray-300 text-lg">
          <li>
            <h3 className="font-semibold text-yellow-400">ユーザ参加型自律分散ネットワーク</h3>
            <p>
              ユーザの通信機器が中継ノードとなり、自律分散的な高速ネットワークを構築する手法を研究。
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-blue-400">無線メッシュネットワークにおけるコンテンツキャッシュ</h3>
            <p>
              イベント会場などにおけるキャッシュ配信の最適化と混雑緩和のための手法を提案。
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-green-400">P2Pマルチキャストによるライブ配信</h3>
            <p>
              サーバ負荷を軽減しつつ、ユーザ間で効率よく映像を共有できるネットワーク技術の開発。
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
          森野研究室では、実験・シミュレーション・理論分析を組み合わせ、実現性の高いネットワークシステムを提案しています。
        </p>
        <ul className="space-y-4 text-gray-300 text-lg mt-6">
          <li>
            <h4 className="font-semibold text-yellow-400">ルーティング手法の最適化</h4>
            <p>通信経路を効率化するためのルーティングアルゴリズムの構築。</p>
          </li>
          <li>
            <h4 className="font-semibold text-blue-400">セキュリティと秘匿性の確保</h4>
            <p>ネットワーク上での匿名性と情報保護を両立するプロトコルの開発。</p>
          </li>
          <li>
            <h4 className="font-semibold text-green-400">スケーラビリティの拡張</h4>
            <p>参加者が増加しても性能が維持できるネットワーク設計。</p>
          </li>
        </ul>
      </motion.div>

      {/* イメージ画像（ネットワーク図など） */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mt-16"
      >
        <Image
          src="/research/network_diagram.png"
          alt="研究イメージ図"
          width={800}
          height={500}
          className="rounded-lg shadow-2xl"
        />
      </motion.div>
    </div>
  );
}
