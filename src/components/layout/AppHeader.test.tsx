import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import AppHeader from './AppHeader'

describe('AppHeader', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<AppHeader />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
