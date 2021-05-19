import React from "react";
import { Row, Col, Navbar, Nav, Table, Container, NavDropdown, Card, CardGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, useHistory } from 'react-router';
import { editAdmin } from './redux/actions'
import { BiPencil } from "react-icons/bi";
const UserDashboard = () => {

  const currentUserSelector = useSelector((state) => state.loguser);
  const userList = useSelector((state) => state.users.users);
  const history = useHistory()
  const index = userList.indexOf(currentUserSelector.currentuser)
  // const dispatch = useDispatch();
  console.log(currentUserSelector)
  console.log(userList)
  // console.log(userList[index].role)
  console.log(index)
  console.log(currentUserSelector.currentuser.email)
  console.log(currentUserSelector.currentuser.role)
  console.log(currentUserSelector.currentuser)
  return (
    <Container fluid className='m-0 p-0'>
      <Navbar className=" bg-dark  p-3" expand='lg'>
        <Navbar.Brand className="text-info fs-4 px-3" href="/#">UsersDashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className=" mr-auto flex-column vertical-nav text-center fs-5" >
            <Nav.Link onClick={() => history.push(`/dashboard/${currentUserSelector.currentuser.email}`)} className='text-light'>Users</Nav.Link>
            <Nav.Link onClick={() => history.push(`/dashboard/${currentUserSelector.currentuser.email}/project`)} className='text-light'>Project</Nav.Link>
            <Nav.Link onClick={() => history.push(`/dashboard/${currentUserSelector.currentuser.email}/category`)} className='text-light' >Category</Nav.Link>
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
        <CardGroup className=' text-light cardstyle' style={{ width: '90%' }}>
          <Card className='bg-dark mt-3 mx-3 cardheight' >
            <Card.Body >
              <Card.Title>Number of Users</Card.Title>
              <Card.Text>{userList.length}</Card.Text>
            </Card.Body>
          </Card>
          <Card className='bg-dark mt-3 mx-3  cardheight' >
            <Card.Body>
              <Card.Title>Number of Projects</Card.Title>
              <Card.Text>1</Card.Text>
            </Card.Body>
          </Card>
          <Card className='bg-dark mt-3 mx-3 cardheight'>
            <Card.Body>
              <Card.Title>Total Category</Card.Title>
              <Card.Text>1</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <Switch>
          <Route path='/dashboard/:username' exact>
            <p className='text-dark mt-3 fs-2'>Users</p>
            <Table striped bordered responsive className='tableone' variant='dark'>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>DOJ</th>
                  <th>Role</th>
                  <th>Status</th>
                  {/* {currentUserSelector.currentuser.role === 'admin' ? <th>Edit</th> : null} */}
                  {userList[index].role === 'admin' ? <th>Edit</th> : null}
                </tr>
              </thead>
              <tbody>
                {
                  userList.map(user => {
                    return (
                      <tr key={user}>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.registrationDate}</td>
                        <td>{user.role}</td>
                        <td>{user.status}</td>
                        {/* {userList[index].role === 'admin' ? <th><Button>Edit</Button></th> : console.log(false)} */}
                        {userList[index].role === 'admin' ? <td><BiPencil /></td> : null}
                      </tr>)
                  })
                }
              </tbody>
            </Table>
          </Route >
          <Route path='/dashboard/:username/project' exact>
            <p className='text-dark mt-3 fs-2'>Project</p>
          </Route>
          <Route path='/dashboard/:username/category' exact>
            <p className='text-dark mt-3 fs-2'>Categories</p>
          </Route>
        </Switch>

      </Col>
    </Container>
  );
};


export default UserDashboard;
