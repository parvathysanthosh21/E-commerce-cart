import React from 'react'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}><i class="fa-solid fa-truck-fast me-2"></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded btn-warning'>
              <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'black' }}><i class="me-2 fa-solid fa-heart text-danger"></i>
                Whishlist
              </Link>
              <Badge className='ms-2 rounded' bg="dark">10</Badge>
            </Nav.Link>

            <Nav.Link className='btn border rounded btn-warning ms-2'>
              <Link to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}><i class="me-2 fa-solid fa-cart-shopping text-warning"></i>
                Cart
              </Link>
              <Badge className='ms-2 rounded' bg="dark">10</Badge>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header