'use client';

import { motion } from 'framer-motion';

export default function ClassPage() {
  const classes = [
    {
      title: '移動通信ネットワーク特論',
      level: '大学院後期',
      description: '移動通信ネットワークの高度な理論と応用について学ぶ。',
    },
    {
      title: '情報通信ネットワーク1',
      level: '学部3年前期',
      description: '情報通信ネットワークの基礎とその構成要素について学ぶ。',
    },
    {
      title: '情報理論1',
      level: '学部2年前期',
      description: '情報理論の基本概念とその応用について学ぶ。',
    },
    {
      title: '情報理論2',
      level: '学部2年後期',
      description: '情報理論の応用的なトピックとその実践について学ぶ。',
    },
  ];

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
        <p className="text-lg mt-4 text-gray-100">森野研究室で提供されている講義をご紹介します。</p>
      </motion.div>

      {/* 講義リスト */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {classes.map((cls, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">{cls.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{cls.level}</p>
            <p className="text-lg">{cls.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
