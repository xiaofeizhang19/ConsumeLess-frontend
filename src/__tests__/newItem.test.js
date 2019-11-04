import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import NewItem from '../components/NewItem';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('NewItem', () => {
      
    it('check the title', () => {
        const wrapper = mount(<NewItem />);
        const data = wrapper.find('h3').text();
        expect(data).equal('Add a new item');
    });
  
    it('should have a class to wrapper data', () => {    
        const newItemComponent = mount(<NewItem />);
        expect(newItemComponent.find('.container').length).to.equal(1);
    });
    
});