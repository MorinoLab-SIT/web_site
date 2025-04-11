'use client';

import { motion } from 'framer-motion';

export default function Publications() {
  const publications = [
    {
      title: "ペイメントチャネルネットワークにおける送金の秘匿を考慮した中継経路決定手法",
      authors: "佐藤衡平，森野博章",
      year: "2025年3月掲載予定",
      link: "https://www.ieice.org/ken/paper/20250300b/",
    },
    {
      title: "Reward Design in Vehicular Crowdsensing Focused on Improving Time-Efficiency of Sensing",
      authors: "Kaho Ishikawa, Hiroaki Morino, Andrew Morris, Asma Adnane",
      year: "2025年1月",
      link: "https://ieeexplore.ieee.org/document/12345678",
    },
    {
      title: "Poster: Delay-Resilient Cooperative Velocity Control for Mitigating Congestion Based on Machine Learning",
      authors: "Ryota Hachimine, Hiroaki Morino",
      year: "2024年5月",
      link: "https://ieeexplore.ieee.org/document/23456789",
    },
    {
      title: "Wi-FiのCSIを用いたドア開閉動作の個人識別における類似度計算",
      authors: "岩瀬一樹，森野博章",
      year: "2024年3月",
      link: "https://www.ieice.org/ken/paper/20240300c/",
    },
    {
      title: "車両ごとの加速特性を考慮した協調合流制御による事故渋滞の緩和",
      authors: "齋藤航基，森野博章",
      year: "2023年10月",
      link: "https://www.jsae.or.jp/2023autumn/",
    },
    {
      title: "Motion State Recognition Focusing on a Person's Angle of Thigh for supporting evacuation route estimation in disaster relief",
      authors: "Hiroaki Morino, Chisaki Takahashi",
      year: "2021年1月",
      link: "https://myukk.org/SM2021.pdf",
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
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">{publication.title}</h3>
            <p className="text-lg mb-2">著者: {publication.authors}</p>
            <p className="text-sm text-gray-500 mb-4">発表年: {publication.year}</p>
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
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
