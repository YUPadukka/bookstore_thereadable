import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Container from 'react-bootstrap'
import { Button, Row,Col } from 'react-bootstrap';

import firebase from '../configuarations/dbconfig';


const db = firebase.firestore();


class InputBooks extends Component {
    render() {
        return (
            <div className="inputbooksDiv">
                <Form className="addbookForm">
                    <h2 className="addbookHeader">Enter Book Details</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Book Name
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter the Book Name here" />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Author
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Author of the Book" />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Price
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Price of the Book" />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                ISBN
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="ISBN number can be found within the first pages of the Book" />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Username*
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Required Field" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Password*
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Required Field" />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Button className="addbookButton" variant="outline-primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
export default InputBooks;