import * as React from 'react'
import cn from 'classnames'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const ThemeSwitch = dynamic(() => import('./ThemeSwitch'), { ssr: false })

interface LayoutProps {
  title?: string
  className?: string | object
}

const Layout: React.FC<LayoutProps> = ({
  title = 'NextJS with TypeScript and TailwindCSS',
  className,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 py-2 px-3 flex items-center sticky top-0">
          <h1 className="flex-grow text-xl font-black text-black dark:text-white dark:hover:text-black">
            Your Awesome App
          </h1>
          <ThemeSwitch />
        </header>
        <main className={cn('flex-grow', className)}>{children}</main>
        <footer className="text-xs text-center text-gray-600 py-4 px-3">
          Made with ♥️ by{' '}
          <a href="https://www.twitter.com/lailo_ch">@lailo_ch</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
