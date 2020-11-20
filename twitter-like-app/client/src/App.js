import React from "react";
import { Router } from "@reach/router";
import HomePage from "./containers/HomePage";
import NotFound from "./containers/NotFound";
import About from "./containers/About";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

// using reach router here
// can include static components like Footer in here
// "default" - 404
// "container" for pages
// "components" for smaller items to be used in a page

function App() {
  return (
    <>
      <Router basepath="/" className="router-wrapper">
        <HomePage path="/" />
        <About path="/about" />
        <NotFound default />
      </Router>

      <Footer />
    </>
  );
}

export default App;
