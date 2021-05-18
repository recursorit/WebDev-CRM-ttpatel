import React from "react";
import { Row, Col, Navbar, Nav, Table, Container, NavDropdown, Card, CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router';


const UserDashboard = () => {


  const currentUserSelector = useSelector((state) => state.loguser);
  console.log(currentUserSelector)
  const userList = useSelector((state) => state.users);
  const history = useHistory()
  const index = userList.indexOf(currentUserSelector.currentuser)
  console.log(index)



  return (
    <Container fluid className='m-0 p-0'>
      <Navbar className=" bg-dark  p-3" expand='lg'>
        <Navbar.Brand className="text-info fs-4 px-3" href="/#">UsersDashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className=" mr-auto flex-column vertical-nav text-center fs-5">
            <Nav.Link href="#dashboard" className='text-light'>Dashboard</Nav.Link>
            <Nav.Link className='text-light'>Project</Nav.Link>
            <Nav.Link className='text-light' >Category</Nav.Link>
          </Nav>
          <Row>
            <Col xs={2} className='p-0'>
              <Nav >
                <NavDropdown className='dropdown' title={currentUserSelector.currentuser.firstname} bsPrefix="text-info mx-5">
                  <NavDropdown.Item onClick={() => history.push(`/edit/${currentUserSelector.currentuser.email}`)}>{currentUserSelector.currentuser.email}</NavDropdown.Item>
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
              <Card.Text>1</Card.Text>
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
        <p className='text-dark mt-3 fs-2'>Users</p>
        <Table striped bordered responsive className='tableone' variant='dark'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>DOJ</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {
              userList.map(user => <tr key={user}>
                <th>{user.firstname}</th>
                <th>{user.lastname}</th>
                <th>{user.email}</th>
                <th>{user.registrationDate}</th>
                <th>{user.role}</th>
              </tr>)
            }
          </tbody>
        </Table>
      </Col>
    </Container>
  );
};

export default UserDashboard;
