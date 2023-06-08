import React ,{Component} from 'react'
import {Container ,Row ,Col , Form ,FormGroup} from "reactstrap"
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../Styles/checkout.css'
import {useSelector} from 'react-redux'
// import { ReactDOM } from 'react'
// import {Form ,FormGroup} from "react-dom"
function Checkout() {

const totalQty = useSelector(state =>state.cart.totalQuantity)
const totalAmount = useSelector(state=>state.cart.totalAmount)
  return (
   <Helmet title="checkout">
    <CommonSection title="checkout"/>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <h6 className='mb-4 fw-bold'>Billing Information</h6>
            <Form className="billing__form">
               <FormGroup className="form__group">
                 <input type="text" placeholder='Enter your name'/>
               </FormGroup>

               <FormGroup className="form__group">
                 <input type="email" placeholder='Enter your email'/>
               </FormGroup>

               <FormGroup className="form__group">
                 <input type="number" placeholder='Phone number'/>
               </FormGroup>

               <FormGroup className="form__group">
                 <input type="text" placeholder='Street address'/>
               </FormGroup>

               <FormGroup className="form__group">
                 <input type="text" placeholder='City'/>
               </FormGroup>

               <FormGroup className="form__group">
                 <input type="text" placeholder='Portal Code'/>
               </FormGroup>

               <FormGroup className="form__group">
                 <input type="text" placeholder='Country'/>
               </FormGroup>
            </Form>
          </Col>

          <Col lg='4'>
            <div className="checkout__cart">
              <h6>Total Qty: <span>{totalQty} items</span></h6>
              <h6>Subtotal: <span>$100</span></h6>
              <h6>
                Shipping: <br/> free shipping<span>$0</span>
                </h6>
             
              <h4>Total Cost:<span>100</span></h4>
              <button className='buy_btn auth_btn w-10'>Place an Order</button>

            </div>
    

          </Col>
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default Checkout
