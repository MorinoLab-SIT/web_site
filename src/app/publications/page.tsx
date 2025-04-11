"use client";

import { motion } from "framer-motion";

export default function Publications() {
  const publications = [
    {
      title: "ペイメントチャネルネットワークにおける送金の秘匿を考慮した中継経路決定手法",
      authors: "佐藤衡平，森野博章",
      year: "2025年3月掲載予定",
      link: "https://www.ieice.org/ken/paper/20250300b/",
    },
    {
      title:
        "Reward Design in Vehicular Crowdsensing Focused on Improving Time-Efficiency of Sensing",
      authors: "Kaho Ishikawa, Hiroaki Morino, Andrew Morris, Asma Adnane",
      year: "2025年1月",
      link: "https://ieeexplore.ieee.org/document/12345678",
    },
    {
      title:
        "Poster: Delay-Resilient Cooperative Velocity Control for Mitigating Congestion Based on Machine Learning",
      authors: "Ryota Hachimine, Hiroaki Morino",
      year: "2024年5月",
      link: "https://ieeexplore.ieee.org/document/23456789",
    },
    {
      title:
        "Wi-FiのCSIを用いたドア開閉動作の個人識別における類似度計算",
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
      title:
        "Motion State Recognition Focusing on a Person's Angle of Thigh for supporting evacuation route estimation in disaster relief",
      authors: "Hiroaki Morino, Chisaki Takahashi",
      year: "2021年1月",
      link: "https://myukk.org/SM2021.pdf",
    },
  ];

  return (
    <div className="min-h-screen pt-[110px] bg-white text-white p-8">
      {/* タイトル */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">論文一覧</h1>
        <p className="text-lg text-gray-600">
          私たちの最新の研究成果をご紹介します。
        </p>
      </motion.div>

      {/* 論文リスト */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="space-y-8 max-w-3xl mx-auto"
      >
        {publications.map((publication, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {publication.title}
            </h3>
            <p className="text-sm text-gray-700 mb-1">著者: {publication.authors}</p>
            <p className="text-sm text-gray-500 mb-2">発表年: {publication.year}</p>
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-orange-600 hover:underline font-medium"
            >
              詳細はこちら
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
