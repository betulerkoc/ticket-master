import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index'

describe('Navbar Component', () => {
    const wrapper = shallow(<Header/>);
  
      it('should render navbar', () => {
          expect(wrapper.exists()).toBe(true)
    });
  });