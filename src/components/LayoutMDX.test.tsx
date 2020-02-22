import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LayoutMDX from './LayoutMDX'

describe('LayoutMDX', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<LayoutMDX>hello world</LayoutMDX>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
