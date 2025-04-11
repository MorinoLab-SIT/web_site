'use client';

import { motion } from 'framer-motion';

export default function Awards() {
  return (
    <div className="min-h-screen pt-[110px] bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-600 text-white p-8">
      {/* タイトル */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          受賞歴
        </h1>
        <p className="text-lg mt-4 text-gray-100">過去の受賞内容と功績をご紹介します。</p>
      </motion.div>

      {/* 受賞リスト */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* 受賞カード */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:rotate-3 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">学会発表賞</h3>
          <p className="text-lg mb-4">2024年12月、○○学会にて発表した研究が最優秀発表賞を受賞しました。</p>
          <span className="text-sm text-gray-500">2024年12月</span>
        </motion.div>

        {/* 受賞カード */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:rotate-3 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">学内表彰</h3>
          <p className="text-lg mb-4">2024年10月、学内の優れた研究に対して表彰を受けました。</p>
          <span className="text-sm text-gray-500">2024年10月</span>
        </motion.div>

        {/* 受賞カード */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:rotate-3 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">技術革新賞</h3>
          <p className="text-lg mb-4">2024年9月、技術革新の分野での貢献により、革新賞を受賞しました。</p>
          <span className="text-sm text-gray-500">2024年9月</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
