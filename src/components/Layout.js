/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { ThemeUIProvider } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import { useThemedStylesWithMdx } from '@theme-ui/mdx';
import Prism from '@theme-ui/prism';
import '../css/main.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import theme from '../gatsby-plugin-theme-ui/theme';

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
};
const Layout = ({ children }) => {
  const [isOpen, toggle] = React.useReducer((state) => !state, false);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
