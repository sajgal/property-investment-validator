import React from 'react';
import { Form, InputNumber, Icon, Tooltip } from 'antd';
import { inject } from 'mobx-react';

const ClosingCosts = (props) => {
  return (
    <Form.Item label={
      <span>
        Closing Costs&nbsp;
        <Tooltip title="Closing costs are fees paid at the closing of a real estate transaction (Brokerage Commission, Mortgage Application Fees, Document or Transaction Stamps or Taxes, ...)">
          <Icon type="question-circle-o" />
        </Tooltip>
      </span>
    }>
      <InputNumber
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={closingCosts => props.onClosingCostsChange(closingCosts)}
        style={{width: "100%"}}
      />
    </Form.Item>

  );
};

export default inject(stores => ({
  onClosingCostsChange: stores.rootStore.investmentStore.onClosingCostsChange,
}))(ClosingCosts);