'use client';

import { motion } from 'framer-motion';

export default function ClassPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white p-8">
      {/* タイトル */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          講義内容
        </h1>
        <p className="text-lg mt-4 text-gray-100">最新の講義と学習内容を紹介します。</p>
      </motion.div>

      {/* 講義リスト */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* 講義カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">コンピュータネットワーク</h3>
          <p className="text-lg mb-4">ネットワークの基礎から応用までを学び、インターネットの仕組みを理解します。</p>
          <ul className="text-sm text-gray-700">
            <li>プロトコルと通信方式</li>
            <li>IPアドレッシングとルーティング</li>
            <li>ネットワークセキュリティ</li>
          </ul>
        </motion.div>

        {/* 講義カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">ロボティクス</h3>
          <p className="text-lg mb-4">ロボットの制御技術と自律動作に関する講義です。</p>
          <ul className="text-sm text-gray-700">
            <li>センサーと制御アルゴリズム</li>
            <li>自律移動ロボット</li>
            <li>ロボットシステムの設計</li>
          </ul>
        </motion.div>

        {/* 講義カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">人工知能</h3>
          <p className="text-lg mb-4">人工知能の基本概念から応用までを学びます。</p>
          <ul className="text-sm text-gray-700">
            <li>機械学習と深層学習</li>
            <li>AIアルゴリズムの設計</li>
            <li>AIを用いた問題解決法</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
