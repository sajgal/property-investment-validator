import React from 'react';
import { inject } from 'mobx-react';
import { Form, Input, InputNumber, Icon, Button } from 'antd';

let id = 0;

class MonthlyExpenses extends React.Component {
  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  onExpenseChange = (k, e) => {
    console.log('k, e', k, e);
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? 'Expenses' : ''}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {})(
          <span>
            <Input placeholder="expense label (optional)" style={{ width: '50%', marginRight: 8 }} />
            <InputNumber placeholder="expense amount" style={{ width: '45%', marginRight: 8 }} onChange={(e) => this.onExpenseChange(k, e)} />
          </span>
        )}

        {/* {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input expenses or delete this field.",
            },
          ],
        })(<span><Input placeholder="expense label" style={{ width: '50%', marginRight: 8 }} /><InputNumber placeholder="expense amount" style={{ width: '45%', marginRight: 8 }} onChange={this.onExpenseChange} /></span>)} */}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));
    return (
      <span>
        {formItems}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> Add expense
          </Button>
        </Form.Item >
      </span>
    );
  }
}

export default inject(stores => ({
  onPurchasePriceChange: stores.rootStore.investmentStore.onPurchasePriceChange,
}))(MonthlyExpenses);