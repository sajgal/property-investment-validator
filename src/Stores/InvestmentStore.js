import { observable, action, decorate, computed } from 'mobx';

class InvestmentStore {
  purchasePrice = 0;
  monthlyRentalIncome = 0;

  onPurchasePriceChange(purchasePrice) {
    this.purchasePrice = purchasePrice;
  }

  onMonthlyRentalIncomeChange(income) {
    this.monthlyRentalIncome = income;
  }

  get profit() {
    const profit = this.monthlyRentalIncome - this.purchasePrice;
    return `$ ${profit}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export default decorate(InvestmentStore, {
  purchasePrice: observable,
  monthlyRentalIncome: observable,

  profit: computed,

  onPurchasePriceChange: action.bound,
  onMonthlyRentalIncomeChange: action.bound,
});