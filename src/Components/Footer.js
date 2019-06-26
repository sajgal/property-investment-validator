import React from 'react';
import { Layout, Divider, Icon } from 'antd';

const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      <Divider />
      &copy; {new Date().getFullYear()} &middot; Matej Sajgal &middot; <a href="https://github.com/roarbb/property-investment-validator" target="_blank" rel="noopener noreferrer"><Icon type="github" /> Source code</a>
    </Layout.Footer>
  );
};

export default Footer;