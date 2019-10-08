import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import ButtonSimple from '.'

describe('ButtonSimple', () => {
  it('renders with correct label', () => {
    const wrapper = shallow(<ButtonSimple>Hello</ButtonSimple>)
    expect(wrapper.text()).toEqual('Hello')
  })

  it('matches primary (default) type snapshot', () => {
    const wrapper = shallow(<ButtonSimple>Primary</ButtonSimple>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches secondary type snapshot', () => {
    const wrapper = shallow(
      <ButtonSimple type="secondary">Secondary</ButtonSimple>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches with external className as string', () => {
    const wrapper = shallow(
      <ButtonSimple className="external-classname">Hello</ButtonSimple>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches with external className as object', () => {
    const wrapper = shallow(
      <ButtonSimple
        className={{
          'external-classname-true': true,
          'external-classname-false': false,
        }}
      >
        Hello
      </ButtonSimple>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches disabled state', () => {
    const wrapper = shallow(<ButtonSimple disabled>Disabled</ButtonSimple>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches loading state', () => {
    const wrapper = shallow(<ButtonSimple loading>Disabled</ButtonSimple>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
