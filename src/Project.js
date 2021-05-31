import React, { useState } from 'react'
import { Button, Modal, Table ,Row,Col} from 'react-bootstrap'
import {  BiPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { projectIndex, removeProject } from './redux/projectAction'
function Project() {

    const projects = useSelector(state => state.project.projects)
    const history = useHistory()
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)

    return (
        <Row >
        <Col xs={11} lg={8} className='tablecategory' >
        <Table striped bordered hover className="">
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Created On</th>
                    <th>Developed By</th>
                    <th>Category</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {projects.map(project => <tr key={project.index}>
                    <th>{project.projectname}</th>
                    <th>{project.created}</th>
                    <th>{project.developer}</th>
                    <th>{project.category}</th>

                    <th><BiPencil
                        // eslint-disable-next-line
                        onClick={() => (dispatch(projectIndex(project.index)), history.push("/editproject"))} /></th>
                    <th><MdDelete onClick={() => setModal(true)} /></th>

                    <Modal show={modal} onHide={() => setModal(false)}>
                        <Modal.Header >
                            <Modal.Title>Confirm Action</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> Are you sure you want to remove this Project?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={() => setModal(false)}>
                                Close
                                    </Button>
                            <Button variant="danger" onClick={() => { dispatch(removeProject(project.index)); setModal(false) }}>
                                Delete
                                    </Button>
                        </Modal.Footer>
                    </Modal>
                </tr>)}
            </tbody>
        </Table>
        </Col>
        </Row >
    )
}

export default Project
