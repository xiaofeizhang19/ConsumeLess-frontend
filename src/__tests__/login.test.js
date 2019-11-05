import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import Login from '../components/Login';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Login component', () => {
      
    it('check the title', () => {
        const wrapper = mount(<Login />);
        const data = wrapper.find('h2').text();
        expect(data).equal('Welcome to Consume£e$$');
    }); 
  
    it('should have a container to wrapper data', () => {    
        const loginComponent = mount(<Login />);
        expect(loginComponent.find('container').length).to.equal(0);
    });
    
});