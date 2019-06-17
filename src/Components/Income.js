import React from 'react';
import { Form, InputNumber } from 'antd';
import { inject } from 'mobx-react';

const Income = (props) => {
  const onChange = (income) => {
    props.onIncomeChange(income);
  }

  return (
    <Form.Item label="Income">
      <InputNumber
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onChange}
      />
    </Form.Item>
  );
};

export default inject(stores => ({
  onIncomeChange: stores.rootStore.investmentStore.onIncomeChange,
}))(Income);