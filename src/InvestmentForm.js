import React from 'react';
import { Form } from 'antd';

// import PurchasePrice from './Components/PurchasePrice';
import MonthlyRentalIncome from './Components/MonthlyRentalIncome';
import Results from './Components/Results';
import MonthlyExpenses from './Components/MonthlyExpenses';

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
          <MonthlyRentalIncome />
          <MonthlyExpenses form={this.props.form} />
          {/* <PurchasePrice /> */}
        </Form>
        <Results />
      </div>
    );
  }
};

export default Form.create({ name: 'investment_form' })(InvestmentForm);