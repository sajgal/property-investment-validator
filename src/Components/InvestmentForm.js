import React from 'react';
import { Form } from 'antd';

import PurchasePrice from './PurchasePrice';
import MonthlyRentalIncome from './MonthlyRentalIncome';
import Results from './Results';
import MonthlyExpenses from './MonthlyExpenses';
import DownPayment from './DownPayment';
import RehabBudget from './RehabBudget';
import ClosingCosts from './ClosingCosts';

class InvestmentForm extends React.Component {
  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  render() {
    return (
      <div>
        <Form {...this.formItemLayout} onSubmit={this.handleSubmit}>
          <PurchasePrice />
          <DownPayment />
          <MonthlyRentalIncome />
          <MonthlyExpenses form={this.props.form} />
          <RehabBudget />
          <ClosingCosts />
        </Form>
        <Results />
      </div>
    );
  }
};

export default Form.create({ name: 'investment_form' })(InvestmentForm);