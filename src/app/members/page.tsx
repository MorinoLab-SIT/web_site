'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const members = [
  { name: 'メンバーA', role: '役職', img: '/member_a.jpg' },
  { name: 'メンバーB', role: '役職', img: '/member_b.jpg' },
  { name: 'メンバーC', role: '役職', img: '/member_c.jpg' },
  { name: 'メンバーD', role: '役職', img: '/member_d.jpg' },
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

      <div className="flex flex-wrap justify-center gap-8 p-8">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-xl w-72 text-center"
          >
            <Image
              src={member.img}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-full mb-4 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-lg text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
