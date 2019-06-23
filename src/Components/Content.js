import React from 'react';
import { Layout } from 'antd';
import InvestmentForm from './InvestmentForm';

const Content = () => {
  return (
    <Layout.Content style={{ padding: '50px' }}>
      <InvestmentForm />
    </Layout.Content>
  );
};

export default Content;