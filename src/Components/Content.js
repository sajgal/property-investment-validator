import { Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';

import InvestmentForm from './InvestmentForm';
import Results from './Results';

const breakPoint = '768px';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-gap: 15px;
  max-width: 1080px;
  margin: 0 auto;

  @media (max-width: ${breakPoint}) {
    grid-auto-flow: row;
    grid-template-columns: auto;
  }
`;

const GridResults = styled.div`
  @media (max-width: ${breakPoint}) {
    order: 2;
  }
`;

const GridForm = styled.div`
  @media (max-width: ${breakPoint}) {
    order: 1;
  }
`;

const ContentWrapper = styled(Layout.Content)`
  padding: 30px;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <Grid>
        <GridResults><Results /></GridResults>
        <GridForm><InvestmentForm /></GridForm>
      </Grid>
    </ContentWrapper>
  );
};

export default Content;