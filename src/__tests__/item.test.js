import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import Item from '../components/Items';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


  describe('Item component', () => {
    it('check the data state', () => {
    const wrapper = mount(<Item />);
    const data = wrapper.find('p').text();
    expect(data).equal('');
    });

    it('renders the <Item /> components', () => {
      const wrapper = mount(<Item />);
      expect(wrapper.find(Item)).to.have.lengthOf(1);
    });
  
  });