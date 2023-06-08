import React,{useRef,useEffect} from 'react'

import './header.css';
import { NavLink ,useNavigate } from 'react-router-dom';

import {motion} from 'framer-motion';

import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';

import {Container , Row} from "reactstrap";
import {useSelector} from "react-redux";

const nav__links = [
  {
  path:'home',
  display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  },
  {
    path:'login',
    display:'Login'
  },
  
]

function Header() {

const headerRef = useRef(null)

const totalQuantity = useSelector(state => state.cart.totalQuantity)

const menuRef = useRef(null)
const navigate = useNavigate()

const stickyHeaderFunc = () =>{
  window.addEventListener('scroll',() =>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
      headerRef.current.classList.add('sticky__header')
    }else{
      headerRef.current.classList.remove('sticky__header')
    }
  })
}


useEffect(()=>{
      stickyHeaderFunc()

      return () => window.removeEventListener('scroll' ,stickyHeaderFunc)
})

const menuToggle=() => menuRef.current.classList.toggle('active_menu')

const navigateToCart  = () =>{
      navigate('/cart');
}



  return <header className="header"  ref={headerRef}>
    <Container>
      <Row>
        <div className="nav_wrapper">
          <div className='logo'>
            <img src={logo} alt='logo' />
            <div>
              <h1>RentMe</h1>
            
            </div>
          </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {
                  nav__links.map((item , index) =>(
                    <li className="nav__items" key={index}>
                   <NavLink 
                   to={item.path} 
                   className={(navClass) => 
                     navClass.isActive ? "nav__active" :  ""
                   }>{item.display}</NavLink>
                </li>
                ))
                }
              </ul>
            </div>

            <div className="nav__icons">

               <span className='fav__icon'><i class="ri-heart-line"></i>
               <span className="badge">{totalQuantity}</span>
               </span>
              <span className='cart__icons' onClick={navigateToCart}>
                <i 
              class="ri-shopping-bag-line"></i>
               <span className="badge">{totalQuantity}</span>
              </span>
              <span>
              <motion.img whileTap={{scale:1.2}} src={userIcon} alt='userIcon' />
              </span>
              <div className="moblie_menu">
            <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
          </div>
            </div>            
            


        </div>
      </Row>
    </Container>
    </header>


}

export default Header
