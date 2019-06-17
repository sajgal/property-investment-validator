import React from 'react';
import { Form, InputNumber } from 'antd';
import { inject } from 'mobx-react';

const PurchasePrice = (props) => {
  const onChange = (purchasePrice) => {
    props.onPurchasePriceChange(purchasePrice);
  }

  return (
    <Form.Item label="Purchase Price">
      <InputNumber
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onChange}
      />
    </Form.Item>

  );
};

export default inject(stores => ({
  onPurchasePriceChange: stores.rootStore.investmentStore.onPurchasePriceChange,
}))(PurchasePrice);