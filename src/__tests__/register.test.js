import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Register from '../components/Register';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

describe ('Login',() => {

    let wrapper = shallow(<Register />);

    it('should render a div element', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

});