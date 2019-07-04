import React from 'react';
import Header from '../Components/Header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Header', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});