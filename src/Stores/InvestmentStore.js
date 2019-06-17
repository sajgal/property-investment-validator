import { observable, action, decorate, computed } from 'mobx';

class InvestmentStore {
  purchasePrice = 0;
  income = 0;

  onPurchasePriceChange(purchasePrice) {
    this.purchasePrice = purchasePrice;
  }

  onIncomeChange(income) {
    this.income = income;
  }

  get profit() {
    const profit = this.income - this.purchasePrice;
    return `$ ${profit}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export default decorate(InvestmentStore, {
  purchasePrice: observable,
  income: observable,

  profit: computed,

  onPurchasePriceChange: action.bound,
  onIncomeChange: action.bound,
});