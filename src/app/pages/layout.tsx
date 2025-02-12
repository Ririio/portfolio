'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="origin-center shadow-xl"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
