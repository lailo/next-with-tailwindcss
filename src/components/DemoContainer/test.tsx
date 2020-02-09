import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import DemoContainer from '.'
import Button from '../Button'

describe('DemoContainer', () => {
  it('renders with button component', () => {
    const wrapper = shallow(<DemoContainer Component={Button} title="Button" />)
    expect(wrapper.find('h2').text()).toEqual('Button')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
