import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Item from '../components/Items';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Item component', () => {
  it('check the data state', () => {
    const wrapper = shallow(<Item />);
    const data = wrapper.find('p').text();
    expect(data).equal('');
  });

    it('renders three <Item /> components', () => {
      const wrapper = shallow(<item />);
      expect(wrapper.find(Item)).to.have.lengthOf(0);
    });
});