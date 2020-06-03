import * as React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ThemeSwitch = dynamic(() => import('./ThemeSwitch'), { ssr: false })

export interface Props {
  className?: string | Record<string, unknown>
}

const AppHeader: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={clsx(
        'bg-white dark:bg-gray-800 py-2 px-3 flex items-center sticky top-0',
        className
      )}
    >
      <div className="mr-auto flex items-center">
        <Link href="/">
          <a
            href="/"
            className="flex-grow text-xl font-black text-black dark:text-white dark:hover:text-black"
          >
            My Project
          </a>
        </Link>
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default AppHeader
