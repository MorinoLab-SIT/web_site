'use client';

import { motion } from 'framer-motion';

export default function Access() {
  return (
    <div className="p-6 space-y-6 pt-[100px] bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-500">
      {/* アクセスマップ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <iframe
          className="w-full max-w-3xl h-96 rounded-lg border-4 border-pink-500 shadow-2xl"
          src="https://www.google.com/maps/embed/v1/place?q=Shibaura%20Institute%20of%20Technology&key=YOUR_GOOGLE_MAP_API_KEY"
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
              最寄り駅は「芝浦工業大学前駅」で、徒歩5分です。大崎駅からはJR線で10分程度です。
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-black">バスでのアクセス</h3>
            <p className="text-black">
              大崎駅西口から、芝浦工業大学行きのバスが毎日運行しています。
            </p>
          </li>
        </ul>
      </motion.div>

      {/* お問い合わせ情報 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-3xl mx-auto p-6 mt-10 rounded-xl shadow-lg border-4 border-indigo-500"
      >
        <h3 className="text-2xl font-bold text-center text-black mb-4">
          お問い合わせ
        </h3>
        <p className="text-black text-lg">
          住所：東京都港区芝浦3-7-5<br />
          電話番号：03-1234-5678<br />
          メールアドレス：info@shibaura-it.ac.jp
        </p>
      </motion.div>
    </div>
  );
}
