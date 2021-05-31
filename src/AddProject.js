import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row,NavDropdown,Nav,Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory,Route,Switch } from 'react-router'
import { addProject } from './redux/projectAction'


const AddProject = () => {
    var currentUserSelector = useSelector((state) => state.loguser);
    const [project, setProject] = useState("")
    const [developer, setDeveloper] = useState("")
    const [category, setCategory] = useState("")

    const userList = useSelector(state => state.users.users)
    const categories = useSelector(state => state.category.categories)


    const dispatch = useDispatch()
    const history = useHistory()



    return (
        <Container fluid className='m-0 p-0'>
            <Navbar className=" bg-dark  p-3" expand='lg'>
                <Navbar.Brand className="text-info fs-4 px-3" href="/#">Welcome(admin)</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className=" mr-auto flex-column vertical-nav text-center fs-5 active" variant='tabs' defaultActiveKey='/dashboard' activeKey="/dashboard">
                        <Nav.Link onClick={() => history.push(`/dashboard`)} className='text-light'>UserDashboard</Nav.Link>
                        <Nav.Link onClick={() => history.push(`/dashboard/users`)} className='text-light'>Users</Nav.Link>
                        <Nav.Link onClick={() => history.push(`/dashboard/project`)} className='text-light'>Project</Nav.Link>
                        <Nav.Link onClick={() => history.push(`/dashboard/category`)} className='text-light' >Category</Nav.Link>

                    </Nav>
                    <Row>
                        <Col xs={2} className='p-0'>
                            <Nav >
                                <NavDropdown className='dropdown' title={currentUserSelector.currentuser.firstname} bsPrefix="text-info mx-5 px-5">

                                    <NavDropdown.Item onClick={() => history.push('/')}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Navbar>
            <Col xs={12} lg={12} className='table' >
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
            <Row className=" pt-2 justify-content-center">
                <Col xs={10} lg={5} className="p-0 mt-5">
                    <Card className="category " style={{ width: "130%", height: "28rem" }} >
                        <Card.Body>
                            <Card.Text className="fs-2">Add Project</Card.Text>
                            <Form className="px-4">
                                <Form.Group as={Row} >
                                    <Form.Label column sm="12" className=" ">
                                        Project Name :
                </Form.Label>
                                    <Col sm="12">
                                        <Form.Control type="text" placeholder="Projectname"
                                            value={project} onChange={e => setProject(e.target.value)} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} >
                                    <Form.Label column sm="12" className=" ">
                                        Developer :
                </Form.Label>
                                    <Col sm="12">

                                        <Form.Control as="select"
                                            value={developer} onChange={e => setDeveloper(e.target.value)} >
                                            <option></option>
                                            {userList.map(user =>
                                                <option key={user.index} value={user.firstname}>{user.firstname}</option>
                                            )}
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} >
                                    <Form.Label column sm="12" className="text-dark">
                                        Category :
                </Form.Label>
                                    <Col sm="12">
                                        <Form.Control as="select"
                                            value={category} onChange={e => setCategory(e.target.value)} >
                                            <option></option>
                                            {categories.map(category =>
                                                <option key={category.index} value={category.category}>{category.category}</option>)}
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                <Button disabled={!project || !developer || !category}
                                    onClick={() => (dispatch(addProject({
                                        projectname: project,
                                        developer: developer,
                                        category: category
                                        // eslint-disable-next-line
                                    })), history.push("/dashboard/project"))}
                                    variant="outline-dark" className="mt-3">Add Project</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AddProject