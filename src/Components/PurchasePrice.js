import React from 'react';
import { Form, InputNumber, Tooltip, Icon } from 'antd';
import { inject } from 'mobx-react';

const PurchasePrice = (props) => {
  const onChange = (purchasePrice) => {
    props.onPurchasePriceChange(purchasePrice);
  }

  return (
    <Form.Item label={
      <span>
        Purchase Price&nbsp;
        <Tooltip title="Full price of purchased real property.">
          <Icon type="question-circle-o" />
        </Tooltip>
      </span>
    }>
      <InputNumber
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onChange}
        style={{ width: "100%" }}
      />
    </Form.Item>

  );
};

export default inject(stores => ({
  onPurchasePriceChange: stores.rootStore.investmentStore.onPurchasePriceChange,
}))(PurchasePrice);