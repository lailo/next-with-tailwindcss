import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Card from './Card'

describe('Card', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Card>
        <h1>hello world</h1>
      </Card>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
