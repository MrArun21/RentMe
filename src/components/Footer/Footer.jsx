import React from 'react'
import './footer.css'
import {Link} from "react-router-dom"
import {Container , Row ,Col ,ListGroup , ListGroupItem} from "reactstrap"

function Footer() {


const year =new Date().getFullYear();

  return (
<footer className='footer'>
  <Container>
    <Row>
      <Col lg='4' className='mb-4' >
      <div className='logo'>
            <div>
              <h1 className='text-white'>RentMe</h1>
              <p>since 2022</p>
            </div>
          </div>
          
          <p className="footer__text mt-4">
          This website RentMe provides
           the facility for both renter and rent
            to access the website as easily as they 
            could be.
            </p>
      </Col>

      {/* <Col lg='1' className='mb-4' md='6'>
        <div className="footer__quick-links">
          <h4 className="quick__link-title mt-4">Top Cate</h4>
          <ListGroup className='mb-3'>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'> Mobile Phones</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Modern Sofa</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'> Arm Chair</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'> Smart Watches</Link>
            </ListGroupItem>
          </ListGroup>
        </div>
     </Col> */}

     <Col lg='2' md='3' className='mb-4'>
      <div className="footer__quick-links">
          <h4 className="quick__link-title">Useful Links</h4>
          <ListGroup className='mb-3'>
          <ListGroupItem className='ps-0 border-0'>
              <Link to='/home'> Home</Link>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='/shop'> Shop</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='/cart'>Cart</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='/login'> Login</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Privacy Policy</Link>
            </ListGroupItem>
          </ListGroup>
        </div>
      </Col>

      <Col lg='3' md='3' className='mb-4'>
      <div className="footer__quick-links">
          <h4 className="quick__link-title">contact</h4>
          <ListGroup className='footer__contact'>
            <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
             <span><i class="ri-map-pin-line"></i></span>
             <p>123 Sukhliya,vijay Nagar , INDORE</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0  d-flex align-item-center gap-2'>
            <span><i class="ri-phone-line"></i></span>
             <p>+0881234567890</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0  d-flex align-item-center gap-2'>
            <span><i class="ri-mail-line"></i></span>
             <p>example123@gmail.com</p>
            </ListGroupItem>

          </ListGroup>
        </div>
      </Col>

      <Col lg='12'>
        <p className='footer__copyright'>Copyright {year} developed by Arun & Ayushi.All rights reserved. </p>
      </Col>
    </Row>
  </Container>
</footer>
  )
}

export default Footer
