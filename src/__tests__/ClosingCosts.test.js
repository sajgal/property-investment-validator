import React from 'react';
import ClosingCosts from '../Components/ClosingCosts';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import RootStore from '../Stores/RootStore';

describe('Header', () => {
  it('matches snapshot', async () => {
    const rootStore = new RootStore();
    rootStore.investmentStore.onClosingCostsChange(200);

    const wrapper = mount(
        <ClosingCosts.wrappedComponent stores={{rootStore}} />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});