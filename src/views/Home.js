import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <h2 className="my-5 text-center">Daily Essentials</h2>
    <Content />
  </Fragment>
);

export default Home;
