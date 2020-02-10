import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index'

describe('Button component', () => {
    const wrapper = shallow(<Button/>);
    it('Should render button', () => {
      expect(wrapper.exists()).toBe(true)
  });
});