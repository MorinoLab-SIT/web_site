"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Access() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-12 bg-white text-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-4"
      >
        アクセス
      </motion.h1>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-lg overflow-hidden shadow-lg border border-orange-200"
      >
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed/v1/place?q=芝浦工業大学%20豊洲キャンパス&key=YOUR_API_KEY"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-lg shadow-md border border-orange-200"
      >
        <h2 className="text-xl font-semibold mb-2">電車でのアクセス</h2>
        <p className="text-gray-700">
          有楽町線「豊洲駅」1aまたは3番出口から徒歩7分。JR京葉線「越中島駅」2番出口から徒歩15分。
        </p>
      </motion.div>

      {/* Map Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Image
          src="/campus_map.png"
          alt="校内マップ"
          width={600}
          height={400}
          className="mx-auto rounded-md border border-orange-200"
        />
        <p className="mt-4 text-gray-600">研究棟12階の12I32が森野研究室です。</p>
      </motion.div>
    </div>
  );
}
