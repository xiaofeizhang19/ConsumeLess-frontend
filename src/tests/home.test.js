import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Home from '../components/Home';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('home page', () => {
  it('check the title', () => {
    const wrapper = shallow(<Home />);
    const text = wrapper.find('h1').text();
    expect(text).equal('Welcome to ConsumeLess!');
  });
});

describe('home page', () => {
    it('check the subtitle', () => {
      const wrapper = shallow(<Home />);
      const text = wrapper.find('p').text();
      expect(text).equal('Saving the world, one lawnmower at a time');
    });
  });