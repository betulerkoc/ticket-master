import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Home from './pages/Home'


describe('<App />', () => {
	it('should render app', () => {
		shallow(<App />);
	});
});

describe('Goes to searched items', () => {
  const wrapper = shallow(<Home/>);
    it('Should render home page', () => {
      expect(wrapper.exists()).toBe(true)
  });
});









