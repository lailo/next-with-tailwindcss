import * as React from 'react'
import { NextPage } from 'next'
import Button from '../components/Button'
import ThemeSwitch from '../components/ThemeSwitch'
import '../styles/main.css'

interface Props {
  userAgent?: string
}

const Page: NextPage<Props> = ({ userAgent }) => {
  return (
    <div className="bg-gray-200">
      <div className="min-h-screen container py-8 max-w-xl flex flex-col ">
        <header>
          <h1 className="text-center text-3xl font-black text-black mb-4">
            NextJS with TypeScript and TailwindCSS
          </h1>
          <div className="text-center">
            <ThemeSwitch />
          </div>
        </header>
        <main className="flex-grow flex justify-center items-center my-10">
          <Button className="m-1">Primary</Button>
          <Button className="m-1" type="secondary">
            Secondary
          </Button>
          <Button className="m-1" disabled>
            Disabled
          </Button>
          <Button className="m-1" loading>
            Loading
          </Button>
        </main>
        <footer className="text-xs text-center text-gray-600">
          {userAgent}
        </footer>
      </div>
    </div>
  )
}

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Page