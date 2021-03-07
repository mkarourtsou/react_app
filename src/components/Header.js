import React, {Fragment} from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavLink} from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

const Header = (props) => {
    const { location } = props;

    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <Image src="/logo.svg" fluid/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={location.pathname} className="mr-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/category/lifestyle">LIFE STYLE</Nav.Link>
                    <Nav.Link href="/category/travel">TRAVEL</Nav.Link>
                    <Nav.Link href="/category/fashion">FASHION</Nav.Link>
                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;