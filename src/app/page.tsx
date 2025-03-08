'use client'

import Education from '@/components/Education'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const MAX_PAGE = 2
  const [currentPage, setCurrentPage] = useState(0)
  const [prevDirection, setPrevDirection] = useState('')

  const togglePageFlip = useCallback((el: HTMLElement) => {
    setAllPagesBack()
    setClickedPageForward(el)
    el.classList.toggle('turn')
  }, [])

  function setAllPagesBack() {
    const pages = document.getElementsByClassName('page')
    for (let i = 0; i < pages.length; i++) {
      pages[i].classList.remove('z-50')
    }
  }

  function setClickedPageForward(el: HTMLElement) {
    el.classList.add('z-50')
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let tempNum = currentPage

      if (event.key === 'ArrowRight' && currentPage != MAX_PAGE) {
        if (tempNum + 1 <= MAX_PAGE && prevDirection != 'left') {
          tempNum += 1
        }
        setPrevDirection('right')

        const pageElement = document.querySelector(`[data-page="${tempNum}"]`) as HTMLDivElement
        togglePageFlip(pageElement)
        setCurrentPage(tempNum)
      } else if (event.key === 'ArrowLeft' && currentPage != 0 && currentPage != 1) {
        if (tempNum - 1 >= 1 && prevDirection != 'right') {
          tempNum -= 1
        }
        setPrevDirection('left')

        const pageElement = document.querySelector(`[data-page="${tempNum}"]`) as HTMLDivElement
        togglePageFlip(pageElement)
        setCurrentPage(tempNum)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentPage, prevDirection, togglePageFlip])

  return (
    <div className="perspective flex h-screen w-screen justify-end">
      <div
        className={styles.dataPage}
        data-page="2"
        tabIndex={0}
        role="button"
        onClick={(event) => togglePageFlip(event.currentTarget)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            setCurrentPage(2)
            togglePageFlip(event.currentTarget) // Right Arrow Key triggers flip
          }
        }}
      >
        <div className={styles.pageFront}>
          <Education />
        </div>
        <div className={styles.pageBack}>Page 4</div>
      </div>

      <div
        className={styles.dataPage}
        data-page="1"
        tabIndex={0}
        role="button"
        onClick={(event) => togglePageFlip(event.currentTarget)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            setCurrentPage(1)
            togglePageFlip(event.currentTarget)
          }
        }}
      >
        <div className={styles.pageFront}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <Image
              src="/DSC00093.jpg"
              alt="Mario Leonardo"
              className="rounded-full object-cover"
              width={1000}
              height={1000}
            />
            <h1 className="text-xl font-bold">Welcome to My Page!</h1>
          </div>
        </div>
        <div className={styles.pageBack}>
          <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-4">
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
        </div>
      </div>
    </div>
  )
}

const styles = {
  dataPage:
    'page absolute duration-1000 flex items-end origin-left w-1/2 transition h-screen transform',
  pageFront:
    'front flex items-center justify-start px-2 sm:px-5 md:px-20 font-bold bg-[#f0e4dc] h-screen right-0 w-full h-full shadow-lg',
  pageBack:
    'back flex items-center justify-start px-2 sm:px-5 md:px-20 bg-[#f0e4dc] h-screen absolute w-full h-full',
}
