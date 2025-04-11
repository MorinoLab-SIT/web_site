"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const faculty = [
  {
    name: "森野 博章",
    role: "教授",
    img: "/members/morino.jpg",
  },
];

const graduateStudents = [
  {
    name: "今村 就",
    role: "M2",
    research:
      "Vehicle crowdsensing による道路状況監視の参加インセンティブ設計",
  },
  {
    name: "佐々木 敦史",
    role: "M2",
    research: "WiFi CSI を用いたドア開閉動作時の個人識別",
  },
  {
    name: "乙戸 慎太郎",
    role: "M2",
    research:
      "デスクワーク環境下で俯瞰的に撮影して得られる3次元点群を用いた人の着座姿勢判別",
  },
  {
    name: "石田 竜太",
    role: "M2",
    research:
      "複数の3次元LiDARを用いた歩道上の前方不注意歩行者の検出",
  },
  {
    name: "佐藤 衡平",
    role: "M2",
    research:
      "ブロックチェーン上でのペイメントチャネルネットワークにおける低遅延と秘匿性を両立させるチャネル容量通知法",
  },
  {
    name: "磯谷 敦",
    role: "M1",
    research:
      "3次元点群データにおけるフレーム間差分情報のリアルタイム検出",
  },
  {
    name: "坂井 日向",
    role: "M1",
    research:
      "少数のLiDARで人流を俯瞰的に撮影して得られるデータからの人数推定",
  },
  {
    name: "田上 稜偉",
    role: "M1",
    research: "3次元点群データに付加する電子透かしの攻撃耐性向上法",
  },
];

const undergraduateStudents = [
  {
    name: "池延 一輝",
    role: "B4",
    research: "3次元点群データに付加する電子透かしの攻撃耐性評価",
  },
  {
    name: "奥田 真治",
    role: "B4",
    research: "Vehicle crowdsensing による道路状況監視における参加報酬の最適化",
  },
  {
    name: "鈴木 敬達",
    role: "B4",
    research: "3次元点群における曲率を用いた人の抽出と行動判別",
  },
  {
    name: "静 拓実",
    role: "B4",
    research:
      "高速道路渋滞緩和のためのV2Xを用いた協調車速制御における強化学習の導入",
  },
  {
    name: "青栁 真佳",
    role: "B4",
    research: "3次元点群を用いた集団の人数推定",
  },
  {
    name: "伊藤 彰宏",
    role: "B4",
    research:
      "ブロックチェーン上でのペイメントチャネルネットワークへの攻撃耐性評価",
  },
  {
    name: "川村 大志",
    role: "B4",
    research: "短時間交通流予測による高速道路渋滞の早期検出の精度向上",
  },
  {
    name: "小林 瑞宜",
    role: "B4",
    research: "少数のLiDARで俯瞰的に撮影した人流の人数推定",
  },
  {
    name: "今野 智耀",
    role: "B4",
    research:
      "短時間交通流予測に基づく高速道路渋滞の早期検出において入力系列選択が予測精度に与える影響の評価",
  },
  {
    name: "塩川 瑞己",
    role: "B4",
    research: "3次元点群を用いた人の姿勢判別",
  },
  {
    name: "塚田 涼介",
    role: "B4",
    research:
      "高速道路渋滞緩和のためのV2Xベース協調車速制御における短時間交通流予測を用いた制御開始時刻決定法の評価",
  },
  {
    name: "牧野 光希",
    role: "B4",
    research:
      "ブロックチェーンのペイメントチャネルネットワークにおける送金確定遅延低減のためのチャネルグループ形成法",
  },
];

export default function Members() {
  const renderMembers = (
    title: string,
    members: { name: string; role: string; research?: string; img?: string }[],
    showImage: boolean
  ) => (
    <section className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow-xl mb-12">
      <h2 className="text-2xl font-bold text-lime-600 mb-6 border-l-4 border-lime-400 pl-4">{title}</h2>
      <div className="space-y-6">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="flex items-start space-x-4"
          >
            {showImage && member.img && (
              <Image
                src={member.img}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 underline decoration-lime-400 decoration-2 underline-offset-4">
                {member.name} <span className="text-sm text-gray-500">({member.role})</span>
              </h3>
              {"research" in member && (
                <p className="text-sm text-gray-800 mt-1">{member.research}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="space-y-16 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">メンバー紹介</h1>
        <p className="text-lg text-gray-600">私たちのチームをご紹介します！</p>
      </motion.div>

      {renderMembers("教員", faculty, true)}
      {renderMembers("大学院生", graduateStudents, false)}
      {renderMembers("学部生", undergraduateStudents, false)}
    </div>
  );
}