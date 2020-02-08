import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from './components/Navbar/index'
import MovieCard from './components/MovieList/MovieCard';
import Pagination from './components/Pagination/index'
import Button from './components/Button/index'
import Search from './components/Search/index'
import Home from './pages/Home'


describe('<App />', () => {
	it('should render app', () => {
		shallow(<App />);
	});
});

describe('Navbar Component', () => {
  const wrapper = shallow(<Navbar/>);

	it('should render navbar', () => {
		expect(wrapper.exists()).toBe(true)
  });
  it('should render page number', () => {
    expect(wrapper.find("li")).toHaveLength(1);
  })
});

describe('MovieCard Component', () => {
  const wrapper = shallow(<MovieCard name='betul'/>);

  it('Should render movie card component', () => {
      expect(wrapper.exists()).toBe(true)
  });

  it('Renders movie name', () => {
    const text = wrapper.find('h4').text();
    expect(text).toEqual('Name:betul');
  });

  // it('Should render when button is clicked', () => {
  //   const goto = wrapper.find('Button');
  //   goto.simulate('click');
  //   const text = wrapper.find('h4').text();
  //   expect(text).toEqual('Name:betul');
  // });
});

describe('Goes to searched items', () => {
  const wrapper = shallow(<Home/>);
    it('Should render home page', () => {
      expect(wrapper.exists()).toBe(true)
  });
});

describe('Pagination Component', () => {
  const wrapper = shallow(<Pagination/>);
  it('Should render pagination', () => {
      expect(wrapper.exists()).toBe(true)
  });
});

// const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// }

describe('<Button />', () => {
  const wrapper = shallow(<Button/>);
  it('Should render button', () => {
    expect(wrapper.exists()).toBe(true)
});
   
  // const button = findByTestAttr(wrapper, 'go-to');
  // button.simulate('click');

});

describe('Search Component', () => {
//   const wrapper = shallow(<Search/>);
//   it('Should capture searched value correctly', () => {
//     const input = wrapper.find('#search-input')
//     input.simulate('change', {target: {name: 'userInput', value: 'Goose'}});
//     expect(input.props()).toEqual('Goose')
// })
 })






