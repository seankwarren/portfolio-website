import { Email, Loader, Nav, Social } from "@components"
import { GlobalStyle } from "@styles"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <>
      <div id="root">
        <GlobalStyle />  
        {isLoading ? (
          <Loader finishLoading={() => setIsLoading(!isLoading)} />
        ) : (
          <>
          <Nav></Nav>
          <Social></Social>
          <Email></Email>
          <div>
            <main>
              {children}
            </main>
            <footer />
          </div>
          </>
        )}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
