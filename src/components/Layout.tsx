import * as React from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import AppHeader from './AppHeader'

export interface Props {
  title?: string
  className?: string | Record<string, unknown>
}

const Layout: React.FC<Props> = ({
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
        <AppHeader />
        <main className={clsx('flex-grow', className)}>{children}</main>
        <footer className="text-xs text-center text-gray-600 py-4 px-3">
          Made with ♥ by{' '}
          <a href="https://www.twitter.com/lailo_ch">@lailo_ch</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
