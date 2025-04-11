"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Access() {
  return (
    <div className="p-6 space-y-6 pt-[100px] bg-white text-black">
      {/* アクセスマップ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-4 border-l-4 border-orange-500 pl-4"
      >
        アクセス
      </motion.div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-lg overflow-hidden shadow-md border border-orange-300"
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
        className="bg-white p-6 rounded-lg shadow-md border border-orange-300"
      >
        <h2 className="text-xl font-semibold mb-2 border-l-4 border-orange-500 pl-3">電車でのアクセス</h2>
        <p className="text-gray-800">
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
          className="mx-auto rounded-md border border-orange-300"
        />
        <p className="mt-4 text-gray-800">研究棟12階の12I32が森野研究室です。</p>
      </motion.div>
    </div>
  );
}
