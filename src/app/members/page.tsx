'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const faculty = [
  {
    name: '森野 博章',
    role: '教授',
    img: '/members/morino.jpg',
  },
];

const graduateStudents = [
  {
    name: '今村 就',
    role: 'M2',
    research: 'Vehicle crowdsensing による道路状況監視の参加インセンティブ設計',
    img: '/members/imamura.jpg',
  },
  {
    name: '佐々木 敦史',
    role: 'M2',
    research: 'WiFi CSI を用いたドア開閉動作時の個人識別',
    img: '/members/sasaki.jpg',
  },
  {
    name: '乙戸 慎太郎',
    role: 'M2',
    research: 'デスクワーク環境下で俯瞰的に撮影して得られる3次元点群を用いた人の着座姿勢判別',
    img: '/members/otodo.jpg',
  },
  {
    name: '石田 竜太',
    role: 'M2',
    research: '複数の3次元LiDARを用いた歩道上の前方不注意歩行者の検出',
    img: '/members/ishida.jpg',
  },
  {
    name: '佐藤 衡平',
    role: 'M2',
    research: 'ブロックチェーン上でのペイメントチャネルネットワークにおける低遅延と秘匿性を両立させるチャネル容量通知法',
    img: '/members/sato.jpg',
  },
  {
    name: '磯谷 敦',
    role: 'M1',
    research: '3次元点群データにおけるフレーム間差分情報のリアルタイム検出',
    img: '/members/isoya.jpg',
  },
  {
    name: '坂井 日向',
    role: 'M1',
    research: '少数のLiDARで人流を俯瞰的に撮影して得られるデータからの人数推定',
    img: '/members/sakai.jpg',
  },
  {
    name: '田上 稜偉',
    role: 'M1',
    research: '3次元点群データに付加する電子透かしの攻撃耐性向上法',
    img: '/members/tagami.jpg',
  },
];

const undergraduateStudents = [
  {
    name: '池延 一輝',
    role: 'B4',
    research: '3次元点群データに付加する電子透かしの攻撃耐性評価',
    img: '/members/ikenobe.jpg',
  },
  {
    name: '奥田 真治',
    role: 'B4',
    research: 'Vehicle crowdsensing による道路状況監視における参加報酬の最適化',
    img: '/members/okuda.jpg',
  },
  {
    name: '鈴木 敬達',
    role: 'B4',
    research: '3次元点群における曲率を用いた人の抽出と行動判別',
    img: '/members/suzuki.jpg',
  },
  {
    name: '静 拓実',
    role: 'B4',
    research: '高速道路渋滞緩和のためのV2Xを用いた協調車速制御における強化学習の導入',
    img: '/members/shizu.jpg',
  },
  {
    name: '青栁 真佳',
    role: 'B4',
    research: '3次元点群を用いた集団の人数推定',
    img: '/members/aoyagi.jpg',
  },
  {
    name: '伊藤 彰宏',
    role: 'B4',
    research: 'ブロックチェーン上でのペイメントチャネルネットワークへの攻撃耐性評価',
    img: '/members/ito.jpg',
  },
  {
    name: '川村 大志',
    role: 'B4',
    research: '短時間交通流予測による高速道路渋滞の早期検出の精度向上',
    img: '/members/kawamura.jpg',
  },
  {
    name: '小林 瑞宜',
    role: 'B4',
    research: '少数のLiDARで俯瞰的に撮影した人流の人数推定',
    img: '/members/kobayashi.jpg',
  },
  {
    name: '今野 智耀',
    role: 'B4',
    research: '短時間交通流予測に基づく高速道路渋滞の早期検出において入力系列選択が予測精度に与える影響の評価',
    img: '/members/konno.jpg',
  },
  {
    name: '塩川 瑞己',
    role: 'B4',
    research: '3次元点群を用いた人の姿勢判別',
    img: '/members/shiokawa.jpg',
  },
  {
    name: '塚田 涼介',
    role: 'B4',
    research: '高速道路渋滞緩和のためのV2Xベース協調車速制御における短時間交通流予測を用いた制御開始時刻決定法の評価',
    img: '/members/tsukada.jpg',
  },
  {
    name: '牧野 光希',
    role: 'B4',
    research: 'ブロックチェーンのペイメントチャネルネットワークにおける送金確定遅延低減のためのチャネルグループ形成法',
    img: '/members/makino.jpg',
  },
];

export default function Members() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16"
      >
        <h1 className="text-4xl font-bold text-white mb-8">メンバー紹介</h1>
        <p className="text-lg text-white">私たちのチームをご紹介します！</p>
      </motion.div>

      {/* 教員 */}
      <section className="px-8 pb-12">
        <h2 className="text-2xl font-bold text-white mb-6">教員</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-xl w-72 text-center"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mb-4 mx-auto object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-lg text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 大学院生 */}
      <section className="px-8 pb-12">
        <h2 className="text-2xl font-bold text-white mb-6">大学院生</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {graduateStudents.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-xl w-72 text-center"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mb-4 mx-auto object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500">{member.research}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 学部生 */}
      <section className="px-8 pb-20">
        <h2 className="text-2xl font-bold text-white mb-6">学部生</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {undergraduateStudents.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-xl w-72 text-center"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mb-4 mx-auto object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500">{member.research}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

