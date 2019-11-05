import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import Items from '../components/Items';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


  describe('Items component', () => {
    it('check the data state', () => {
    const wrapper = mount(<Items />);
    const data = wrapper.find('p').text();
    expect(data).equal('Items to Borrow');
    });

    it('renders the <Items /> components', () => {
      const wrapper = mount(<Items />);
      expect(wrapper.find(Items)).to.have.lengthOf(1);
    });
  
  });