import { observable, action, decorate, computed } from 'mobx';

class InvestmentStore {
  purchasePrice = 0;
  monthlyRentalIncome = 0;
  downPaymentPercentage = 0;
  rehabPrice = 0;
  closingCosts = 0;
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

  onDownPaymentChange(downPaymentPercentage) {
    this.downPaymentPercentage = downPaymentPercentage;
  }

  onRehabBudgetChange(rehabPrice) {
    this.rehabPrice = rehabPrice;
  }

  onClosingCostsChange(closingCosts) {
    this.closingCosts = closingCosts;
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

  get cashFlow() {
    return this.monthlyRentalIncome - this.expenses;
  }

  get annualCashFlow() {
    return 12 * (this.monthlyRentalIncome - this.expenses);
  }

  get downPaymentPrice() {
    return this.purchasePrice * (this.downPaymentPercentage / 100);
  }

  get totalInvestment() {
    return this.downPaymentPrice + this.closingCosts + this.rehabPrice;
  }

  get cashOnCashROI() {
    if (this.totalInvestment <= 0) {
      return 0;
    }

    return (this.annualCashFlow / this.totalInvestment) * 100;
  }
}

export default decorate(InvestmentStore, {
  purchasePrice: observable,
  monthlyRentalIncome: observable,
  expenseLabels: observable,
  expensePrices: observable,
  downPaymentPercentage: observable,
  rehabPrice: observable,
  closingCosts: observable,

  cashFlow: computed,
  expenses: computed,
  annualCashFlow: computed,
  downPaymentPrice: computed,
  totalInvestment: computed,
  cashOnCashROI: computed,

  onPurchasePriceChange: action.bound,
  onMonthlyRentalIncomeChange: action.bound,
  onExpensePriceChange: action.bound,
  onExpenseLabelChange: action.bound,
  onDownPaymentChange: action.bound,
  onRehabBudgetChange: action.bound,
  onClosingCostsChange: action.bound,
});