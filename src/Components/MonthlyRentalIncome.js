import React from 'react';
import { Form, InputNumber } from 'antd';
import { inject } from 'mobx-react';

const MonthlyRentalIncome = (props) => {
  const onChange = (income) => {
    props.onIncomeChange(income);
  }

  return (
    <Form.Item label="Monthly Rental Income">
      <InputNumber
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        precision={0}
        onChange={onChange}
        style={{width: "100%"}}
      />
    </Form.Item>
  );
};

export default inject(stores => ({
  onIncomeChange: stores.rootStore.investmentStore.onMonthlyRentalIncomeChange,
}))(MonthlyRentalIncome);