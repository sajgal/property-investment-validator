import React from 'react';
import { inject } from 'mobx-react';
import { Card as AntCard, Tag } from 'antd';
import styled from 'styled-components';

const Card = styled(AntCard)`
  margin-bottom: 15px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Greyish = styled.div`
  color: #7f7f7f;
`;

const ResultRow = styled.div`
  margin-top: 5px;
`;

const Results = (props) => {
  const formatMoney = value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <Card title="Cash Flow">
        <Greyish>Monthly Income: {formatMoney(props.monthlyRentalIncome)}</Greyish>
        <Greyish>Monthly Expenses: {formatMoney(props.expenses)}</Greyish>
        <ResultRow><Bold>Monthly Cash Flow</Bold> <Tag color="#87d068">{formatMoney(props.cashFlow)}</Tag></ResultRow>
      </Card>

      <Card title={"Return of Investment"}>
        <Greyish>Investments: {formatMoney(props.totalInvestment)}</Greyish>
        <Greyish>Annual Cash Flow: {formatMoney(props.annualCashFlow)}</Greyish>
        <ResultRow><Bold>Cash on Cash ROI</Bold> <Tag color="#864DD7">{Math.round(props.cashOnCashROI * 100) / 100} %</Tag></ResultRow>
      </Card>
    </>
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