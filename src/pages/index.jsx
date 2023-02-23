import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Hero from 'components/pages/home/hero';

const HomePage = () => (
  <Layout>
    <Hero />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
