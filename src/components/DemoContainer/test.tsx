import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import DemoContainer from '.'
import Button from '../Button'
import ButtonSimple from '../ButtonSimple'

describe('DemoContainer', () => {
  it('renders with buttton component', () => {
    const wrapper = shallow(<DemoContainer Component={Button} title="Button" />)
    expect(wrapper.find('h2').text()).toEqual('Button')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders with buttton component', () => {
    const wrapper = shallow(
      <DemoContainer Component={ButtonSimple} title="ButtonSimple" />
    )
    expect(wrapper.find('h2').text()).toEqual('ButtonSimple')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
