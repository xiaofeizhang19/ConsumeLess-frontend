import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Login from '../components/Login';
import Adapter from 'enzyme-adapter-react-16';
import { useHistory } from 'react-router-dom';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

describe ('Login',() => {
    
    let wrapper = shallow(<Login />);

    it('should render a div element', () => {
        expect(wrapper.find('div').length).equal(2);
    });

});
