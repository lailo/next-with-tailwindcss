import * as React from 'react'
import { NextPage } from 'next'
import Button from '../components/Button'
import '../styles/main.css'

interface Props {
  userAgent?: string
}

const Page: NextPage<Props> = ({ userAgent }) => {
  return (
    <main className="text-center  h-screen bg-gray-200 py-16 px-8">
      <h1 className="text-4xl uppercase font-black mb-8">Your user agent</h1>
      <h2 className="m-w-50 mb-4">{userAgent}</h2>
      <Button className="mr-4">Primary (Default)</Button>
      <Button className={{ 'mr-4': true }} type="secondary">
        Secondary
      </Button>
      <Button className="mr-4" loading>
        Create
      </Button>
      <Button disabled>Secondary</Button>
    </main>
  )
}

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Page
