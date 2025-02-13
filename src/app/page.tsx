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
        className="m-10 flex min-w-full items-center justify-center border"
      >
        <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-4 border">
          <Image
            src="/DSC00093.jpg"
            alt="Mario Leonardo"
            className="w-3/4 rounded-full object-cover"
            width={1000}
            height={1000}
          />
          <h1 className="text-xl font-bold">Welcome to My Page!</h1>
        </div>
        <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-4 border">
          <h1 className="text-2xl font-bold">Table of Contents</h1>
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/about">Education</Link>
            </li>
            <li>
              <Link href="/about">Academic Projects</Link>
            </li>
            <li>
              <Link href="/about">Skills</Link>
            </li>
            <li>
              <Link href="/about">Work Experience</Link>
            </li>

            <li>
              <Link href="/about">Hobby</Link>
            </li>
            <li>
              <Link href="/about">Contact</Link>
            </li>
            <li>
              <Link href="/about">Resume</Link>
            </li>
            <li>
              <Link href="/about">Goals & Aspiration</Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
