import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import List from './List'

describe('List', () => {
  it('matches empty ul snapshot', () => {
    const wrapper = shallow(<List>items</List>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches empty ol snapshot', () => {
    const wrapper = shallow(<List ordered>items</List>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches li snapshot', () => {
    const wrapper = shallow(<List item>item text</List>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches ul with item snapshot', () => {
    const wrapper = shallow(
      <List>
        <List item>item text</List>
        <List item>item text</List>
      </List>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches empty ol snapshot', () => {
    const wrapper = shallow(
      <List ordered>
        <List item>item text</List>
        <List item>item text</List>
      </List>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
