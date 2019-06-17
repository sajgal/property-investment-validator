import InvestmentStore from './InvestmentStore';

class RootStore {
  constructor() {
    this.investmentStore = new InvestmentStore();
  }
}

export default RootStore;