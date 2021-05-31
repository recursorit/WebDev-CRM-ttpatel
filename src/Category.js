import React, { useState } from 'react'
import { Row, Col, Table, Modal, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { categoryIndex, removeCategory } from './redux/categoryAction'
import { BiPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
function Category() {

    const categories = useSelector(state => state.category.categories)
    // const [category, setCategory] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const [modal, setmodal] = useState(false)
    return (
        <Row >
            <Col xs={11} lg={8} className='tablecategory' >
                <Table striped bordered hover className='' >
                    < thead >
                        <tr>
                            {/* <td>SrNo.</td> */}
                            <th>Category</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead >

                    <tbody>
                        {categories.map(category => <tr key={category.index}>
                            {/* <td>{category.index}</td> */}
                            <td>{category.category}</td>
                            <td>{category.date}</td>
                            <td><BiPencil
                                onClick={() => (dispatch(categoryIndex(category.index)), history.push("/editcategory"))} /></td>
                            <td><MdDelete onClick={() => setmodal(true)} /></td>

                            <Modal show={modal} onHide={() => setmodal(false)}>
                                <Modal.Header >
                                    <Modal.Title>Confirm Action</Modal.Title>
                                </Modal.Header>
                                <Modal.Body> Are you sure you want to delete category?</Modal.Body>
                                <Modal.Footer>
                                    <Button  onClick={() => setmodal(false)}>
                                        Close
                                    </Button>
                                    <Button variant="danger" onClick={() => { dispatch(removeCategory(category.index)); setmodal(false) }}>
                                        Delete
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </tr>)}
                    </tbody>
                </Table >
            </Col>
        </Row >
    )
}

export default Category
