import React, {useState} from 'react'
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsLock } from "react-icons/bs";
import { Row, Col, Button, FormControl, InputGroup, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUser } from "./redux/actions";

function Admin() {

    
    // const currentUserSelector = useSelector((state) => state.loguser);
    const userList = useSelector((state) => state.users.users);
    const history = useHistory()
    const index = useSelector(state => state.editadmin.index)
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
                password: password,
                index: index,
                role: role,
                status: status
            })
        );
        return email.includes('@' && '.com') ? (setEmailvalid(false), ((password.length > 5) ?
            history.push("/") : setPasswordvalid(true))) : setEmailvalid(true)
    };


    return (
        <Row className="justify-content-center mt-5">
            <code className="text-center  fw-bold display-3 text-dark">
                Welcome to Registration Page
        </code>
            <Col xs={12} md={7} lg={7} className="register justify-content-center">
                <Card style={{ width: "100%", height: "27rem" }}>
                    <Card.Title className="fw-bold fs-2 mx-3 mt-3">Edit{userData.email}</Card.Title>
                    <Card.Text className="mx-3">Create your account</Card.Text>
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
                                            required=''
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
                                            required
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
                                {emailvalid ? <Card.Text className='text-danger'>Entet valid emailid.</Card.Text> : null}
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
                                {passwordvalid ? <Card.Text className='text-danger'>Entet valid password.</Card.Text> : null}
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder='Role'
                                    type="text"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
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
                                        className="text-nowrap text-white mt-3 mb-3"
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
    )
}


export default Admin
