import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap';

class ContactUs extends Component {
    render() {
        return (
            <div className="contactusDiv">
                <h2 className="contactusHeader">Contact Us</h2>
                <div>
                    <br />
                    <br />
                    <Container >
                        <Row style={{position:"relative", justifyContent:"center"}}>

                            <Col style={{textAlign:"center",color:"rgba(2, 132, 199, 1)",fontSize:"large"}} md={3}>
                                10A,<br />
                                Kohuwala,<br />
                                Nugegoda.
                            </Col>
                            <Col style={{textAlign:"center",color:"rgba(2, 132, 199, 1)",fontSize:"large",paddingTop:"10px"}} md={3}>
                                0112356748 <br />
                                0112356749
                            </Col>

                            <Col style={{textAlign:"center",color:"rgba(2, 132, 199, 1)",fontSize:"large",paddingTop:"6px"}} md={3}>
                                cust@thereadable.lk <br />
                                hrdept@thereadable.lk      
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
export default ContactUs;