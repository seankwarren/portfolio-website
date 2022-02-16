import * as React from "react"

import Layout from "../components/layout"
import { GlobalStyle } from "@styles"

const IndexPage = () => (
  <>
  <GlobalStyle></GlobalStyle>
  <Layout>
    <div>404 Page not found</div>
  </Layout>
  </>
)

export default IndexPage