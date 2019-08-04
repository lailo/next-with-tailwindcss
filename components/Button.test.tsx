import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Button from './Button'

describe('Button', () => {
  it('renders with correct label', () => {
    const wrapper = shallow(<Button>Hello</Button>)
    expect(wrapper.text()).toEqual('Hello')
  })

  it('matches primary (default) type snapshot', () => {
    const wrapper = shallow(<Button>Primary</Button>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches secondary type snapshot', () => {
    const wrapper = shallow(<Button type="secondary">Secondary</Button>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
