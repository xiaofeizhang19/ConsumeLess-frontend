import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Test from '../components/Test';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<Test />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 0');
  });
});
