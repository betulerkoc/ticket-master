import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from '../MovieCard';


describe('MovieCard Component', () => {
    const wrapper = shallow(<MovieCard movieName='betul'/>);
  
    it('Should render movie card component', () => {
        expect(wrapper.exists()).toBe(true)
    });
  
    it('Renders movie name', () => {
      const text = wrapper.find('h4').text();
      expect(text).toEqual('Name:betul');
    });
    
    it('should render movie paragraph number', () => {
      expect(wrapper.find("p")).toHaveLength(2);
    })
});