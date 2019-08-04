import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Button from './Button'

describe('Button', () => {
  it('renders with correct label', () => {
    const wrapper = shallow(<Button>Hello</Button>)
    expect(wrapper.text()).toEqual('Hello')
  })
  it('matches snapshot', () => {
    const wrapper = shallow(<Button>Snapshot</Button>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
