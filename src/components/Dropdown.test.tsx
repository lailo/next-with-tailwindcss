import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Dropdown from './Dropdown'

describe('Dropdown', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Dropdown buttonLabel="menu">
        <ul>
          <li>hello</li>
          <li>world</li>
        </ul>
      </Dropdown>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
