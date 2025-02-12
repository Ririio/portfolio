'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Home() {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="flex w-1/2 flex-col m-5 justify-center items-center border"
      >
          <Image
            src="/DSC00093.jpg"
            alt="Mario Leonardo"
            className="h-1/2 w-1/2 rounded-full object-cover"
            width={1000}
            height={1000}
          />
          <h1 className="text-xl font-bold">Welcome to My Page!</h1>
          <Link href="/pages">
            <p>Test</p>
          </Link>
      </motion.div>
    </AnimatePresence>
  )
}
