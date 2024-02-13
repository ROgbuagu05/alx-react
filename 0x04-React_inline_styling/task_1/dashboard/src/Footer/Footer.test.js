import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';


describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
  it('has copyright text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("p").text()).to.contain('Copyright');
  });
});
