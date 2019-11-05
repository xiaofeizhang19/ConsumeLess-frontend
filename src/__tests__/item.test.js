import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Item from '../components/Items';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


  describe('Item component', () => {
  
    it('renders the <Item /> components', () => {
      const wrapper = shallow(<Item />);
      expect(wrapper.find("div").to.have.lengthOf(1)
    });
  
  });