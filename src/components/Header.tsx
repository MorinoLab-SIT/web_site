'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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
    <header className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <motion.nav
        className="flex flex-wrap justify-center space-x-3 sm:space-x-6 text-sm sm:text-base font-semibold py-3 sm:py-5 px-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {links.map((link) => (
          <div
            key={link.href}
            className="flex flex-col items-center relative group"
          >
            <Link
              href={link.href}
              className={`transition-all duration-300 text-gray-700 ${
                pathname === link.href ? 'font-bold text-blue-800' : ''
              } hover:scale-105 hover:text-gray-700 px-2 py-1 rounded-md`}
            >
              {link.name}
            </Link>

            {/* 下線 */}
            <div className="relative w-full h-1 mt-1">
              <motion.div
                layoutId="underline"
                className={`absolute inset-0 rounded-full ${
                  pathname === link.href ? link.color : 'opacity-0'
                }`}
                transition={{ duration: 0.4 }}
              />
              {/* ホバー下線 */}
              {pathname !== link.href && (
                <div
                  className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${link.color}`}
                />
              )}
            </div>
          </div>
        ))}
      </motion.nav>
    </header>
  );
}
