import InvestmentStore from '../Stores/InvestmentStore';

describe('InvestmentStore', () => {
  it('can set the purchasePrice', () => {
    const investmentStore = new InvestmentStore();
    const price = 1250;

    investmentStore.onPurchasePriceChange(price);
    expect(investmentStore.purchasePrice).toEqual(price);
  });

  it('can set the monthlyRentalIncome', () => {
    const investmentStore = new InvestmentStore();
    const price = 1249;

    investmentStore.onMonthlyRentalIncomeChange(price);
    expect(investmentStore.monthlyRentalIncome).toEqual(price);
  });

  it('can set the expensePrices', () => {
    const investmentStore = new InvestmentStore();

    investmentStore.onExpensePriceChange(0, 1248);
    investmentStore.onExpensePriceChange(2, 1247);
    investmentStore.onExpensePriceChange(3, 1246);
    expect(investmentStore.expensePrices[0]).toEqual(1248);
    expect(investmentStore.expensePrices[2]).toEqual(1247);
    expect(investmentStore.expensePrices[3]).toEqual(1246);
  });

  it('can set the expenseLabels', () => {
    const investmentStore = new InvestmentStore();

    investmentStore.onExpenseLabelChange(0, 'label 1');
    investmentStore.onExpenseLabelChange(2, 'label 2');
    investmentStore.onExpenseLabelChange(3, 'label 3');
    expect(investmentStore.expenseLabels[0]).toEqual('label 1');
    expect(investmentStore.expenseLabels[2]).toEqual('label 2');
    expect(investmentStore.expenseLabels[3]).toEqual('label 3');
  });

  it('can set the downPaymentPercentage', () => {
    const investmentStore = new InvestmentStore();
    const percent = 20;

    investmentStore.onDownPaymentChange(percent);
    expect(investmentStore.downPaymentPercentage).toEqual(percent);
  });

  it('can set the rehabPrice', () => {
    const investmentStore = new InvestmentStore();
    const price = 1245;

    investmentStore.onRehabBudgetChange(price);
    expect(investmentStore.rehabPrice).toEqual(price);
  });

  it('can set the closingCosts', () => {
    const investmentStore = new InvestmentStore();
    const costs = 1244;

    investmentStore.onClosingCostsChange(costs);
    expect(investmentStore.closingCosts).toEqual(costs);
  });

  it('can calculate expenses', () => {
    const investmentStore = new InvestmentStore();
    investmentStore.expensePrices = {
      3: 230,
      1: 100,
      2: 220,
    };

    expect(investmentStore.expenses).toEqual(550);
  });

  it('can calculate cashFlow', () => {
    const investmentStore = new InvestmentStore();
    investmentStore.monthlyRentalIncome = 600;
    investmentStore.expensePrices = {
      3: 230,
      1: 100,
      2: 220,
    };

    expect(investmentStore.cashFlow).toEqual(50);

    investmentStore.monthlyRentalIncome = 500;
    investmentStore.expensePrices = {
      3: 230,
      1: 100,
      2: 220,
    };

    expect(investmentStore.cashFlow).toEqual(-50);
  });

  it('can calculate annualCashFlow', () => {
    const investmentStore = new InvestmentStore();
    investmentStore.monthlyRentalIncome = 650;
    investmentStore.expensePrices = {
      3: 100,
      1: 100,
    };

    expect(investmentStore.annualCashFlow).toEqual(5400);
  });

  it('can calculate downPaymentPrice', () => {
    const investmentStore = new InvestmentStore();
    investmentStore.purchasePrice = 140000;
    investmentStore.downPaymentPercentage = 20;

    expect(investmentStore.downPaymentPrice).toEqual(28000);

    investmentStore.purchasePrice = 10000;
    investmentStore.downPaymentPercentage = 0;

    expect(investmentStore.downPaymentPrice).toEqual(0);

    investmentStore.purchasePrice = 200000;
    investmentStore.downPaymentPercentage = 100;

    expect(investmentStore.downPaymentPrice).toEqual(200000);

    investmentStore.purchasePrice = 200000;
    investmentStore.downPaymentPercentage = 120;

    expect(investmentStore.downPaymentPrice).toEqual(240000);
  });

  it('can calculate totalInvestment', () => {
    const investmentStore = new InvestmentStore();
    investmentStore.purchasePrice = 2000;
    investmentStore.downPaymentPercentage = 10;
    investmentStore.closingCosts = 150;
    investmentStore.rehabPrice = 100;

    expect(investmentStore.totalInvestment).toEqual(450);
  });

  it('can calculate cashOnCashROI', () => {
    const investmentStore = new InvestmentStore();
    investmentStore.purchasePrice = 2000;
    investmentStore.downPaymentPercentage = 10;
    investmentStore.closingCosts = 150;
    investmentStore.rehabPrice = 100;
    investmentStore.monthlyRentalIncome = 650;
    investmentStore.expensePrices = {
      3: 110,
      1: 130,
    };

    expect(investmentStore.cashOnCashROI).toEqual(1093.3333333333333);
  });

  it('can not calculate cashOnCashROI if investment is zero', () => {
    const investmentStore = new InvestmentStore();
    investmentStore.purchasePrice = 0;

    expect(investmentStore.cashOnCashROI).toEqual(0);
  })
});