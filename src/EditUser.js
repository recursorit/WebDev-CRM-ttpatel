import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { updateUser } from './redux/actions'
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsLock } from "react-icons/bs";
import { Row, Col, Button, FormControl, InputGroup, Card, Form,FormLabel } from "react-bootstrap";


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

    const history = useHistory()
    const dispatch = useDispatch();

    const handleRegister = () => {
        dispatch(
            updateUser({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                index: index,
                role: role,
                status: status
            })
        );
        return email.includes('@' && '.com') ? (setEmailvalid(false), ((password.length > 5) ?
            history.push("/dashboard") : setPasswordvalid(true))) : setEmailvalid(true)
    };

    return (
        <Row className="justify-content-center mt-5">
            <Col xs={12} md={7} lg={7} className="register justify-content-center">
                <Card style={{ width: "100%", height: "25rem" }}>
                    <Card.Title className="fw-bold fs-2 mx-3 mt-3">Edit Details</Card.Title>
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
                                {emailvalid ? <Card.Text className='text-danger'>Entet valid emailid.</Card.Text> : null}
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
                                {passwordvalid ? <Card.Text className='text-danger'>Entet valid password.</Card.Text> : null}
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
    )
}



export default EditUser
