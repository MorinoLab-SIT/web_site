"use client";

import { motion } from "framer-motion";

const awards = [
  {
    year: "2024年度",
    items: [
      {
        title: "情報処理学会ITS研究会優秀発表賞",
        recipient: "石川華帆",
      },
    ],
  },
  {
    year: "2023年度",
    items: [
      {
        title: "芝浦工業大学古田賞",
        recipient: "乙戸慎太郎",
      },
    ],
  },
  {
    year: "2019年度",
    items: [
      {
        title: "芝浦工業大学有元史郎記念賞",
        recipient: "島田和樹",
      },
      {
        title: "電子情報通信学会 MIKA2019 若手部門 優秀ポスター賞",
        recipient: "澁谷祐輝",
      },
    ],
  },
  {
    year: "2018年度",
    items: [
      {
        title: "ICEIC 2019 Best Paper Award Bronze Prize",
        recipient: "森野博章",
      },
    ],
  },
  {
    year: "2017年度",
    items: [
      {
        title: "芝浦工業大学古田賞",
        recipient: "池田彪牙",
      },
      {
        title: "電子情報通信学会東京支部学生会学生奨励賞",
        recipient: "渡邊拓哉",
      },
      {
        title: "電子情報通信学会MoNA研究会優秀発表賞",
        recipient: "川西将輝",
      },
      {
        title: "電子情報通信学会MoNA研究会若手研究奨励賞",
        recipient: "川西将輝",
      },
      {
        title: "電子情報通信学会MoNA研究会若手研究奨励賞",
        recipient: "西坂柾紀",
      },
    ],
  },
  {
    year: "2016年度",
    items: [
      {
        title: "芝浦工業大学教育賞",
        recipient: "森野博章",
      },
      {
        title: "芝浦工業大学古田賞",
        recipient: "穂積真衣子",
      },
    ],
  },
  {
    year: "2014年度",
    items: [
      {
        title: "芝浦工業大学梅本魁記念賞（「江戸っ子1号の開発」）",
        recipient: "森野博章",
      },
      {
        title: "電子情報通信学会ASN研究会若手研究奨励賞",
        recipient: "稲船喬志",
      },
      {
        title: "芝浦工業大学工学部通信工学科総代",
        recipient: "磯崎隆徳",
      },
      {
        title: "芝浦工業大学有元史郎記念賞",
        recipient: "飯島敬浩",
      },
    ],
  },
  {
    year: "2013年度",
    items: [
      {
        title: "国際会議 IS-CANDAR Best paper award",
        recipient: "森野博章",
      },
      {
        title: "情報処理学会MBL研究会優秀発表賞",
        recipient: "高木俊彰",
      },
    ],
  },
  {
    year: "2012年度",
    items: [
      {
        title: "電子情報通信学会MoMuC研究会若手研究奨励賞",
        recipient: "大西辰弥",
      },
    ],
  },
  {
    year: "2011年度",
    items: [
      {
        title: "電子情報通信学会MoMuC研究会若手研究奨励賞",
        recipient: "青柳雄一",
      },
    ],
  },
  {
    year: "2010年度",
    items: [
      {
        title: "芝浦工業大学古田賞",
        recipient: "大塚まゆみ",
      },
    ],
  },
];

export default function Awards() {
  return (
    <div className="min-h-screen pt-[110px] bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-600 text-white p-8">
      {/* タイトル */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">受賞歴</h1>
        <p className="text-lg text-gray-600">過去の受賞内容と功績をご紹介します。</p>
      </motion.div>

      {/* 受賞リスト */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="space-y-12"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white text-gray-900 p-6 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl font-bold text-teal-600 mb-4">{award.year}</h2>
            <ul className="space-y-4">
              {award.items.map((item, idx) => (
                <li key={idx} className="border-l-4 border-teal-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{item.recipient}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}