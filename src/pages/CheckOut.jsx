import styled from "styled-components";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
//images
import cash from '../../images/checkout/icon-cash-on-delivery.svg';
import check from "../../images/shared/desktop/icon-check-mark.svg";

const CheckOut = () => {

  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();
  const [payment, setPayment] = useState('e-money');
  const [order, setOrder] = useState(false);

  const handleOrder = () => {
    setOrder(!order);
  }

  return (
    <PageContainer>
      <Header />
        <button className="back-button" onClick={()=>navigate(-1)}>Go Back</button>
      <Container>
        <FormContainer>
          <form action="">
          <h1>CHECKOUT</h1>
            <h2>BILLING DETAILS</h2>
          <div className="division">
            <span>
              <h3>Name</h3>
              <input type="text" placeholder="Gabriel Mensi" required/>
            </span>
            <span>
              <h3>Email Address</h3>
              <input type="text" placeholder="gabriel.mensi7@yahoo.com.ar" required/>
            </span>
            <span>
              <h3>Phone Number</h3>
              <input type="text" placeholder="+54 3413396629" required/>
            </span>
          </div>
            <h2>SHIPING INFO</h2>
          <div className="division">
            <span>
              <h3>Your Address</h3>
              <input type="text" placeholder="Casiano Casas 1800" required/>
            </span>
            <span>
              <h3>Zip Code</h3>
              <input type="text" placeholder="2000" required/>
            </span>
            <span>
              <h3>City</h3>
              <input type="text" placeholder="Rosario" required/>
            </span>
            <span>
              <h3>Country</h3>
              <input type="text"  placeholder="Argentina" required/>
            </span>
          </div>
            <h2>PAYMENT DETAILS</h2>
          <div className="division">
            <span className="payment-methods">
              <h3>Payment Methods</h3>
                <span className={`payment-type ${payment === 'e-money'? 'active' : null}`}>
                  <input 
                    type="radio" 
                    name="payment-method" 
                    value='e-money'
                    checked
                    onClick={()=> setPayment('e-money')} /><h3>e-Money</h3>
                </span> 
                <span className={`payment-type ${payment === 'cash'? 'active' : null}`}>
                  <input 
                    type="radio"
                    name="payment-method"
                    value='cash'
                    onClick={()=> setPayment('cash')} /><h3>Cash on Delivery</h3>
                </span>
                {payment === 'cash' ? 
                  <span className="cash-on-delivery">
                    <img src={cash} className='cash-img' />
                    <p className="cash-text">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                  </span> : 
                  <div className="e-money-container">
                    <span>
                      <h3>e-Money Number</h3>
                      <input type="text" placeholder="123456789"/>
                    </span>
                    <span>
                      <h3>e-Money PIN</h3>
                      <input type="text" placeholder="1234"/>
                    </span>
                  </div>
                }
            </span>
          </div>
          </form>
        </FormContainer>
        <Sumary>
          <h1>SUMARY</h1>
          {cart.items.length > 0 ? cart.items.map(item => (
            <div className="item" key={item.productData.name}>
              <div className="item-info">
                <img src={item.productData.cartImage} />
                <span>
                  <h3>{item.productData.shortName}</h3>
                  <p>${item.productData.price}</p>
                </span>
              </div>             
                <p>x {item.quantity}</p>
            </div>
          )): <h2>Cart is empty</h2>}
          <div className="total">
            <span>
              <h3>TOTAL</h3>
              <p>${cart.totalPrice.toLocaleString()}</p>
            </span>
            <span>
              <h3>SHIPPING</h3>
              <p>$50</p>
            </span>
            <span>
              <h3>{`VAT(INCLUDED)`}</h3>
              <p>${(cart.totalPrice * 0.20).toLocaleString()}</p>
            </span>
            <span className="grand-total">
              <h3>GRAND TOTAL</h3>
              <p>${(cart.totalPrice + 50 + (cart.totalPrice * 0.20)).toLocaleString()}</p>
            </span>
          </div>
          <button className="pay-button" onClick={()=> handleOrder()} >CONTINUE & PAY</button>
        </Sumary>
      </Container>
      {order ?     
      <Modal>
        <div >
          <img src={check} alt="" />
          <h1>THANK YOU FOR YOUR ORDER</h1>
          <p> You will receive an email confirmation shortly.</p>
          <NavLink to='/'></NavLink>
          <button onClick={()=> handleOrder()}>CONTINUE SHOPPING</button>
        </div>
      </Modal>: null}
      
    </PageContainer>
  );
};

export default CheckOut;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F2F2F2;
  .back-button{
    margin: 2.5% 0 0 7%;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 400;
    color: gray;
    cursor: pointer;
  }
`
const Header = styled.header`
  width: 100%;
  height: 90px;
  background-color: black;
`
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 5% 5% 5%;
  @media (max-width: 1000px){
    flex-direction: column;
  }
`
const FormContainer = styled.div`
  width: 70%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 50px;
  margin: 2.5%;
  border-radius: 10px;
  @media (max-width: 1000px){
    width: 100%;
    margin: 20px 0;
    padding: 2.5%;
    align-items: center;
  }
  h1{
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  h2{
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #D87D4A;
  }
  .division{
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 50px;
    span{
      min-width: 200px;
      height: 100%;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 10px 10px 0 0;
      @media (max-width: 510px){
      width: 100%;
      }
      h3{
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 5px;
      }
      input{
        width: 100%;
        height: 50px;
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding-left: 10px;
        outline: #D87D4A;
      }
      .payment-type{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        input{
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        span{
          width: 100%;
        }
      }
      .active{
        border: 1px solid #D87D4A;
      }
    }
    .payment-methods{
      width: 100%;   
      .cash-on-delivery{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
        @media (max-width: 768px){
          flex-direction: column;
          .cash-img{
            margin-bottom: 10px;
          }
        }
        .cash-img{
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
        .cash-text{
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.5rem;
          letter-spacing: 0.5px;
          color: gray;
          @media (max-width: 768px){
            font-size: 0.8rem;
          }
        }
      }
      .e-money-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-top: 20px;
      }
    }
  }
`
const Sumary = styled.div`
  width: 30%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  margin: 2.5%;
  border-radius: 10px;
  @media (max-width: 1000px){
    width: 100%;
    margin: 20px 0;
    align-items: center;
  }
  @media (max-width: 380px){
    padding: 2.5%;
  }
  h1{
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .item{
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    p{
      font-size: 0.9rem;
      font-weight: 400;
      color: gray;
      }
    .item-info{
      background-color: transparent;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      img{
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 10px;
      }
      span{
        background-color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        h3{
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 5px;
        }
      }
    }
  }
  h2{
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #D87D4A;
  }
  .total{
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    span{
      width: 100%;
      background-color: transparent;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
      h3{
        font-size: 0.9rem;
        font-weight: 400;
        color: gray;
      }
      p{
        font-size: 1rem;
        font-weight: 800;
      }
    }
    .grand-total{
      margin-top: 20px;
      p{
        color: #D87D4A;
      }
    }
  }
  .pay-button{
    width: 100%;
    height: 50px;
    background-color: #D87D4A;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
  } 
`
const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  div{
     background-color: white;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  img {
    width: 50px;
    height: 50px;
  }
  h1 {
    font-size: 1.5rem;
    margin: 20px 0;
    text-align: center;
  }
  p {
    font-size: 0.8rem;
    margin: 20px 0;
    color: gray;
  }
  button {
    width: 200px;
    height: 40px;
    background-color: #d87d4a;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 0.8rem;
    cursor: pointer;
  }
  }
`;