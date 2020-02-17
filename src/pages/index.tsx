import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Input from '../components/Input'
import { FiMail, FiUser } from 'react-icons/fi'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Your Awesome App" className="container py-8 max-w-xl">
      <h1 className="dark:text-gray-100 text-3xl font-black mb-5">
        Components
      </h1>
      <section className="mb-8">
        <h2 className="dark:text-gray-100 text-2xl font-extrabold mb-3">
          Buttons
        </h2>
        <div>
          <Button className="mr-1">Primary</Button>
          <Button className="mr-1" type="secondary">
            Secondary
          </Button>
          <Button className="mr-1" disabled>
            Disabled
          </Button>
          <Button className="mr-1" loading>
            Loading
          </Button>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="dark:text-gray-100 text-2xl font-extrabold mb-3">
          Inputs
        </h2>
        <p className="text-xl"></p>
        <Input placeholder="username" startIcon={FiUser} className="mb-4" />
        <Input placeholder="email" startIcon={FiMail} className="mb-4" />
        <Input placeholder="without icon" className="mb-4" />
        <Input placeholder="disabled" disabled className="mb-4" />
        <Input
          value="with error"
          startIcon={FiMail}
          hasError
          className="mb-4"
        />
        <Input
          placeholder="lailo-ch"
          label="Username"
          className="mb-4"
          startIcon={FiUser}
        />
      </section>
    </Layout>
  )
}

export default IndexPage
