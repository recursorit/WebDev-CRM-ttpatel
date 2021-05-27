import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { updateUser, storeUser } from './redux/actions'
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsLock } from "react-icons/bs";
import { Route, Switch } from 'react-router';
import { Row, Col, Navbar, Nav, Container, NavDropdown, InputGroup, Card, FormLabel, Form, FormControl, Button, Alert } from "react-bootstrap";


function EditUser() {


    const currentUserSelector = useSelector((state) => state.loguser);
    const userList = useSelector((state) => state.users.users);
    const index = userList.indexOf(currentUserSelector.currentuser)
    console.log(currentUserSelector)
    console.log(index)
    const userData = userList[index]
    console.log(userData)

    const [firstname, setFirstName] = useState(currentUserSelector.currentuser.firstname);
    const [lastname, setLastName] = useState(currentUserSelector.currentuser.lastname)
    const [email, setEmail] = useState(currentUserSelector.currentuser.email)
    const [password, setPassword] = useState(currentUserSelector.currentuser.password)
    const [emailvalid, setEmailvalid] = useState(false)
    const [passwordvalid, setPasswordvalid] = useState(false)
    const [role, setRole] = useState(currentUserSelector.currentuser.role)
    const [status, setStatus] = useState(currentUserSelector.currentuser.status)
    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmvalid, setConfirmvalid] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch();

    const handleRegister = () => {
        return (email.includes('@') && (email.indexOf('.') < (email.length - 2))) ? ((setEmailvalid(false), ((password.length > 5) && (password.match(confirmpassword))) ?
            (history.push("/"), dispatch(
                updateUser({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    confirmpassword: btoa(password),
                    password: btoa(password),
                    index: index,
                    role: role,
                    status: status
                })
            ), dispatch(storeUser())) : setPasswordvalid(true))) : setEmailvalid(true)
    };
    useEffect(() => {
        if (confirmpassword !== password) {
            setConfirmvalid(true)
        }
        else setConfirmvalid(false)
        // eslint-disable-next-line
    }, [confirmpassword])
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
                                    {/* <NavDropdown.Item onClick={() => history.push(`/edit`)}> <BiPencil size='1.3rem' className='mx-1' />{currentUserSelector.currentuser.email} </NavDropdown.Item>
                                    <NavDropdown.Divider /> */}
                                    <NavDropdown.Item onClick={() => history.push('/')}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Navbar>
            <Col xs={10} lg={12} className='table' >

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
                    user edit
        </h2>
                <Col xs={12} md={5} lg={5} className="register justify-content-center">
                    <Card style={{ width: "100%", height: "35rem" }}>
                        <Card.Title className="fw-bold fs-2 mx-3 mt-3">Edit Details</Card.Title>
                        {emailvalid || passwordvalid ? <Alert variant='danger' style={{ height: '40px' }}>*Please enter valid email & password .</Alert> : null}
                        {/* {passwordvalid ? <Alert variant='danger'>Please enter valid password.</Alert> : null} */}
                        <Card.Body>
                            <Form noValidate className='needs-validation'>
                                <Row>
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

                                            hasValidation
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
                                    {/* {<div className={`message ${validate ? 'success' : 'error'}`}>{message}</div>} */}
                                </InputGroup>
                                {/* {emailvalid ? <Card.Text className='text-danger'>Entet valid emailid.</Card.Text> : null} */}
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
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <BsLock size="1.5rem" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        isInvalid={confirmvalid}
                                        placeholder="Enter password again"
                                        type="password"
                                        value={confirmpassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </InputGroup>
                                {confirmvalid ? <Card.Text className='text-danger'>Enterd password does not match.</Card.Text> : null}
                                {/* {passwordvalid ? <Card.Text className='text-danger'>Entet valid password.</Card.Text> : null} */}
                                <InputGroup className="mb-3">
                                    <FormLabel className='mx-3 mt-2'>Role-</FormLabel>
                                    <FormControl
                                        placeholder='Role'
                                        type="text"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <FormLabel className='mx-2 mt-2'>Status-</FormLabel>
                                    <FormControl
                                        placeholder="Status"
                                        type="text"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                </InputGroup>
                                <Row className="justify-content-center">
                                    <Col xs={6} md={2} lg={2}>
                                        <Button
                                            className="text-nowrap text-white  "
                                            variant="dark"
                                            disabled={!firstname || !lastname || !email || !password || !role || !status}
                                            onClick={() => handleRegister()}
                                        >
                                            Confirm
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



export default EditUser
