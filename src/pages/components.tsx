import * as React from 'react'
import { NextPage } from 'next'
import { FiMail, FiLock, FiUser, FiMoreHorizontal } from 'react-icons/fi'
import Layout from '@components/layout/Layout'
import Button from '@components/Button'
import Input from '@components/Input'
import Text from '@components/Text'
import List from '@components/List'
import Card from '@components/Card'
import Dropdown from '@components/Dropdown'

const ComponentsPage: NextPage = () => {
  return (
    <Layout title="Components" className="container py-8 max-w-xl">
      <section className="mb-20">
        <h2 className="dark:text-gray-100 text-2xl font-thin mb-6">Buttons</h2>
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

      <section className="mb-20">
        <h2 className="dark:text-gray-100 text-2xl font-thin mb-6">Inputs</h2>
        <Input placeholder="username" startIcon={FiUser} className="mb-4" />
        <Input placeholder="email" startIcon={FiMail} className="mb-4" />
        <Input placeholder="without icon" className="mb-4" />
        <Input placeholder="disabled" disabled className="mb-4" />
        <Input
          defaultValue="with error"
          startIcon={FiMail}
          errorMessage="Email is not correct"
          className="mb-4"
        />
        <Input
          placeholder="lailo-ch"
          label="Username"
          className="mb-4"
          startIcon={FiUser}
        />
        <Input
          placeholder="lailo-ch"
          label="With Help"
          className="mb-4"
          helpText="Add some content here"
        />
      </section>

      <section className="mb-20">
        <h2 className="dark:text-gray-100 text-2xl font-thin mb-6">Dropdown</h2>
        <Dropdown buttonLabel={<FiMoreHorizontal />}>
          <ul className="w-32">
            <li>hello world</li>
            <li>how's it going</li>
          </ul>
        </Dropdown>
      </section>

      <section className="mb-20">
        <h2 className="dark:text-gray-100 text-2xl font-thin mb-6">Card</h2>
        <Card>
          <Text h6 className="mb-4">
            Welcome Back
          </Text>
          <Input
            placeholder="email"
            startIcon={FiMail}
            label="eMail"
            className="mb-4"
          />
          <Input
            placeholder="****"
            startIcon={FiLock}
            label="Password"
            className="mb-4"
          />
          <Button className="mr-1">Sign In</Button>
        </Card>
      </section>
    </Layout>
  )
}

export default ComponentsPage
