import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProviders';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handelLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto p-2 m-2">

                            <Link to='/'>Home</Link>

                            <NavLink
                            
                                to='/about'
                                aria-label='about'
                                title='about'
                                className={({ isActive }) => (isActive ? 'green' : 'red')}
                            >
                                About
                            </NavLink>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }}>
                            </FaUserCircle>


                            }

                            {user ?
                                <Button onClick={handelLogOut}
                                    variant="secondary">Logout</Button> :
                                <Link to='/login'>
                                    <Button variant="secondary">Login</Button>
                                </Link>


                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;