import React, { Component } from 'react'
import { Container, Row, Col, Table, Alert } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';
import ReactDOM from 'react-dom'

import firebase from '../configuarations/dbconfig';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import bookDetails from './Home'
import swal  from 'sweetalert';


const db = firebase.firestore();


class AllBooks extends Component {

    state = {
        bookData: [],
        bName: '',
        author: '',
        price: '',
        isbn: '',
        usr:'',
        pw:''     
    }

    
    componentDidMount() {

        db.collection('bookDetails').get().then(data => {
            data.docs.forEach(doc => {
                this.setState({
                    bookData: [...this.state.bookData, doc.data()]
                })

                //console.log('Home', doc.data());
            })
        })

    }

    inputBName = (e) => {
        this.setState({
          bName: e.target.value
       })
       
    }
    inputAuthor = (e) => {
        this.setState({
            author: e.target.value
       })
       
    }
    inputPrice = (e) => {
        this.setState({
            price: e.target.value
       })
       
    }
    inputIsbn = (e) => {
            this.setState({
            isbn: e.target.value
       })
       
    }

    inputUsr = (e) => {
            this.setState({
                usr: e.target.value
            })
        }
    
    inputPw = (e) => {
        this.setState({
            pw: e.target.value
        })
    }
        
    
    submitData = (e) => {
        
        if (this.state.usr === 'bookadmin' && this.state.pw === 'pwdadmin'){
   
    db.collection('bookDetails').add({
            bName: this.state.bName,
            author: this.state.author,
            price: this.state.price,
            isbn: this.state.isbn
        })
    }
    else {
        swal({
            title: "Error",
            text: "Username or Password must be wrong",
            icon: "error",
            timer: 1000000,
            button:false
        }) 
    }
    
   }

 
    renderTableData() {
        return this.state.bookData.map((bookData, index) => {
            const { bName, author, price, isbn } = bookData //destructuring 
            return (
                <tr key={index}>
                    <td>{bName}</td>
                    <td>{author}</td>
                    <td>{price}</td>
                    <td>{isbn}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div id="allBooks">
                <div className="allbookDiv">
                    <Table id="books" className="allbookTable">
                        <thead className="allbookThead">
                            <tr>
                                <td>Book Name</td>
                                <td>Author</td>
                                <td>Price</td>
                                <td>ISBN</td>
                            </tr>
                        </thead>
                        <tbody>
                                {this.renderTableData()}

                        </tbody>
                    </Table>
                </div>

                
                 
                <div id="inputBooks">
                <Form className="addbookForm">
                    <h2 className="addbookHeader">Enter Book Details</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Book Name
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter the Book Name here" onChange={this.inputBName}/>
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Author
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Author of the Book" onChange={this.inputAuthor} />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Price
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Price of the Book" onChange={this.inputPrice} />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                ISBN
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="ISBN number can be found within the first pages of the Book" onChange={this.inputIsbn}/>
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Username*
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Required Field" onChange={this.inputUsr} />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Password*
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Required Field" onChange={this.inputPw}/>
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Button className="addbookButton" variant="outline-primary" type="submit" onClick={this.submitData}>
                        Submit
                    </Button>
                </Form>
            </div>


            </div>
        )
    }
}
export default AllBooks;