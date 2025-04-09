'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { name: 'トップ', href: '/', color: 'bg-gradient-to-r from-blue-500 to-teal-400' },
  { name: 'アクセス', href: '/access', color: 'bg-gradient-to-r from-red-500 to-orange-400' },
  { name: 'メンバー', href: '/members', color: 'bg-gradient-to-r from-green-500 to-lime-400' },
  { name: '研究内容', href: '/research', color: 'bg-gradient-to-r from-yellow-500 to-amber-400' },
  { name: '論文', href: '/publications', color: 'bg-gradient-to-r from-orange-500 to-red-400' },
  { name: '講義', href: '/lectures', color: 'bg-gradient-to-r from-purple-500 to-indigo-400' },
  { name: '受賞', href: '/awards', color: 'bg-gradient-to-r from-pink-500 to-purple-400' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md">
      <motion.nav
        className="flex justify-center space-x-6 text-sm font-medium py-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {links.map((link) => (
          <div key={link.href} className="flex flex-col items-center relative">
            <Link
              href={link.href}
              className={`transition-all duration-300 text-gray-700 ${
                pathname === link.href ? 'font-bold text-blue-800' : ''
              } hover:scale-110 hover:text-gray-700 hover:shadow-lg p-1 rounded-md`}
            >
              {link.name}
            </Link>
            <motion.div
              className={`w-full h-1 mt-1 rounded-full transition-all duration-500 ${
                pathname === link.href ? link.color : 'bg-transparent'
              }`}
              layoutId="underline"
            />
          </div>
        ))}
      </motion.nav>
    </header>
  );
}
