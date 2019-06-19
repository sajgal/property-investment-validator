import React from 'react';
import { configure } from 'mobx';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Provider } from 'mobx-react';

import RootStore from './Stores/RootStore';
import InvestmentForm from './InvestmentForm';

configure({ enforceActions: "observed" });

const Wrapper = styled.section`
  width: 960px;
  margin: 4em auto;
`;

function App() {
  return (
    <Provider rootStore={new RootStore()}>
      <Wrapper>
        <InvestmentForm />
      </Wrapper>
    </Provider>
  );
}

export default App;
