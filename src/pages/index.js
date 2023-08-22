import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Experience } from 'components/landing';

export default () => (
  <Layout>
    <Intro />
    <Projects />
    <Skills />
    <Experience />
  </Layout>
);

export const Head = () => (
  <SEO />
)
