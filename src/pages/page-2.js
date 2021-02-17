import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar2';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const SecondPage = () => (
  <Layout>
    <Navbar />\
    <About />\
    <Team />
    <Faq />
    <Footer />
  </Layout>
);
export default SecondPage;
