import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about/About";
import Main from "./components/Main";
import Contact from "./pages/contactForm/Contact";
import Appt from "./pages/appointmentForm/Appt";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
