import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'


export default function Navigation() {
    const {currentUser} = useAuth();

    return (
        <Navbar variant="dark" bg="dark" expand="md">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav className="mr-auto">
                        {currentUser && 
                            <>
                            <Nav.Link href="/">To Do Items</Nav.Link>
                            <Nav.Link href="/categories">Categories</Nav.Link>
                            </>
                        }
                        <Nav.Link href="/bootstrap">Bootstrap</Nav.Link>
                        {!currentUser && <Nav.Link href="/Login">Login</Nav.Link>}                        
                    </Nav>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
