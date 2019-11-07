import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import NewItem from '../components/NewItem';
import Adapter from 'enzyme-adapter-react-16';
import { useHistory } from 'react';

configure({ adapter: new Adapter() });

describe('NewItem', () => {
  
    it('should have a class to wrapper data', () => {    
        const newItemComponent = shallow(<NewItem />);
        expect(newItemComponent.find('.container').length).to.equal(1);
    });
    
});