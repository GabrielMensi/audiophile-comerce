import styled from "styled-components";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
//public/images
import cash from '../../public/images/checkout/icon-cash-on-delivery.svg';
import check from "../../public/images/shared/desktop/icon-check-mark.svg";

//Validation
const validate = (values) => {
  const errors = {};
  //Name
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  } else if (values.name.length < 3) {
    errors.name = "Must be 3 characters or more";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/i.test(values.name)) {
    errors.name = "Invalid name";
  }
  //Email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  //Phone
  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^[0-9]{10}$/i.test(values.phone)) {
    errors.phone = "Invalid phone number";
  }
  //Address
  if (!values.address) {
    errors.address = "Required";
  } else if (values.address.length > 30) {
    errors.address = "Must be 30 characters or less";
  } else if (values.address.length < 5) {
    errors.address = "Must be 5 characters or more";
  } else if (!/^[a-zA-ZÀ-ÿ\s]+[0-9]{1,40}$/i.test(values.address)) {
    errors.address = "Invalid address";
  }
  //Zip
  if (!values.zip) {
    errors.zip = "Required";
  } else if (!/^[0-9]{4,5}$/i.test(values.zip)) {
    errors.zip = "Invalid zip code";
  }
  //City
  if (!values.city) {
    errors.city = "Required";
  } else if (values.city.length > 15) {
    errors.city = "Must be 15 characters or less";
  } else if (values.city.length < 3) {
    errors.city = "Must be 3 characters or more";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/i.test(values.city)) {
    errors.city = "Invalid city";
  }
  //Country
  if (!values.country) {
    errors.country = "Required";
  } else if (values.country.length > 15) {
    errors.country = "Must be 15 characters or less";
  } else if (values.country.length < 3) {
    errors.country = "Must be 3 characters or more";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/i.test(values.country)) {
    errors.country = "Invalid country";
  }
  //eMoneyNumber
  if (!values.eMoneyNumber) {
    errors.eMoneyNumber = "Required";
  } else if (!/^[0-9]{9}$/i.test(values.eMoneyNumber)) {
    errors.eMoneyNumber = "Invalid eMoney number";
  }
  //eMoneyPin
  if (!values.eMoneyPin) {
    errors.eMoneyPin = "Required";
  } else if (!/^[0-9]{4}$/i.test(values.eMoneyPin)) {
    errors.eMoneyPin = "Invalid eMoney pin";
  }

  return errors;
};

const CheckOut = () => {

  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();
  const [order, setOrder] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleCash = () =>{
    formik.values.eMoneyNumber = '123456789';
    formik.values.eMoneyPin = '1234';
  }

  const handleEMoney = () => {
    formik.values.eMoneyNumber = "";
    formik.values.eMoneyPin = "";
    formik.values.payment = 'eMoney';
  }

  const handleOrder = () => {
    setOrder(!order);
  }
  
//Form
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      eMoneyNumber: "",
      eMoneyPin: "",
      payment: "e-money",
      // complete: formik.payment === "e-money" ? name && email && phone && address && zip && city && country && eMoneyNumber && eMoneyPin : name && email && phone && address && zip && city && country,
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
    },
  });

  return (
    <PageContainer>
      <Header />
        <button className="back-button" onClick={()=>navigate(-1)}>Go Back</button>
      <Container>
        <form className="formulario" onSubmit={formik.handleSubmit}>
          <FormContainer>
            <h1>CHECKOUT</h1>
              <h2>BILLING DETAILS</h2>
            <div className="division">
              <span>
                <label>Name</label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  placeholder="Gabriel Mensi"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  required/>
                  {formik.touched.name && formik.errors.name ? <div className="error"><p>{formik.errors.name}</p></div> : null}
              </span>
              <span>
                <label>Email Address</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="gabriel.mensi7@yahoo.com.ar"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  required/>
                  {formik.touched.email && formik.errors.email ? <div className="error"><p>{formik.errors.email}</p></div> : null}
              </span>
              <span>
                <label>Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="text" 
                  placeholder="3413396629"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone} 
                  required/>
                  {formik.touched.phone && formik.errors.phone ? <div className="error"><p>{formik.errors.phone}</p></div> : null}
              </span>
            </div>
              <h2>SHIPING INFO</h2>
            <div className="division">
              <span>
                <label>Your Address</label>
                <input
                  id="address"
                  name="address"
                  type="text" 
                  placeholder="Casiano Casas 1800"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  required/>
                  {formik.touched.address && formik.errors.address ? <div className="error"><p>{formik.errors.address}</p></div> : null}
              </span>
              <span>
                <label>Zip Code</label>
                <input
                  id="zip"
                  name="zip"
                  type="text" 
                  placeholder="2000"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                  value={formik.values.zip}
                  required/>
                  {formik.touched.zip && formik.errors.zip ? <div className="error"><p>{formik.errors.zip}</p></div> : null}
              </span>
              <span>
                <label>City</label>
                <input
                  id="city"
                  name="city" 
                  type="text" 
                  placeholder="Rosario"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                  value={formik.values.city}
                  required/>
                  {formik.touched.city && formik.errors.city ? <div className="error"><p>{formik.errors.city}</p></div> : null}
              </span>
              <span>
                <label>Country</label>
                <input
                  id="country"
                  name="country" 
                  type="text"  
                  placeholder="Argentina"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                  value={formik.values.country}
                  required/>
                  {formik.touched.country && formik.errors.country ? <div className="error"><p>{formik.errors.country}</p></div> : null}
              </span>
            </div>
              <h2>PAYMENT DETAILS</h2>
            <div className="division">
              <span className="payment-methods">
                <label>Payment Methods</label>
                  <span className={`payment-type ${formik.values.payment === 'e-money'? 'active' : null}`}>
                    <input 
                      id="e-money"
                      name="payment"
                      type="radio" 
                      value="e-money"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked = {formik.values.payment === "e-money"}
                      onClick={()=> handleEMoney()}/><label>e-Money</label>
                  </span> 
                  <span className={`payment-type ${formik.values.payment === 'cash'? 'active' : null}`}>
                    <input 
                      id="cash"
                      type="radio"
                      name="payment"
                      value='cash'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked = {formik.values.payment === "cash"}
                      onClick={()=> handleCash()} /><label>Cash on Delivery</label>
                  </span>
                  {formik.values.payment === 'cash' ? 
                    <span className="cash-on-delivery">
                      <img src={cash} className='cash-img' />
                      <p className="cash-text">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </span> : 
                    <div className="e-money-container">
                      <span>
                        <label>e-Money Number</label>
                        <input
                          id="eMoneyNumber"
                          name="eMoneyNumber"
                          type="text"
                          placeholder="123456789"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.eMoneyNumber} />
                          {formik.touched.eMoneyNumber && formik.errors.eMoneyNumber ? <div className="error"><p>{formik.errors.eMoneyNumber}</p></div> : null}
                      </span>
                      <span>
                        <label>e-Money PIN</label>
                        <input
                          id="eMoneyPin"
                          name="eMoneyPin" 
                          type="text" 
                          placeholder="1234"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.eMoneyPin} />
                          {formik.touched.eMoneyPin && formik.errors.eMoneyPin ? <div className="error"><p>{formik.errors.eMoneyPin}</p></div> : null}
                      </span>
                    </div>
                  }
              </span>
            </div>
            
          </FormContainer>
          <Sumary>
            <h1>SUMARY</h1>
            {cart.items.length > 0 ? cart.items.map(item => (
              <div className="item" key={item.productData.name}>
                <div className="item-info">
                  <img src={item.productData.cartImage} />
                  <span>
                    <label>{item.productData.shortName}</label>
                    <p>${item.productData.price}</p>
                  </span>
                </div>             
                  <p>x {item.quantity}</p>
              </div>
            )): <h2>Cart is empty</h2>}
            <div className="total">
              <span>
                <label>TOTAL</label>
                <p>${cart.totalPrice.toLocaleString()}</p>
              </span>
              <span>
                <label>SHIPPING</label>
                <p>$50</p>
              </span>
              <span>
                <label>{`VAT(INCLUDED)`}</label>
                <p>${(cart.totalPrice * 0.20).toLocaleString()}</p>
              </span>
              <span className="grand-total">
                <label>GRAND TOTAL</label>
                <p>${(cart.totalPrice + 50 + (cart.totalPrice * 0.20)).toLocaleString()}</p>
              </span>
            </div>
            <button 
            id="submit"
            name="submit"
            className={`submit ${formik.isValid && formik.dirty ? 'active' : null}`}
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            onClick={()=> handleOrder()} >
              CONTINUE & PAY</button>
          </Sumary>
        </form>
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
  .formulario{
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 5% 5% 5%;
     @media (max-width: 1000px){
    flex-direction: column;
    }
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
  flex-direction: column;
  justify-content: flex-start;
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
      label{
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
      .error{
        color: red;
        font-size: 0.8rem;
        font-weight: 400;
        margin-top: 5px;
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
  padding: 50px 25px;
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
        label{
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
      label{
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
  .submit{
    width: 100%;
    height: 50px;
    background-color: #D87D4A;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: not-allowed;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
  }
  .active{
    cursor: pointer;
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