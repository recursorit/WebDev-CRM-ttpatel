//-->This is UserLogin component which users will came across initially(landing page)for login purpose.
//-->In this we have used different library like---->react-icons(for including icons in file) and  reaact-bootstrap(for including different bootstrap components.)
//-->{Link} is used for redirecting users to UserRegistration component.

import React, { useState, useEffect } from "react";
import { BsLock } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Row, Col, Button, FormControl, InputGroup, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, userLogin } from "./redux/actions";
import { useHistory } from "react-router-dom";


function UserLogin() {
  //Checking localStorage
  var user = localStorage.getItem("currentUser")


  const dispatch = useDispatch();
  const history = useHistory();
  // const currentUserSelector = useSelector((state) => state.loguser);
  // console.log(user)
  if (user != undefined) {
    console.log("inside IDFFF")
    dispatch(userLogin(JSON.parse(user)));
    history.push(`/dashboard`);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateemail, setValidateEmail] = useState(false);
  const [validatepass, setValidatePass] = useState(false);

  const userList = useSelector((state) => state.users.users);
  // const updateIndex = () => dispatch(updateUser(currentUserSelector.currentuser))


  const handleLogin = () => {
    for (var i = 0; i < userList.length; i++) {
      if (
        email === userList[i].email &&
        // password === userList[i].password &&
        btoa(password) === userList[i].password &&
        "active" === userList[i].status
      ) {
        // eslint-disable-next-line
        dispatch(userLogin(userList[i]));
        localStorage.setItem('currentUser', JSON.stringify(userList[i]));

        // updateIndex(), localStorage.setItem('logged-in', true), localStorage.setItem('currentuser', email),
        history.push(`/dashboard`);
      }
      else {
        // eslint-disable-next-line
        setValidateEmail(true),
          setValidatePass(true)
      }
    }
  }



  return (
    <Row className="justify-content-center mt-5">
      <code className="text-center  fw-bold display-3 text-dark">
        Welcome to Login Page
      </code>
      <Col xs={12} md={6} lg={8} className="login">
        <Card style={{ width: "100%", height: "20rem" }}>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Card.Body>
                <Card.Title className="fw-bold fs-3 mx-2 mt-3">
                  Login
                </Card.Title>
                <p className=" mx-2">Sign In to your account</p>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Email-Id"
                    type="email"
                    isInvalid={validateemail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                {validateemail ? (
                  <Card.Text className="text-danger mb-1">
                    *Please enter valid email.
                  </Card.Text>
                ) : null}
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <BsLock size="1.5rem" color="red" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Password"
                    type="password"
                    value={password}
                    isInvalid={validatepass}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
                {validatepass ? (
                  <Card.Text className="text-danger mb-1">
                    *Please enter valid password.
                  </Card.Text>
                ) : null}
                <Row className="justify-content-center">
                  <Col xs={3} md={3} lg={3}>
                    <Button
                      className="btn-sm btn-dark px-3"
                      disabled={!email || !password}
                      onClick={() => handleLogin()}
                    >
                      Login
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Card.Body
                className="bg-secondary text-white"
                style={{ height: "20rem" }}
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
                  <Col xs={5} md={4} lg={4}>
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

export default UserLogin;
