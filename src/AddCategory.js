import React, { useState } from 'react'
import { Row, Col, Navbar, Nav, Container, NavDropdown, Card, Form, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { addCategory } from './redux/categoryAction'
import { Route, Switch } from 'react-router';
import { useSelector } from "react-redux";
function AddCategory() {
    var currentUserSelector = useSelector((state) => state.loguser);
    const [category, setCategory] = useState("")
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
            <Row className='justify-content-center mt-5'>
                <Col xs={10} lg={5} className='' >
                    <Card border="dark" className="category " style={{ width: "130%", height: "20rem" }} >
                        <Card.Body>
                            <Card.Text className="text-dark mx-4 fs-2">Add Category</Card.Text>
                            <Form className="px-4">
                                <Form.Group >
                                    <Form.Label column sm="12" className=" text-start ">
                                        Category Name :
                </Form.Label>
                                    <Col sm="12" className=''>
                                        <Form.Control type="text" placeholder="Add here."
                                            value={category} onChange={(e) => setCategory(e.target.value)} />
                                    </Col>
                                </Form.Group>

                                <Button disabled={!category}
                                    onClick={() => (dispatch(addCategory(category)), history.push("/dashboard/category"))}
                                    variant="outline-dark" className="mt-3">Add category</Button>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AddCategory
