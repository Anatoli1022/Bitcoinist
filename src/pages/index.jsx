import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Hero from 'components/pages/home/hero';
import Business from 'components/pages/home/business';
import Information from 'components/pages/home/information';
import Advanced from 'components/pages/home/advanced';
import Templates from 'components/pages/home/Templates';
import Inside from 'components/pages/home/inside';
import Pricing from 'components/pages/home/pricing';
import Contact from 'components/pages/home/contact';
import Blog from 'components/pages/home/blog';
import Comments from 'components/pages/home/comments';
import Customers from 'components/pages/home/customers';
import Questions from 'components/pages/home/questions';

const HomePage = () => (
  <Layout>
    <Hero />
    <Business />
    <Information />
    <Advanced />
    <Templates />
    <Inside />
    <Pricing />
    <Contact />
    <Blog />
    <Comments />
    <Customers />
    <Questions />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
