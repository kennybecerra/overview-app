import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Login from './components/Login/Login';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Reports from './components/Reports/Reports';

function App() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
          <Nav.Link as={NavLink} to='/overview'>Overview</Nav.Link>
          <Nav.Link as={NavLink} to='/workstation'>WorkStation</Nav.Link>
          <Nav.Link as={NavLink} to='/reports'>Reports</Nav.Link>
        </Nav>
      </Navbar>
      <Container fluid>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/overview' />
          <Route path='/reports' component={Reports} />
          <Route path='/workstation' />
          <Route path='/' component={Login} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
