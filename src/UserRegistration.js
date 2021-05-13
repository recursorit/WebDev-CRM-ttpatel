//-->This in UserRegistration component for registration purpose of new users to the system.
//-->In this we have used  library--->react-icons(for including icons in file).

import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsLock } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";

import {
  Row,
  Col,
  Button,
  FormControl,
  InputGroup,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
function UserRegistration() {
  return (
    <Row className="justify-content-center mt-5">
         <code className="text-center  fw-bold display-3 text-dark">
        Welcome to Registration Page
      </code>
      <Col xs={12} md={7} lg={7} className="register justify-content-center">
        <Card style={{ width: "100%", height: "27rem" }}>
          <Card.Title className="fw-bold fs-2 mx-3 mt-3">Register</Card.Title>
          <Card.Text className="mx-3">Create your account</Card.Text>
          <Card.Body>
            <Row>
              <Col xs={12} lg={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <BiUserCircle size="1.5rem" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" placeholder="Firstname" />
                </InputGroup>
              </Col>
              <Col xs={12} lg={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <BiUserCircle size="1.5rem" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" placeholder="Lastname" />
                </InputGroup>
              </Col>
            </Row>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <HiOutlineMail size="1.5rem" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl type="email" placeholder="Email" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <BsLock size="1.5rem" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Password" type="password" />
            </InputGroup>
            <Row className="justify-content-center">
              <Col xs={6} md={2} lg={2}>
                  <Link to='/dashboard'>
                <Button
                  className="text-nowrap text-white mt-3 mb-3"
                  variant="dark"
                >
                  Register
                </Button>
                  </Link>
              </Col>
            </Row>
            <Card.Footer className="bg-white">
              <Row className="justify-content-center">
                <Col xs={12} lg={2}>
                  {/* <Button className='btn-sm px-5'> */}
                  <FiFacebook size="2rem" color="blue" />
                  {/* </Button> */}
                </Col>
                <Col xs={12} lg={2}>
                  {/* <Button className='btn-sm px-5'> */}
                  <AiFillGithub size="2rem" />
                  {/* </Button> */}
                </Col>
                <Col xs={12} lg={2}>
                  {/* <Button className='btn-sm px-5'> */}
                  <FiTwitter size="2rem" color="blue" />
                  {/* </Button> */}
                </Col>
              </Row>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default UserRegistration;
