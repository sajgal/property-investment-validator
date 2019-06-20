import React from 'react';
import { Form, InputNumber } from 'antd';
import { inject } from 'mobx-react';

const DownPayment = (props) => {
  return (
    <Form.Item label="Down payment in %">
      <InputNumber
        onChange={downPayment => props.onDownPaymentChange(downPayment)}
        style={{width: "100%"}}
        max={100}
        min={0}
      />
    </Form.Item>
  );
};

export default inject(stores => ({
  onDownPaymentChange: stores.rootStore.investmentStore.onDownPaymentChange,
}))(DownPayment);