import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Layout from './Layout'

describe('Layout', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Layout>
        <h1>hello world</h1>
      </Layout>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches snapshot with title', () => {
    const wrapper = shallow(
      <Layout title="My Awesome App">
        <h1>hello world</h1>
      </Layout>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches snapshot with custom className', () => {
    const wrapper = shallow(
      <Layout className="py-4 mx-3">
        <h1>hello world</h1>
      </Layout>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
