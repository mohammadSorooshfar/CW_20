// import React from 'react';
// import {Nav, Navbar, NavItem} from "react-bootstrap";
// import {Link} from "react-router-dom";
//
// function Header() {
//     return (
//         <Navbar bg={'light'} >
//             <Nav
//                 activeKey="/home"
//                 onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
//             >
//                 <NavItem>
//                     <Link to="/Index">Active</Link>
//                 </NavItem>
//                 <NavItem>
//                     <Link to="/AccountManagment">Link</Link>
//                 </NavItem>
//                 <NavItem>
//                     <Link to="/Index">Link</Link>
//                 </NavItem>
//             </Nav>
//         </Navbar>
//     );
// }
//
// export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

function BasicExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'}>Services</Nav.Link>
                         <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;