import { observable, computed, action, decorate } from 'mobx';

class InvestmentStore {
  expenses = 0;

  addExpenses() {
    this.expenses = this.expenses + 10;
  }
}

export default decorate(InvestmentStore, {
  expenses: observable,
  addExpenses: action.bound,
});