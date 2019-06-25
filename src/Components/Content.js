import { Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';

import InvestmentForm from './InvestmentForm';
import Results from './Results';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-gap: 15px;

  @media (max-width: 768px) {
    grid-auto-flow: row;
    grid-template-columns: auto;
  }
`;

const GridResults = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const GridForm = styled.div`
  @media (max-width: 768px) {
    order: 1;
  }
`;

const Content = () => {
  return (
    <Layout.Content style={{ padding: '50px' }}>
      <Grid>
        <GridResults><Results /></GridResults>
        <GridForm><InvestmentForm /></GridForm>
      </Grid>
    </Layout.Content>
  );
};

export default Content;