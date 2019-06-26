import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
  color: #fff;
  @import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz');
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 2em;
  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 1.5em;
  }

  @media (max-width: 250px) {
    font-size: 1.2em;
  }

`;

const Header = () => {
  return (
    <Layout.Header>
      <HeaderTitle>Property Investment Validator</HeaderTitle>
    </Layout.Header>
  );
};

export default Header;