import React from 'react'
// import productImg from '../../assets/images/arm-chair-01.jpg';
import {motion} from 'framer-motion';
import '../../Styles/product-card.css'
import {Col} from "reactstrap";
import {Link} from "react-router-dom";

import { toast} from 'react-toastify';

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
// import { Toast } from 'bootstrap';


function ProductCard({item}) {

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addltem({
        id: item.id,
        productName: item.productName,
        price: item.price,
      imgUrl: item.imgUrl,
      })
    );

   toast.success('Product added successfully');


    // alert("Product added to cart");
  };



  return (
    <Col lg='3' md='4' className='mb-2'>
    <div className='product__item' >
        <div className="product__img">
            <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="" />
        </div >
          <div className='p-2 product__info'>
            <h3 className="product__name"><Link to='/shop/${item.id}'>{item.productName}</Link></h3>
        <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className='price'>{item.price}</span>
            <motion.span whileHover={{scale:1.2}} onClick={addToCart}><i class="ri-add-line"></i></motion.span>
        </div>
    </div>
    </Col>
  )
}

export default ProductCard