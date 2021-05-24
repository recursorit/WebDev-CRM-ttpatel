import React, { useState } from 'react'
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsLock } from "react-icons/bs";
import { Row, Col, Button, FormControl, InputGroup, Card, Alert,  Nav, Navbar, Container, NavDropdown, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { updateUser } from "./redux/actions";
import { Route, Switch } from 'react-router';
import { BiPencil } from "react-icons/bi";

function Admin() {


    // const currentUserSelector = useSelector((state) => state.loguser);
    const currentUserSelector = useSelector((state) => state.loguser);
    const userList = useSelector((state) => state.users.users);
    const history = useHistory()
    const index = useSelector(state => state.admin.index)
    const userData = userList[index]
    const dispatch = useDispatch();


    const [firstname, setFirstName] = useState(userData.firstname)
    const [lastname, setLastName] = useState(userData.lastname)
    const [email, setEmail] = useState(userData.email)
    const [password, setPassword] = useState(userData.password)
    const [emailvalid, setEmailvalid] = useState(false)
    const [passwordvalid, setPasswordvalid] = useState(false)
    const [role, setRole] = useState(userData.role)
    const [status, setStatus] = useState(userData.status)



    const handleRegister = () => {
        dispatch(
            updateUser({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: btoa(password),
                index: index,
                role: role,
                status: status
            })
        );
        return email.includes('@' && '.com') ? (setEmailvalid(false), ((password.length > 5) ?
            history.push("/") : setPasswordvalid(true))) : setEmailvalid(true)
    };

    const logged = localStorage.getItem("loggedIn")
    if (logged === "false") {
        history.push(`/`)
    }
    return (
        <Container fluid className='m-0 p-0'>
            <Navbar className=" bg-dark  p-3" expand='lg'>
                <Navbar.Brand className="text-info fs-4 px-3" href="/#">UsersDashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className=" mr-auto flex-column vertical-nav text-center fs-5 active" variant='tabs' defaultActiveKey='/dashboard' activeKey="/dashboard">

                        <Nav.Link onClick={() => history.push(`/dashboard`)} className='text-light'>Users</Nav.Link>
                        {/* <Nav.Link onClick={() => history.push(`/dashboard/${currentUserSelector.currentuser.email}`)} className='text-light'>Users</Nav.Link> */}
                        <Nav.Link onClick={() => history.push(`/dashboard/project`)} className='text-light'>Project</Nav.Link>
                        <Nav.Link onClick={() => history.push(`/dashboard/category`)} className='text-light' >Category</Nav.Link>

                    </Nav>
                    <Row>
                        <Col xs={2} className='p-0'>
                            <Nav >
                                <NavDropdown className='dropdown' title={currentUserSelector.currentuser.firstname} bsPrefix="text-info mx-5">
                                    <NavDropdown.Item onClick={() => history.push(`/edit`)}> <BiPencil size='1.3rem' className='mx-1' />{currentUserSelector.currentuser.email} </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => history.push('/')}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Navbar>
            <Col xs={10} lg={12} className='table' >
                {/* <CardGroup className=' text-dark cardstyle' style={{ width: '90%' }}>
                    <Card className='bg-light mt-3 mx-3 cardheight' >
                        <Card.Body >
                            <Card.Title>Number of Users</Card.Title>
                            <Card.Text>{userList.length}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='bg-light mt-3 mx-3  cardheight' >
                        <Card.Body>
                            <Card.Title>Number of Projects</Card.Title>
                            <Card.Text>1</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='bg-light mt-3 mx-3 cardheight'>
                        <Card.Body>
                            <Card.Title>Total Category</Card.Title>
                            <Card.Text>1</Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup> */}
                <Switch>
                    <Route path='/dashboard/' exact>
                        <p className='text-dark mt-3 fs-2'>Users</p>
                    </Route >
                    <Route path='/dashboard/project' exact>
                        <p className='text-dark mt-3 fs-2'>Project</p>
                    </Route>
                    <Route path='/dashboard/category' exact>
                        <p className='text-dark mt-3 fs-2'>Categories</p>
                    </Route>
                </Switch>

            </Col>

            <Row className="justify-content-center ">
                <h2 className="text-center  fw-bold  text-dark">
                    admin edit
        </h2>
                <Col xs={12} md={7} lg={7} className="register justify-content-center">
                    <Card style={{ width: "100%", height: "31rem" }}>
                        {/* <Card.Title className="fw-bold fs-2 mx-3 mt-3">Edit{userData.email}</Card.Title> */}
                        <Card.Title className="fw-bold fs-2 mx-3 mt-3">Edit</Card.Title>
                        {emailvalid || passwordvalid ? <Alert variant='danger'>*Please enter valid email & password .</Alert> : null}
                        <Card.Body>
                            <Form noValidate className='needs-validation'>
                                <Row>
                                    <Col xs={12} lg={6}>
                                        <InputGroup
                                            className="mb-3"      >
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <BiUserCircle size="1.5rem" />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                type="text"
                                                placeholder="Firstname"
                                                autoComplete='off'
                                                value={firstname}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                            <div className='invalid-feedback'>  Please enter firstname</div>
                                        </InputGroup>
                                    </Col>
                                    <Col xs={12} lg={6}>
                                        <InputGroup
                                            className="mb-3"
                                        >
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <BiUserCircle size="1.5rem" />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                type="text"
                                                placeholder="Lastname"
                                                value={lastname}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter lastname
                      </Form.Control.Feedback>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <HiOutlineMail size="1.5rem" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {/* {emailvalid ? <Card.Text className='text-danger'>Entet valid emailid.</Card.Text> : null} */}
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <BsLock size="1.5rem" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Password(*Must be 8-20 characters long.)"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {/* {passwordvalid ? <Card.Text className='text-danger'>Entet valid password.</Card.Text> : null} */}
                                </InputGroup>
                                {/* <InputGroup className="mb-3">
                                    <FormLabel className='mx-3 mt-2'>Role-</FormLabel>
                                    <FormControl
                                        placeholder='Role'
                                        type="text"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    />
                                </InputGroup> */}
                                <Form>
                                    <Form.Group >
                                        <Form.Label>Role-</Form.Label>
                                        <Form.Control as="select"
                                            type="text"
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)} custom>
                                            <option></option>
                                            <option>admin</option>
                                            <option>user</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                                <Form>
                                    <Form.Group >
                                        <Form.Label>Status-</Form.Label>

                                        <Form.Check
                                            type="radio"
                                            value={status}
                                            label='active'
                                            onChange={() => setStatus('active')}>
                                        </Form.Check>
                                        <Form.Check
                                            type="radio"
                                            value={status}
                                            label='busy'
                                            onChange={() => setStatus('busy')}>
                                        </Form.Check>

                                    </Form.Group>
                                </Form>

                                {/* <InputGroup className="mb-3">
                                    <FormLabel className='mx-2 mt-2'>Status-</FormLabel>
                                    <FormControl
                                        placeholder="Status"
                                        type="text"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />

                                </InputGroup> */}
                                <Row className="justify-content-center">
                                    <Col xs={6} md={2} lg={2}>
                                        <Button
                                            className="text-nowrap text-white "
                                            variant="dark"
                                            disabled={!firstname || !lastname || !email || !password || !role || !status}
                                            onClick={handleRegister}
                                        >
                                            Update User
                    </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}


export default Admin
