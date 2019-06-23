import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
  color: #fff
`;

const Header = () => {
  return (
    <Layout.Header>
      <HeaderTitle>Property Investment Validator</HeaderTitle>
    </Layout.Header>
  );
};

export default Header;