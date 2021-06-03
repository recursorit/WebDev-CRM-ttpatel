import React, { useEffect, useState } from 'react'
import { Button, Modal, Table, Row, Col } from 'react-bootstrap'
import { projectIndex, removeProject } from './redux/projectAction'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { MdDelete } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
function Project() {

    const projects = useSelector(state => state.project.projects)
    const history = useHistory()
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [modals, setModals] = useState(false)


    const userList = useSelector(state => state.users.users)
    const index = useSelector(state => state.loguser.currentuser)

    var currentUserSelector = useSelector((state) => state.loguser);
    const userData = userList[index]
    console.log(userData)
    console.log(currentUserSelector.currentuser.role)
    console.log(currentUserSelector.currentuser.firstname)
    const deleteAction = localStorage.getItem('delete request')

    const deleteId = localStorage.getItem('deleteId')



    useEffect(() => {
        return currentUserSelector.currentuser.role === 'admin' ? deleteAction === 'true' ? setModals(true) : null : null
        // eslint-disable-next-line
    }, [])
    return (
        <Row >
            <Col xs={11} lg={10} className='tablecategory' >
                <Table striped bordered hover className="">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Created On</th>
                            <th>Developed By</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Technology</th>
                            <th>Total Time(hours)</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.map(project => currentUserSelector.currentuser.role === 'admin' ? <tr key={project.index}>
                            <th>{project.projectname}</th>
                            <th>{project.created}</th>
                            <th>{project.developer}</th>
                            <th>{project.category}</th>
                            <th>{project.type}</th>
                            <th>{project.technology}</th>
                            <th>{project.totalworkinghrs}</th>

                            <th><BiPencil
                                // eslint-disable-next-line
                                onClick={() => (dispatch(projectIndex(project.index)), history.push("/editproject"))} /></th>
                            {currentUserSelector.currentuser.role !== 'admin' ? <th><MdDelete
                                // eslint-disable-next-line
                                onClick={() => { setModal(true), localStorage.setItem('delete request', true), localStorage.setItem('deleteId', project.index) }} /></th> :
                                <th><MdDelete onClick={() => setModal(true)} /></th>}

                            <Modal show={modal} onHide={() => setModal(false)}>
                                <Modal.Header >
                                    <Modal.Title>Confirm Action</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{currentUserSelector.currentuser.role !== 'admin' ? 'Your request for DELETE is sent!!!' : 'Are you sure you want to remove this Project?'}</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="success" onClick={() => setModal(false)}>
                                        Close
                                    </Button>
                                    {currentUserSelector.currentuser.role !== 'admin' ? null :
                                        <Button variant="danger" onClick={() => { dispatch(removeProject(project.index)); setModal(false) }}>
                                            Delete
                                    </Button>}
                                </Modal.Footer>
                            </Modal>

                            <Modal show={modals} onHide={() => setModals(false)}>
                                <Modal.Header >
                                    <Modal.Title>Action Required.</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Users request for deletion of project - "{project.projectname}"</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="success" onClick={() => setModals(false)}>
                                        Close
                                    </Button>
                                    <Button variant="danger" onClick={() => { dispatch(removeProject(parseInt(deleteId))); setModals(false); localStorage.setItem('delete request', false) }}>
                                        OK
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </tr> :


                            project.developer === currentUserSelector.currentuser.firstname ?
                                <tr key={project.index}>
                                    <th>{project.projectname}</th>
                                    <th>{project.created}</th>
                                    <th>{project.developer}</th>
                                    <th>{project.category}</th>
                                    <th>{project.type}</th>
                                    <th>{project.technology}</th>
                                    <th>{project.totalworkinghrs}</th>
                                    <th><BiPencil

                                        // eslint-disable-next-line
                                        onClick={() => (dispatch(projectIndex(project.index)), history.push('/editproject'))} /></th>
                                    {currentUserSelector.currentuser.role !== 'admin' ? <th><MdDelete

                                        // eslint-disable-next-line
                                        onClick={() => { setModal(true), localStorage.setItem('delete request', true); localStorage.setItem('deleteId', project.index) }} /></th> :

                                        <th><MdDelete onClick={() => setModal(true)} /></th>}
                                    <Modal show={modal} onHide={() => setModal(false)}>
                                        <Modal.Header >
                                            <Modal.Title>Confirm Action</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>{currentUserSelector.currentuser.role !== 'admin' ? 'Your request for DELETE is sent!!!' : 'Are you sure you want to remove this Project?'}</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="warning" onClick={() => setModal(false)}>
                                                Close
                                    </Button>
                                            {currentUserSelector.currentuser.role !== 'admin' ? null :
                                                <Button variant="danger" onClick={() => { dispatch(removeProject(project.index)); setModal(false) }}>
                                                    Delete
                                    </Button>}
                                        </Modal.Footer>
                                    </Modal>

                                    <Modal show={modals} onHide={() => setModals(false)}>
                                        <Modal.Header >
                                            <Modal.Title>Action Required.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Users request for deletion of project.</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="success" onClick={() => setModals(false)}>
                                                Close
                                    </Button>
                                            <Button variant="danger" onClick={() => { dispatch(removeProject(parseInt(deleteId))); setModals(false); localStorage.setItem('delete request', false) }}>
                                                Ok
                                    </Button>
                                        </Modal.Footer>
                                    </Modal>

                                </tr> : null

                        )}

                    </tbody>
                </Table>
            </Col>
        </Row >
    )
}

export default Project
