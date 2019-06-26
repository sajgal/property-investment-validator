import React from 'react';
import { inject } from 'mobx-react';
import { Card as AntCard, Tag, Tooltip, Icon } from 'antd';
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
      <Card title={
        <span>
          Cash Flow&nbsp;
          <Tooltip title="In real estate terms, cash flow is the byproduct of owning a rental property and leasing it to tenants for a monthly rental income.">
            <Icon type="question-circle-o" />
          </Tooltip>
        </span>
      }>
        <Greyish>Monthly Income: {formatMoney(props.monthlyRentalIncome)}</Greyish>
        <Greyish>Monthly Expenses: {formatMoney(props.expenses)}</Greyish>
        <ResultRow><Bold>Monthly Cash Flow</Bold> <Tag color="#87d068">{formatMoney(props.cashFlow)}</Tag></ResultRow>
      </Card>

      <Card title={
        <span>
          Return of Investment&nbsp;
          <Tooltip title="Return on investment (ROI) is an accounting term that indicates the percentage of invested money that's recouped after the deduction of associated costs.">
            <Icon type="question-circle-o" />
          </Tooltip>
        </span>
      }>
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