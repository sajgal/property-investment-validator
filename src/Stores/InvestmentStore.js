import { observable, action, decorate, computed } from 'mobx';

class InvestmentStore {
  purchasePrice = 0;
  monthlyRentalIncome = 0;
  expensePrices = {};
  expenseLabels = {};

  onPurchasePriceChange(purchasePrice) {
    this.purchasePrice = purchasePrice;
  }

  onMonthlyRentalIncomeChange(income) {
    this.monthlyRentalIncome = income;
  }

  onExpensePriceChange(index, price) {
    this.expensePrices[index] = price;
  }

  onExpenseLabelChange(index, label) {
    this.expenseLabels[index] = label;
  }

  get profit() {
    const profit = this.monthlyRentalIncome - this.purchasePrice - this.expenses;
    return `$ ${profit}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  get expenses() {
    let monthlyExpenses = 0;

    for (const expense in this.expensePrices) {
      if (this.expensePrices.hasOwnProperty(expense)) {
        monthlyExpenses += this.expensePrices[expense];
      }
    }

    return monthlyExpenses;
  }
}

export default decorate(InvestmentStore, {
  purchasePrice: observable,
  monthlyRentalIncome: observable,
  expenseLabels: observable,
  expensePrices: observable,

  profit: computed,
  expenses: computed,

  onPurchasePriceChange: action.bound,
  onMonthlyRentalIncomeChange: action.bound,
  onExpensePriceChange: action.bound,
  onExpenseLabelChange: action.bound,
});