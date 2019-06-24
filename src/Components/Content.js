import React from 'react';
import { Layout, Row, Col } from 'antd';
import InvestmentForm from './InvestmentForm';
import Results from './Results';

const Content = () => {
  return (
    <Layout.Content style={{ padding: '50px' }}>
      <Row>
        <Col sm={24} md={5}><Results /></Col>
        <Col sm={24} md={19}><InvestmentForm /></Col>
      </Row>
    </Layout.Content>
  );
};

export default Content;