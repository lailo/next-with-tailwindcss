import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Text from './Text'

describe('Text', () => {
  it('matches h1 snapshot', () => {
    const wrapper = shallow(<Text h1>Header 1</Text>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches h2 snapshot', () => {
    const wrapper = shallow(<Text h2>Header 2</Text>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches h3 snapshot', () => {
    const wrapper = shallow(<Text h3>Header 3</Text>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches h4 snapshot', () => {
    const wrapper = shallow(<Text h4>Header 4</Text>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches h5 snapshot', () => {
    const wrapper = shallow(<Text h5>Header 5</Text>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches h6 snapshot', () => {
    const wrapper = shallow(<Text h6>Header 6</Text>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches default text snapshot', () => {
    const wrapper = shallow(<Text>This is a paragraph</Text>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches small snapshot', () => {
    const wrapper = shallow(<Text small>Small text</Text>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('matches bold snapshot', () => {
    const wrapper = shallow(<Text bold>Bold text</Text>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
