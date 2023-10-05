import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import Layout from '../components/layout';
import About from '../components/sections/about';


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
     <About/>
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
