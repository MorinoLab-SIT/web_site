'use client';

import { motion } from 'framer-motion';

export default function Publications() {
  const publications = [
    {
      title: "無線メッシュネットワークにおけるデータ伝送効率の向上",
      authors: "森野 太郎, 佐藤 次郎",
      year: "2025",
      link: "https://example.com/paper1",
    },
    {
      title: "P2P通信技術の最新動向",
      authors: "鈴木 花子, 高橋 一郎",
      year: "2024",
      link: "https://example.com/paper2",
    },
    {
      title: "AIを利用した最適化アルゴリズムの研究",
      authors: "田中 誠, 佐々木 智子",
      year: "2023",
      link: "https://example.com/paper3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white p-8">
      {/* タイトル */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          論文一覧
        </h1>
        <p className="text-lg mt-4 text-gray-100">私たちの最新の研究成果をご紹介します。</p>
      </motion.div>

      {/* 論文カードリスト */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {publications.map((publication, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">{publication.title}</h3>
            <p className="text-lg mb-4">著者: {publication.authors}</p>
            <p className="text-sm text-gray-500 mb-4">発表年: {publication.year}</p>
            <a
              href={publication.link}
              target="_blank"
              className="text-teal-500 hover:text-teal-700 font-semibold"
            >
              詳細はこちら
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
