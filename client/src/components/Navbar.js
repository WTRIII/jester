import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './Signup';
import LoginForm from './Login';

import Auth from '../utils/auth';
import '../App.css';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Navbar variant='dark' expand='lg' className="header">
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            {/* check this for accuracy */}
            Jester
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>

              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/Dashboard'>
                    {/* check this for accuracy */}
                    Dashboard
                  </Nav.Link>
                  <Nav.Link as={Link} to='/Profile'>
                    {/* check this for accuracy */}
                    Profile
                  </Nav.Link>
                  <Nav.Link as={Link} to='/CurrentJest'>
                    {/* check this for accuracy */}
                    Current Jests
                  </Nav.Link>
                  <Nav.Link as={Link} to='/PastJests'>
                    {/* check this for accuracy */}
                    Past Jests
                  </Nav.Link>
                  <Nav.Link as={Link} to='/Rules'>
                    {/* check this for accuracy */}
                    Rules
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Play</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </div>
  );
};

export default AppNavbar;