import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Button from '.'

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

  it('matches with external className as string', () => {
    const wrapper = shallow(
      <Button className="external-classname">Hello</Button>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches with external className as object', () => {
    const wrapper = shallow(
      <Button
        className={{
          'external-classname-true': true,
          'external-classname-false': false,
        }}
      >
        Hello
      </Button>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches disabled state', () => {
    const wrapper = shallow(<Button disabled>Disabled</Button>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches loading state', () => {
    const wrapper = shallow(<Button loading>Disabled</Button>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
