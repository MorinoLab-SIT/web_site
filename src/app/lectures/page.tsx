"use client";

import { motion } from "framer-motion";

export default function ClassPage() {
  const classes = [
    {
      title: "移動通信ネットワーク特論",
      level: "大学院後期",
      description: "移動通信ネットワークの高度な理論と応用について学ぶ。",
    },
    {
      title: "情報通信ネットワーク1",
      level: "学部3年前期",
      description: "情報通信ネットワークの基礎とその構成要素について学ぶ。",
    },
    {
      title: "情報理論1",
      level: "学部2年前期",
      description: "情報理論の基本概念とその応用について学ぶ。",
    },
    {
      title: "情報理論2",
      level: "学部2年後期",
      description: "情報理論の応用的なトピックとその実践について学ぶ。",
    },
  ];

  return (
    <div className="min-h-screen pt-[110px] bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white p-8">
      {/* タイトル */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">講義内容</h1>
        <p className="text-lg text-gray-600">
          森野研究室で提供されている講義をご紹介します。
        </p>
      </motion.div>

      {/* 講義リスト */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4"
      >
        {classes.map((cls, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white border-l-4 border-purple-500 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
              {cls.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{cls.level}</p>
            <p className="text-base text-gray-800 leading-relaxed">
              {cls.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
