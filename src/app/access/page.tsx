'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Access() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-500">
      {/* アクセスマップ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <iframe
          className="w-full max-w-3xl h-96 rounded-lg border-4 border-pink-500 shadow-2xl"
          src="https://www.google.com/maps/embed/v1/place?q=芝浦工業大学%20豊洲キャンパス&key=YOUR_GOOGLE_MAP_API_KEY"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* アクセス詳細 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow-lg border-4 border-yellow-500"
      >
        <h2 className="text-3xl font-bold text-center text-black mb-4">
          アクセス方法
        </h2>
        <ul className="space-y-4 text-gray-800 text-lg">
          <li>
            <h3 className="font-semibold text-black">電車でのアクセス</h3>
            <p className="text-black">
              有楽町線「豊洲駅」1aまたは3番出口から徒歩7分。
              JR京葉線「越中島駅」2番出口から徒歩15分。
            </p>
          </li>
        </ul>
      </motion.div>

      {/* 校内マップ */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-3xl mx-auto p-6 mt-10 rounded-xl shadow-lg border-4 border-indigo-500"
      >
        <h3 className="text-2xl font-bold text-center text-black mb-4">
          校内マップ
        </h3>
        <div className="flex justify-center">
          <Image
            src="/campus_map.png"
            alt="校内マップ"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <p className="text-black text-lg mt-4 text-center">
          森野研究室は研究棟12階の「12I32」です。
        </p>
      </motion.div>

      {/* お問い合わせ情報 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-3xl mx-auto p-6 mt-10 rounded-xl shadow-lg border-4 border-green-500"
      >
        <h3 className="text-2xl font-bold text-center text-black mb-4">
          お問い合わせ
        </h3>
        <p className="text-black text-lg text-center">
          名称：芝浦工業大学工学部情報・通信工学課程 森野博章研究室<br />
          住所：東京都江東区豊洲3-7-5 研究棟12階 12-I-32号室<br />
          電話番号：03-5859-8254<br />
          FAX：03-5859-8254
        </p>
      </motion.div>
    </div>
  );
}
