import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container ,Row , Col} from "reactstrap"
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
// import CommonSection from '../components/UI/CommonSection'
import '../Styles/productDetails.css'
function ProductDetails() {

    // const { id } = useParams();
    // const product = products.find((item) => item.id === id);
  
    // const { imgUrl, id, productName, avgRating, } =product;
  

  return (
      <Helmet>
        <section>
        <Container>
            <Row>
                 <Col lg='6'>
                <h1>helo</h1>
                 </Col>


                 <Col lg='6'>
                <h1>helo</h1>
                 </Col>   
            </Row>
            
        </Container>
        </section>
        {/* <div style={{Color:"white"}}>good</div> */}
    

    
      </Helmet>
   
  )
}

export default ProductDetails
