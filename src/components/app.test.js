import React from 'react';
import { shallow } from 'enzyme';

import {findByTestAttr} from '../utils/testUtils';
import App from './app';

const setUp = (props={}) => {
  const component = shallow(<App {...props} />)
  return component
}

describe('App Component', ()=>{

  let component;
  beforeEach(()=>{
    component = setUp();
  });

  it('app div', () => {
    const wrapper = findByTestAttr(component, 'main-container')
    expect(wrapper.length).toBe(1)
  })


  it('map container init', () => {
    const wrapper = findByTestAttr(component, 'map-component-initialized')
    expect(wrapper.length).toBe(1)
  })


  it('location container init', () => {
    const wrapper = findByTestAttr(component, 'location-component-initialized')
    expect(wrapper.length).toBe(1)
  })

})
