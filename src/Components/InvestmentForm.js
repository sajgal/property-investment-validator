import React from 'react';
import { Form } from 'antd';

import PurchasePrice from './PurchasePrice';
import MonthlyRentalIncome from './MonthlyRentalIncome';
import MonthlyExpenses from './MonthlyExpenses';
import DownPayment from './DownPayment';
import RehabBudget from './RehabBudget';
import ClosingCosts from './ClosingCosts';

class InvestmentForm extends React.Component {
  formItemLayout = {
    labelCol: {
      sm: { span: 24 },
      md: { span: 10 },
      lg: { span: 8 },
      xl: { span: 5 },
    },
    wrapperCol: {
      sm: { span: 24 },
      md: { span: 14 },
      lg: { span: 16 },
      xl: { span: 19 },
    },
  };

  render() {
    return (
      <Form {...this.formItemLayout} onSubmit={this.handleSubmit}>
        <PurchasePrice />
        <DownPayment />
        <MonthlyRentalIncome />
        <MonthlyExpenses form={this.props.form} />
        <RehabBudget />
        <ClosingCosts />
      </Form>
    );
  }
};

export default Form.create({ name: 'investment_form' })(InvestmentForm);