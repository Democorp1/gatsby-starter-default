import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h3>Hi from the second page</h3>
    <p>Welcome to page 2</p>
    <Link to="/">Go back </Link>
  </Layout>
)

export default SecondPage
