import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import Layout from '../components/layout';


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
     
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
