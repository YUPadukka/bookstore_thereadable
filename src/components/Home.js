import React, { Component } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom'

import firebase from '../configuarations/dbconfig';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';

const db = firebase.firestore();


class Home extends Component {

    state = {
        bookData: [],
        bName: '',
        author: '',
        price: '',
        isbn: ''
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
    
    submitData = (e) => {
        e.preventDefault();

        //console.log(
            //this.state.bName,
            //this.state.author,
            //this.state.price,
            //this.state.isbn
                //)

         db.collection('bookDetails').add({
             bName: this.state.bName,
             author: this.state.author,
             price: this.state.price,
             isbn: this.state.isbn
         })       
    }

    render() {
        return (
            <div>
                <h1>Book Details</h1>
                {this.state.bookData.length ? (
                    this.state.bookData.map(item => {
                        return (
                            <div>
                                <p>{item.bName}</p>
                                <p>{item.author}</p>
                                <p>{item.price}</p>
                                <p>{item.isbn}</p>
                                <hr />
                            </div>
                        )
                    })
                ) : (<p>Loading</p>)}

                
                <div style={{width: '400px'}}>
               
                <Form onSubmit={this.submitData}>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control type="text" name="bName" placeholder="Enter Book Name" onChange={this.inputBName} />
                    </Form.Group>
                           
                    <Form.Group controlId="author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" name="author" placeholder="Enter Author" onChange={this.inputAuthor}  />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" placeholder="Enter Book Price" onChange={this.inputPrice} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="string" name="isbn" placeholder="Enter Book ISBN No." onChange={this.inputIsbn} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
            </div>
        )
    }
}
export default Home;





