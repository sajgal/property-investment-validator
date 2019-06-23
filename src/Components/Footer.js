import React from 'react';
import { Layout, Divider } from 'antd';

const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      <Divider />
      &copy; {new Date().getFullYear()} &middot; Matej Sajgal
    </Layout.Footer>
  );
};

export default Footer;