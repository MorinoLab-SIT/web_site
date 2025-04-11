"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16 pt-[80px]" >
      {/* メインビジュアル */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-lg max-w-3xl mx-auto text-center p-10 mt-12 rounded-2xl shadow-2xl"
      >
        <Image
          src="/lab-group2023.png"
          alt="森野研究室ロゴ"
          width={700}
          height={700}
          className="mx-auto mb-6 rounded-md"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
          移動通信ネットワーク研究室
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-gray-700">
          森野研究室 Morino Laboratory
        </h2>
      </motion.div>

      {/* おしらせ */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-700">おしらせ</h3>
        <ul className="space-y-2 text-gray-800 text-base">
          <li>2024/12/12 - ○○さんが〇〇学会で発表しました。</li>
          <li>2024/10/01 - 森野研のゼミ合宿を開催しました。</li>
          <li>2024/09/15 - ○○君が○○賞を受賞しました。</li>
        </ul>
      </motion.div>

      {/* 更新履歴 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-4 text-green-700">更新履歴</h3>
        <ul className="space-y-2 text-gray-800 text-base">
          <li>2025/04/09 - WebサイトをNext.jsでリニューアルしました。</li>
          <li>2024/11/01 - メンバーページを更新しました。</li>
          <li>2024/09/10 - 卒業研究テーマを追加しました。</li>
        </ul>
      </motion.div>

      {/* 関連リンク */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-3xl mx-auto p-6 mb-20 rounded-xl shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-4 text-purple-700">関連リンク</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.shibaura-it.ac.jp/"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            芝浦工業大学
          </a>
          <a
            href="https://www.shibaura-it.ac.jp/faculty/engineering/information_science.html"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            情報工学科
          </a>
          <a
            href="https://www.shibaura-it.ac.jp/graduate/information/"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            大学院 情報工学専攻
          </a>
        </div>
      </motion.div>
    </div>
  );
}