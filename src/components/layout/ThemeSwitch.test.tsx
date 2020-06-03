import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import ThemeSwitch from './ThemeSwitch'

describe('ThemeSwitch', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ThemeSwitch />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
