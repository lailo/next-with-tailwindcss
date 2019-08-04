import * as React from 'react'
import { NextPage } from 'next'
import '../styles/main.css'

interface Props {
  userAgent?: string
}

const Page: NextPage<Props> = ({ userAgent }) => {
  return (
    <main className="h-screen bg-green-700 py-16 px-8">
      <h1 className="text-white text-center text-4xl uppercase font-black mb-8">
        Your user agent
      </h1>
      <h2 className="text-white text-center m-w-50">{userAgent}</h2>
    </main>
  )
}

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Page
