import React, { Component } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.username = React.createRef()
    this.password = React.createRef()

    this.state = { username: null, password: null };
  }

  loginOnChange = (key) => {
    console.log(this.username.current.value)
    let newState = {}
    newState[key] = this[key].current.value;

    this.setState(newState);
  }

  logIn = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} sm={8} md={6} lg={6} >
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>LAN ID</Form.Label>
                  <Form.Control ref={this.username} type="text" placeholder="Enter LANID" onChange={() => this.loginOnChange('username')} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={this.password} type="password" placeholder="Password" onChange={() => this.loginOnChange('password')} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.logIn}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Login;