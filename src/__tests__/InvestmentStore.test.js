import InvestmentStore from '../Stores/InvestmentStore';

describe('InvestmentStore', () => {
  it('can change the purchasePrice', () => {
    const investmentStore = new InvestmentStore();

    investmentStore.onPurchasePriceChange(1250);
    expect(investmentStore.purchasePrice).toEqual(1250);
  });
});