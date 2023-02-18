import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconLoader from '@components/icons/icon-loader.svg';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .logo-wrapper {
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      margin: 0 auto;
      fill: none;
      on-click: finishLoading();
      pointer-events: auto;
      #B {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />
        <div className="logo-wrapper" >
          <IconLoader onClick={() => finishLoading()}/>
        </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;