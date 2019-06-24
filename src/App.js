import 'antd/dist/antd.css';
import { configure } from 'mobx';
import { Layout } from 'antd';
import { Provider } from 'mobx-react';
import React from 'react';
import { createGlobalStyle } from 'styled-components'

import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import RootStore from './Stores/RootStore';

configure({ enforceActions: "observed" });

const GlobalStyle = createGlobalStyle`
  body {
    background: #f0f2f5 !important;
  }
`

function App() {
  return (
    <Provider rootStore={new RootStore()}>
      <Layout className="layout">
        <GlobalStyle />
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Provider>
  );
}

export default App;
