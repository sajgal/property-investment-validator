import React from 'react';
import { inject } from 'mobx-react';
import formatMoney from '../lib/formatMoney';

const Results = (props) => {
  return (
    <div>
      <div>Monthly Income: $ {formatMoney(props.monthlyRentalIncome)}</div>
      <div>Monthly Expenses: $ {formatMoney(props.expenses)}</div>
      <div>Monthly Cash Flow: $ {formatMoney(props.cashFlow)}</div>
      <br />
      <div>Investments: $ {formatMoney(props.totalInvestment)}</div>
      <div>Annual Cash Flow: $ {formatMoney(props.annualCashFlow)}</div>
      <div>Cash on Cash ROI: {Math.round(props.cashOnCashROI * 100) / 100} %</div>
    </div>
  );
};

export default inject(stores => ({
  monthlyRentalIncome: stores.rootStore.investmentStore.monthlyRentalIncome,
  expenses: stores.rootStore.investmentStore.expenses,
  cashFlow: stores.rootStore.investmentStore.cashFlow,
  annualCashFlow: stores.rootStore.investmentStore.annualCashFlow,
  totalInvestment: stores.rootStore.investmentStore.totalInvestment,
  cashOnCashROI: stores.rootStore.investmentStore.cashOnCashROI,
}))(Results);