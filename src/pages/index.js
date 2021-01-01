import React, { useState } from "react";
// import { Link } from "gatsby"

// import Image from "../components/image"
import SEO from "../components/seo"
import Quiz from '../components/quiz/Quiz'
import LandingPage from '../components/landing';

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO title="Manual - Bed Good To Yourself - Take The Quiz" />
      <LandingPage />
    </React.Fragment>
  );
}

export default IndexPage
