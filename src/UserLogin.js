//-->This is UserLogin component which users will came across initially(landing page)for login purpose.
//-->In this we have used different library like---->react-icons(for including icons in file) and  reaact-bootstrap(for including different bootstrap components.)
//-->{Link} is used for redirecting users to UserRegistration component.

import React from "react";
import { BsLock } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  FormControl,
  InputGroup,
  Card,
} from "react-bootstrap";
function userLogin() {
  return (
    <Row className="justify-content-center mt-5">
      <code className="text-center  fw-bold display-3 text-dark">
        Welcome to Login Page
      </code>
      <Col xs={12} md={6} lg={8} className="login">
        <Card style={{ width: "100%", height: "18rem" }}>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Card.Body>
                <Card.Title className="fw-bold fs-3 mx-2 mt-3">
                  Login
                </Card.Title>
                <p className=" mx-2">Sign In to your account</p>
                <InputGroup className="mb-3">
                  <FormControl placeholder="Email-Id" type="email" />
                  <InputGroup.Text>@example.com</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <BsLock size="1.5rem" color="red" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="Password" type="password" />
                </InputGroup>
                <Row className="justify-content-center">
                  <Col xs={3} md={3} lg={3}>
                    <Button className="btn-sm btn-dark px-3">Login</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Card.Body
                className="bg-secondary text-white"
                style={{ height: "18rem" }}
              >
                <Card.Title className="text-center mt-3 fs-3">
                  Sign up
                </Card.Title>
                <Card.Text className="mt-5">
                  Not a existing user then click below button to register. OR
                  <br></br>
                  Already a user then continue with Login.
                </Card.Text>
                <Row className="justify-content-center">
                  <Col xs={6} md={3} lg={4}>
                    <Link to="/register">
                      <Button
                        className="text-nowrap text-white mt-3"
                        variant="secondary"
                      >
                        Register Now!
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default userLogin;
