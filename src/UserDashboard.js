import React, { useState } from "react";
import { Row, Col, Navbar, Nav, Table, Container, NavDropdown, Card, CardGroup, Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, useHistory } from 'react-router';
import { editAdmin, deleteUser, userLogin } from './redux/actions'
import { BiPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const UserDashboard = () => {
  const history = useHistory()
  const [modal, setModal] = useState(false)

  // var currentUserSelector1 = useSelector((state) => state.loguser);
  // console.log(user)
  // console.log(currentUserSelector1.currentuser)
  // if (currentUserSelector1.currentuser == 0) {
  //   console.log('in if block')
  //   history.push('/')
  // }
  // console.log('if passed --problem here')
  const userList = useSelector((state) => state.users.users);

  const dispatch = useDispatch()
  // const index = useSelector(state => state.index.currentuser)
  // const index = userList.findIndex(obj => obj.email === currentUserSelector.currentuser.email)
  const index = useSelector(state => state.index)
  // prevents from refresh 
  var user = localStorage.getItem("currentUser")
  if (user != undefined) {
    dispatch(userLogin(JSON.parse(user)));
  }
  // console.log('outside')
  const currentUserSelector = useSelector((state) => state.loguser);
  console.log(currentUserSelector)
  console.log(userList)
  console.log(index)
  console.log(userList[0])
  console.log(userList[0].role)
  console.log(currentUserSelector.currentuser.email)
  console.log(currentUserSelector.currentuser.role)
  return (
    <Container fluid className='m-0 p-0'>
      <Navbar className=" bg-dark  p-3" expand='lg'>
        <Navbar.Brand className="text-info fs-4 px-3" href="/dashboard"> Welcome to Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className=" mr-auto flex-column vertical-nav text-center fs-5 active" variant='tabs' defaultActiveKey='/dashboard' activeKey="/dashboard">

            <Nav.Link onClick={() => history.push(`/dashboard`)} className='text-light'>UserDashboard</Nav.Link>
            <Nav.Link onClick={() => history.push(`/dashboard/users`)} className='text-light'>Users</Nav.Link>
            {/*  <Nav.Link onClick={() => history.push(`/dashboard/${currentUserSelector.currentuser.email}`)} className='text-light'>Users</Nav.Link> */}
            <Nav.Link onClick={() => history.push(`/dashboard/project`)} className='text-light'>Project</Nav.Link>
            <Nav.Link onClick={() => history.push(`/dashboard/category`)} className='text-light' >Category</Nav.Link>

          </Nav>
          <Row>
            <Col xs={2} className='p-0'>
              <Nav >
                <NavDropdown className='dropdown' title={currentUserSelector.currentuser.firstname} bsPrefix="text-info mx-5 px-5">
                  {/* <NavDropdown.Item onClick={() => history.push(`/edit`)}> <BiPencil size='1.3rem' className='mx-1' />{currentUserSelector.currentuser.email} </NavDropdown.Item>  */}
                  {/* <NavDropdown.Divider />  */}
                  <NavDropdown.Item onClick={() => { history.push('/'); localStorage.removeItem("currentUser") }}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Navbar>
      <Col xs={10} lg={12} className='table' >
        <Switch>
          <Route path='/dashboard' exact>
            <CardGroup className=' text-dark cardstyle' style={{ width: '90%' }}>
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
            </CardGroup>
          </Route>
          <Route path='/dashboard/users' exact>
            <p className='text-dark mt-3 fs-2'>Users</p> {userList[0].role === 'admin' ? <Button className='mb-2' variant="outline-dark" onClick={() => history.push('/addbyadmin')}>Add User</Button> : null}
            <Table striped bordered hover responsive className='tableone' >
              <thead>
                <tr>
                  <th> Name</th>
                  <th>Email</th>
                  <th>DOJ</th>
                  <th>Role</th>
                  <th>Status</th>
                  {/* {currentUserSelector.currentuser.role === 'admin' ? <th>Edit</th> : null} 
     {userList[0].role === 'admin' ? <th>Edit</th> : null}  */}
                  <th>Edit</th>
                  {userList[0].role === 'admin' ? <th>Delete</th> : null}
                </tr>
              </thead>
              <tbody>
                {
                  userList.map(user => {
                    return (
                      <tr key={user}>
                        <td>{user.firstname} {user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.registrationDate}</td>
                        <td>{user.role}</td>
                        <td>{user.status}</td>
                        {userList[0].role === 'admin' ? <td><BiPencil onClick={() => { return (history.push(`/admin`), dispatch(editAdmin(user.index))) }} /></td> : null}
                        {userList[0].role === 'admin' ?
                          <td>{user.role === 'admin' ? <MdDelete /> : <MdDelete onClick={() => setModal(true)} />}</td> : null}
                        <Modal show={modal} onHide={() => setModal(false)}>
                          <Modal.Header>
                            <Modal.Title>Confirm Action?</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Are you sure you want to delete?
                           </Modal.Body>
                          <Modal.Footer>
                            <Button className='btn-success' onClick={() => setModal(false)}>
                              Close
                                    </Button>
                            <Button className='btn-danger' onClick={() => { dispatch(deleteUser(user.index)); setModal(false) }}>Delete</Button>
                          </Modal.Footer>
                        </Modal>
                      </tr>)
                  })
                }
              </tbody>
            </Table>

          </Route >
          <Route path='/dashboard/project' exact>
            <p className='text-dark mt-3 fs-2'>Project</p>
          </Route>
          <Route path='/dashboard/category' exact>
            <p className='text-dark mt-3 fs-2'>Categories</p>
          </Route>
        </Switch>

      </Col>
    </Container>
  );
};


export default UserDashboard;
