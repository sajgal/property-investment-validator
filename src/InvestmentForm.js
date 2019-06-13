import React from 'react';
import { Form, Icon, Input, Button, Tooltip } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class InvestmentForm extends React.Component {
  // componentDidMount() {
  //   // To disabled submit button at the beginning.
  //   this.props.form.validateFields();
  // }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Form.Item
          label={
            <span>
              Property address{' '}
              <Tooltip title="Where's the property located?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your address!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
};

export default Form.create({ name: 'investment_form' })(InvestmentForm);