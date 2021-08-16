import React, {useState} from "react";
import { GlobalStyles } from "./styles";
import { Navbar, Footer, Button } from "./components";
import { Home, Contact } from "./views";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RoutesComponent from './route/RoutesComponent'

const App = () => {
  const [breadCrumbText, setBreadCrumbText] = useState('')
  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar breadCrumbText={breadCrumbText} logo={<FontAwesomeIcon size="3x" icon={faCoffee} />} />
        <Switch>
            <RoutesComponent breadCrumbText={breadCrumbText} setBreadCrumbText={setBreadCrumbText} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
