import React from 'react';
import { Form, InputNumber, Icon, Tooltip } from 'antd';
import { inject } from 'mobx-react';

const RehabBudget = (props) => {
  return (
    <Form.Item label={
      <span>
        Rehab Budget&nbsp;
        <Tooltip title="Cost of renovations.">
          <Icon type="question-circle-o" />
        </Tooltip>
      </span>
    }>
      <InputNumber
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={rehabBudget => props.onRehabBudgetChange(rehabBudget)}
        style={{ width: "100%" }}
      />
    </Form.Item>

  );
};

export default inject(stores => ({
  onRehabBudgetChange: stores.rootStore.investmentStore.onRehabBudgetChange,
}))(RehabBudget);