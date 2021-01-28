import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Navbar, Nav, NavDropdown, Button, NavbarBrand, NavbarProps, NavItem, NavLink } from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll"



class CustomNavbar extends Component {
    render() {

        <Navbar fixed='top' />

        return (
            <div className="navbarDiv"  >

                

                 <Nav className="NavigationItems" >
                
                    <Nav.Item>
                        
                        <Nav.Link  href="#home" smooth={true}>HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  href ="#allBooks" smooth={true} duration={200}>ALL BOOKS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#inputBooks" >ADD BOOKS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  href="#contactusDiv" >CONTACT US </Nav.Link>
                                                                     
                    </Nav.Item>
                </Nav> 

                


            </div>
        )
    }
}
export default CustomNavbar;