import 'antd/dist/antd.css';
import { configure } from 'mobx';
import { Layout } from 'antd';
import { Provider } from 'mobx-react';
import React from 'react';

import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import RootStore from './Stores/RootStore';

configure({ enforceActions: "observed" });

function App() {
  return (
    <Provider rootStore={new RootStore()}>
      <Layout className="layout">
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Provider>
  );
}

export default App;
