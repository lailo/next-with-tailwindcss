import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Button from '../components/Button'

interface IndexPageProps {
  userAgent?: string
}

const IndexPage: NextPage<IndexPageProps> = ({ userAgent }) => {
  return (
    <Layout title="Your Awesome App" className="container py-8 max-w-xl">
      <p className="py-5 text-black dark:text-white">{userAgent}</p>
      <div>
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
      </div>
    </Layout>
  )
}

IndexPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default IndexPage
