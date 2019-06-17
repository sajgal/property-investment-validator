import React from 'react';
import { Form } from 'antd';

import PurchasePrice from './Components/PurchasePrice';
import Income from './Components/Income';
import Results from './Components/Results';

class InvestmentForm extends React.Component {
  render() {
    return (
      <div>
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <PurchasePrice />
          <Income />
        </Form>
        <Results />
      </div>
    );
  }
};

export default Form.create({ name: 'investment_form' })(InvestmentForm);