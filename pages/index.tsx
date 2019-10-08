import * as React from 'react'
import { NextPage } from 'next'
import Button from '../components/Button'
import ButtonSimple from '../components/ButtonSimple'
import '../styles/main.css'

interface Props {
  userAgent?: string
}

const Page: NextPage<Props> = ({ userAgent }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-200 py-16 px-8">
      <header>
        <h1 className="text-center text-3xl font-black mb-4">
          NextJS with TypeScript
          <br />
          and TailwindCSS
        </h1>
      </header>
      <main className="flex-grow flex flex-col items-center my-10">
        <div className="mt-5 p-4 shadow hover:shadow-xl inline-block">
          <h2 className="m-w-50 mb-4">Button</h2>
          <Button className="mr-4">Primary (Default)</Button>
          <Button className={{ 'mr-4': true }} type="secondary">
            Secondary
          </Button>
          <Button className="mr-4" loading>
            Create
          </Button>
          <Button disabled>Secondary</Button>
        </div>
        <div className="mt-5 p-4 shadow hover:shadow-xl inline-block">
          <h2 className="m-w-50 mb-4">Simple Button</h2>
          <ButtonSimple className="mr-4">Primary (Default)</ButtonSimple>
          <ButtonSimple className={{ 'mr-4': true }} type="secondary">
            Secondary
          </ButtonSimple>
          <ButtonSimple className="mr-4" loading>
            Create
          </ButtonSimple>
          <ButtonSimple disabled>Secondary</ButtonSimple>
        </div>
      </main>
      <footer className="text-xs text-center text-gray-600">{userAgent}</footer>
    </div>
  )
}

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Page
