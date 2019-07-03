import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

jest.mock('react-ga');

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
