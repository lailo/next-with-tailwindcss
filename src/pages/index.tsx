import * as React from 'react'
import { NextPage } from 'next'
import Layout from '@components/layout/Layout'
import routes from '@utils/routes'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Your Awesome App" className="container py-8 max-w-xl">
      <h1 className="dark:text-gray-100 text-3xl font-black mb-4">Welcome</h1>
      <p className="mb-4">
        This is an template project using NextJS with TailwindCSS including dark
        mode switcher.
      </p>
      <p className="mb-6">
        It includes some example components with jest testing and typography but
        it's not complete nor is it tested well.
      </p>
      <div className="space-x-4">
        <Link {...routes.COMPONENTS}>
          <a className="bg-green-700 text-white px-4 py-2" title="components">
            Components <FiArrowRight className="inline ml-1" />
          </a>
        </Link>
        <Link {...routes.TYPOGRAPHY}>
          <a className="bg-blue-700 text-white px-4 py-2" title="Typography">
            Typography <FiArrowRight className="inline ml-1" />
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
