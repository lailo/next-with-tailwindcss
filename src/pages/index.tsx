import * as React from 'react'
import { NextPage } from 'next'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Input from '../components/Input'
import Text from '../components/Text'
import List from '../components/List'
import Card from '../components/Card'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Your Awesome App" className="container py-8 max-w-xl">
      <h1 className="dark:text-gray-100 text-3xl font-black mb-20">
        Components
      </h1>

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

      <section className="mb-20">
        <h2 className="dark:text-gray-100 text-2xl font-thin mb-6">Text</h2>
        <Text h1 className="mb-4">
          Header 1
        </Text>
        <Text h2 className="mb-4">
          Header 2
        </Text>
        <Text h3 className="mb-4">
          Header 3
        </Text>
        <Text h4 className="mb-4">
          Header 4
        </Text>
        <Text h5 className="mb-4">
          Header 5
        </Text>
        <Text h6 className="mb-4">
          Header 6
        </Text>
        <Text className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Text bold className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text small className="mb-4">
          Small text
        </Text>
      </section>

      <section className="mb-20">
        <h2 className="dark:text-gray-100 text-2xl font-thin mb-6">List</h2>
        <List className="mb-4">
          <List item>item 1</List>
          <List item>item 2</List>
          <List item>item 3</List>
        </List>
        <List ordered className="mb-4">
          <List item>item 1</List>
          <List item>item 2</List>
          <List item>item 3</List>
        </List>
      </section>
    </Layout>
  )
}

export default IndexPage
