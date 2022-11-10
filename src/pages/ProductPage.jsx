import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/cart/cartSlice";
import toast, { Toaster } from 'react-hot-toast';

//Components
import OthersCard from "../components/OthersCard";
import Category from "../components/Category";
import About from "../components/About";

const ProductPage = ({ productsList }) => {

  const navigate = useNavigate();
  const { product } = useParams(); // get the product slug from the url
  const productData = productsList.find((item) => item.slug === product); // find the product data from the products list
  const notify = () => toast.success('Product added to cart!');

  const dispatch = useDispatch();
  const addToCart = ( productData ) => {
    dispatch(addProduct(productData));
    notify();
  };

  // Quantity hablders
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
 
  useEffect(()=> { //Restore scroll
    window.scrollTo(0,0);
  }, [productData])


  return (
    <>
    <Header />
    <Container>
      <button className="back-button" onClick={()=>navigate(-1)}>Go Back</button>
      <Landing>
        <img 
          src={productData.image.desktop} 
          className='img-desktop' />
        <img 
          src={productData.image.tablet} 
          className="img-tablet" />
        <img 
          src={productData.image.mobile} 
          className="img-mobile" />
        <div className="product-text">
          {productData.new ? <h5 className="new">NEW PRODUCT</h5> : null}
          <h1 className="name">{productData.name.toUpperCase()}</h1>
          <p className="description">{productData.description}</p>
          <h2 className="price">$ {productData.price}</h2>
          <div className="quantity-input">
            <button 
              className="quantity-button" 
              onClick={()=> decrementQuantity()}> - </button>
            <input value={quantity} readOnly/>
            <button 
              className="quantity-button" 
              onClick={()=> incrementQuantity()}> + </button>
            <button 
            className="add-cart" 
            onClick={()=> addToCart({ productData, quantity })}>ADD TO CART</button>
          </div>
        </div>
      </Landing>
      <FeatureContainer>
        <div className="features">
          <h3>FEATURES</h3>
          <p>{productData.features}</p>
        </div>
        <div className="items">
          <h3>IN THE BOX</h3>
          <ul>
            {productData.includedItems.map((e) => (
              <li key={e.item}><span>{e.quantity}x</span> {e.item}</li>
            ))}
          </ul>
        </div>
      </FeatureContainer>
      <Gallery>
        <div className="division">
          <img src={productData.gallery.first.desktop} className='first desktop'/>
          <img src={productData.gallery.first.tablet} className='first tablet'/>
          <img src={productData.gallery.first.mobile} className='first mobile'/>
          <img src={productData.gallery.second.desktop} className='second desktop'/>
          <img src={productData.gallery.second.tablet} className='second tablet'/>
          <img src={productData.gallery.second.mobile} className='second mobile'/>
        </div>
        <img src={productData.gallery.third.desktop} className='third desktop'/>
        <img src={productData.gallery.third.tablet} className='third tablet'/>
        <img src={productData.gallery.third.mobile} className='third mobile'/>
      </Gallery>
      <Others>
        <h3 className="title">YOU MAY ALSO LIKE</h3>
        <div className="others-container">
          {productData.others.map((e) => (
            <OthersCard key={e.name} product={e} />
          ))}
        </div>
      </Others>
      <Category />
      <About />
    </Container>
    <Toaster 
      position="top-left"
      reverseOrder={false} 
      />
    </>
    
  )
}

export default ProductPage;

const Header = styled.header`
  width: 100%;
  height: 90px;
  background-color: black;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 50px 7.5%;
  background-color:#FAFAFA ;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  .back-button{
    margin-bottom: 50px;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 400;
    color: gray;
    cursor: pointer;
  }
  `

const Landing = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-bottom: 35px;
  .img-desktop{
    width: 50%;
    object-fit: cover;
  }
  .img-tablet{
    display:none;
  }
  .img-mobile{
    display:none;
  }
  .product-text{
    width: 50%;
    padding: 0 0 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .new{
      color: #D87D4A;
      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 10px;
      margin-bottom: 10px;
    }
    .name{
      font-size: 2.5rem;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 20px;
    }
    .description{
      font-size: 0.9rem;
      font-weight: 400;
      line-height: 1.8;
      letter-spacing: 0.2px;
      margin-bottom: 30px;
      color: gray;
    }
    .price{
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 30px;
    }
    .quantity-input{
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      .quantity-button{
        width: 40px;
        height: 40px;
        background-color: #F1F1F1;
        color: gray;
        border: none;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
      }
      input{
        width: 20px;
        height: 40px;
        border: none;
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
        background-color: #F1F1F1;
        color: gray;
      }
      .add-cart{
        width: 150px;
        height: 40px;
        background-color: #D87D4A;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        user-select: none;
        margin-left: 20px;
      }
    }
  }
  @media (max-width: 780px){
    .img-desktop{
      display: none;
    }
    .img-tablet{
      display: block;
      width: 35%;
      object-fit: cover;
    }
    .product-text{
      width: 70%;
      .name{
        font-size: 2rem;
      }
      .description{
        font-size: 0.8rem;
      }
      .new{
        font-size: 0.7rem;
      }
    }
  }
  @media (max-width: 480px){
    flex-direction: column;
    .img-tablet{
      display: none;
    }
    .img-mobile{
      display: block;
      width: 100%;
      margin-bottom: 30px;
    }
    .product-text{
      width: 100%;
      padding: 0;
    }
  }
`

const FeatureContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 35px 0;
  @media (max-width: 980px){
    flex-direction: column;
  }
  .features{
    width: 60%;
    white-space: pre-line;
    @media (max-width: 980px){
      width: 100%;
    }
    h3{
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 20px;
      @media (max-width: 380px){
        font-size: 2rem;
      }
    }
    p{
      font-size: 0.9rem;
      font-weight: 400;
      line-height: 1.8;
      letter-spacing: 0.2px;
      color: gray;
      @media (max-width: 380px){
        font-size: 0.8rem;
      }
    }
  }
  .items{
    width: 40%;
    padding: 0 0 0 10%;
    @media (max-width: 980px){
      display: flex;
      width: 100%;
      margin-top: 50px;
      padding: 0;
    }
    @media (max-width: 630px){
      flex-direction: column;
    }
    h3{
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 20px;
      @media (max-width: 980px){
        margin-right: 150px;
      }
      @media (max-width: 630px){
        margin-right: 0;
      }
      @media (max-width: 380px){
        font-size: 2rem;
      }
    }
    ul{
      list-style: none;
      li{
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 1.8;
        letter-spacing: 0.2px;
        color: gray;
        margin-bottom: 10px;
        span{
          color: #D87D4A;
          font-size: 1rem;
          font-weight: 800;
          margin-right: 10px;
        }
        @media (max-width: 380px){
        font-size: 0.8rem;
        }
      }
    }
  }
  `

const Gallery = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0;
  .division{
    width: 45%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .first, .second{
      width: 90%;
      height: 45%;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  .third{
    width: 55%;
    height: 100vh;
    border-radius: 10px;
    object-fit: cover;
  }

  .mobile, .tablet{
    display: none;
  }
  @media (max-width: 980px){
    height: 50vh;
    .division{
      height: 80vh;
    }
    .third{
      height: 80vh;
    }
    .desktop{
      display: none;
    }
    .tablet{
      display: block;
      object-fit: cover;
    }
  }
  @media (max-width: 630px){
    flex-direction: column;
    height: auto;
    .mobile{
      display: block;
    }
    .division{
      width: 100%;
      height: auto;
      padding: 0;
      .first, .second{
        width: 100%;
        height: 100%;
        margin: 20px 0;
      }
    }
    .third{
      width: 100%;
      height: auto;
      margin: 20px 0;
    }
    .tablet{
      display: none;
    }
  }
  `

const Others = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 35px 0;
  .title{
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 20px;
    @media (max-width: 380px){
      font-size: 2rem;
    }
  }
  .others-container{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 780px){
      flex-direction: column;
    }
  }
  `
