import React from 'react';
import { Form, InputNumber, Icon, Tooltip } from 'antd';
import { inject } from 'mobx-react';

const DownPayment = (props) => {
  return (
    <Form.Item label={
      <span>
        Down payment in %&nbsp;
        <Tooltip title="Initial payment made when purchasing a property. Usually 20% of the purchase price.">
          <Icon type="question-circle-o" />
        </Tooltip>
      </span>
    }>
      <InputNumber
        onChange={downPayment => props.onDownPaymentChange(downPayment)}
        style={{ width: "100%" }}
        max={100}
        min={0}
      />
    </Form.Item>
  );
};

export default inject(stores => ({
  onDownPaymentChange: stores.rootStore.investmentStore.onDownPaymentChange,
}))(DownPayment);