import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { incrementProduct, decrementProduct, removeAll } from "../reducers/cart/cartSlice";
import { NavLink } from "react-router-dom";
//images
import emptyCart from '../../images/cart/empty-cart.png';

const Cart = ({activeCart, setActiveCart}) => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <>
    <Modal onClick={()=> setActiveCart(!activeCart)}></Modal>
      <CartContainer>
        <div className="title">
          <h1>{`CART (${cart.totalQuantity})`}</h1>
          <button
            onClick={() => dispatch(removeAll())}
            className="remove-all">Remove All</button>
        </div>
        <div className="cart-items">
          { cart.totalQuantity === 0 ?
            <img src={emptyCart} className='empty-cart'></img> :
            cart.items.map(item => (
              <div className="cart-item" key={item.productData.name}>
                <div className="item-info">
                  <img src={item.productData.cartImage} alt="" />
                  <span>
                    <h3>{item.productData.shortName}</h3>
                    <h3>{`$ ${item.productData.price}`}</h3>
                  </span>
                </div>
                <div className="item-quantity">
                  <button 
                  className="remove"
                  onClick={()=> dispatch(decrementProduct(item)) }>-</button>
                  <h3>{item.quantity}</h3>
                  <button 
                    className="add"
                    onClick={()=> dispatch(incrementProduct(item)) } >+</button>
                </div>
              </div>
          ))}
        </div>
        <div className="total">
          <h3>{`TOTAL: $ ${cart.totalPrice}`}</h3>
          <NavLink to='/check-out'><button className="checkout" onClick={()=> setActiveCart(!activeCart)}>CHECKOUT</button></NavLink>
        </div>
      </CartContainer>
      </>
  );
};

export default Cart;

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  z-index: 1001;
`;

const CartContainer = styled.div`
  width: 500px;
  height: 500px;
  margin: 50px auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  position: fixed;
  z-index: 1002;
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
  .title{
    width: 100%;
    height: 50px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    h1{
      font-size: 20px;
    }
    .remove-all{
      background-color: transparent;
      border: none;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .cart-items{
    width: 100%;
    height: 400px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    .empty-cart{
      width: 200px;
      height: 200px;
      margin-top: 50px;
    }
    .cart-item{
      width: 100%;
      height: 100px;
      background-color: #fff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid #f2f2f2;
      .item-info{
        width: 200px;
        height: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        img{
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
        h3{
          font-size: 14px;
        }
      }
      .item-quantity{
        width: 100px;
        height: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        button{
          width: 30px;
          height: 30px;
          background-color: #f2f2f2;
          border: none;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
        }
        h3{
          font-size: 14px;
        }
      }
    }
  }
  .total{
    width: 100%;
    height: 50px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    h3{
      font-size: 14px;
    }
    .checkout{
      background-color: #D87D4A;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      font-size: 14px;
      cursor: pointer;
    }
  }

`