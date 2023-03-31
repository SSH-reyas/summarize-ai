// App.js

import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Design from './Design';
import Development from './Development';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#">SummarizeAI</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/about/design">
                  Design
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/development">
                  Development
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about/design">
              <About section="Design" />
            </Route>
            <Route path="/about/development">
              <About section="Development" />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/design">
              <Design />
            </Route>
            <Route exact path="/development">
              <Development />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
