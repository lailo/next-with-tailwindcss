import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { FiMail } from 'react-icons/fi'

import Input from './Input'

describe('Input', () => {
  it('renders with correct label', () => {
    const wrapper = shallow(<Input label="Hello" />)
    expect(wrapper.find('label').first().text()).toEqual('Hello')
  })

  it('renders with value', () => {
    const wrapper = shallow(<Input value="Hello" />)
    expect(wrapper.find('input').props().value).toEqual('Hello')
  })

  it('matches default snapshot', () => {
    const wrapper = shallow(<Input placeholder="email" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches with icon snapshot', () => {
    const wrapper = shallow(<Input placeholder="email" startIcon={FiMail} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches disabled snapshot', () => {
    const wrapper = shallow(<Input placeholder="email" disabled />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches with error snapshot', () => {
    const wrapper = shallow(<Input placeholder="email" hasError />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches custom class names snapshot', () => {
    const wrapper = shallow(<Input className="custom-class" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches with help text', () => {
    const wrapper = shallow(<Input helpText="my help text" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
