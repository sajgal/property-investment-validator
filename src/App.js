import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';

import InvestmentForm from './InvestmentForm';

const Wrapper = styled.section`
  width: 960px;
  margin: 4em auto;
`;

function App() {
  return (
    <Wrapper>
      <InvestmentForm />
    </Wrapper>
  );
}

export default App;
