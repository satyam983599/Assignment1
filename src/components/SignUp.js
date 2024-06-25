import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="signup-box p-4 mt-5 border rounded">
            <h2 className="text-center mb-4">Create Account</h2>
            <Form>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Create Account
              </Button>

              <hr />

              <Button variant="outline-primary" type="button" className="w-100 mb-2">
                Sign up with Facebook
              </Button>

              <Button variant="outline-danger" type="button" className="w-100">
                Sign up with Google
              </Button>
            </Form>
            <p className="text-center mt-3">
              Already have an account? <a href="#signin">Sign In</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
