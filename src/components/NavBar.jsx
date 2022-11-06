import styled from "styled-components";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
//Components
import Cart from "./Cart";
//iamges
import menu from "../../public/images/shared/tablet/icon-hamburger.svg";
import close from "../../public/images/shared/tablet/icon-close-menu.svg";
import logo from "../../public/images/shared/desktop/logo.svg";
import cart from "../../public/images/shared/desktop/icon-cart.svg";
import Category from "./Category";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector(state => state.cart.totalQuantity);

  //Handlers
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCart = () => {
    setActiveCart(!activeCart);
  };

  return (
    <Container>
      <MenuContainer
        className={isOpen ? 'open' : 'close'}
        onClick={() => handleMenu()} >
        <div className="category-container" onClick={() => handleMenu()}>
          <Category />
        </div>
      </MenuContainer>
      <ItemsContainer>
        {isOpen ?
          <img src={close}
            className="close-img" 
            onClick={() => handleMenu()} />
        : <img 
            src={menu} 
            className='menu'
            onClick={() => handleMenu()} />
        }
        <NavLink to='/'> <img src={logo}/> </NavLink>
        <NavLinks>
          <NavLink 
          to='/'
          className={({isActive}) => isActive ? 'active' : 'noActive'} ><h3>HOME</h3></NavLink>
          <NavLink 
            to='/headphones'
            className={({isActive}) => isActive ? 'active' : 'noActive'} ><h3>HEADPHONES</h3></NavLink>
          <NavLink 
            to='/speakers'
            className={({isActive}) => isActive ? 'active' : 'noActive'} ><h3>SPEAKERS</h3></NavLink>
          <NavLink 
            to='/earphones'
            className={({isActive}) => isActive ? 'active' : 'noActive'} ><h3>EARPHONES</h3></NavLink>
        </NavLinks>
        <div className="cart-container">
          {cartItems > 0 ?
            <span 
              className="cart-items"
              onClick={()=> handleCart()}><h3>{cartItems}</h3></span> 
              : null }
            <img
              className="cart" 
              src={cart} 
              onClick={()=> handleCart()} /> 
        </div>     
      </ItemsContainer>
      {activeCart && <Cart activeCart={activeCart} setActiveCart={setActiveCart} />}
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  .close{
    display: none;
  }
`

const ItemsContainer = styled.div`
  width: 85%;
  height: 90px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3b3b3b;
  .menu {
    display: none;
  }
  .close-img{
    cursor: pointer;
  }
  .cart-container{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;
    .cart-items{
      position: absolute;
      top: -10px;
      left: 15px;
      background-color: #D87D4A;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      h3{
        font-size: 12px;
        font-weight: 700;
        color: #fff;
      }
    }
  }
  @media only screen and (max-width: 780px){
    .menu{
      display: block;
      width: 20px;
      height: 15px;
      cursor: pointer;
    }
  }
 `

const NavLinks = styled.div`
  display: flex;
  @media (max-width: 780px) {
    display: none;
  }

  h3{
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.9px;
    margin: 0 18px;
    user-select: none;
    cursor: pointer;
  }
  .active{
    color: #D87D4A;
  }
  .noActive{
    color: white;
  }
`

const MenuContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .category-container{
    width: 99%;
    height: auto;
    background-color: rgba(255,255,255,0.8);
    border-radius: 10px;
    margin-bottom: 400vh;
  }
  @media only screen and (min-width: 780px){
    display: none;
  }
`