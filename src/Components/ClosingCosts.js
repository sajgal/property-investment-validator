import React from 'react';
import { Form, InputNumber } from 'antd';
import { inject } from 'mobx-react';

const ClosingCosts = (props) => {
  return (
    <Form.Item label="Closing Costs">
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