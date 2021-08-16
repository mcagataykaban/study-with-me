import React from "react";
import { GlobalStyles } from "./styles";
import { Navbar, Footer, Button } from "./components";
import { Home, Contact } from "./views";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => {

  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar logo={<FontAwesomeIcon size="3x" icon={faCoffee} />} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
