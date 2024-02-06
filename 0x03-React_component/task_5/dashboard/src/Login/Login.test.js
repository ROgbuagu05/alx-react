import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Login from './Login';


describe('<Login />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });
  it('renders two input tags and two label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input")).to.have.lengthOf(2);
    expect(wrapper.find("label")).to.have.lengthOf(2);
  });
});
