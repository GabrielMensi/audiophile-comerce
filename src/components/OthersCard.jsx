import { NavLink } from "react-router-dom";
import styled from "styled-components";

const OthersCard = ({ product }) => {
  return (
    <Card>
      <img src={product.image.desktop} className='desktop'/>
      <img src={product.image.tablet} className='tablet'/>
      <img src={product.image.mobile} className='mobile'/>
      <h3>{product.name}</h3>
      <NavLink to={`../../${product.slug}`} relative='path'><button>SEE PRODUCT</button></NavLink>
    </Card>
  );
};

export default OthersCard;

const Card = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1.5%;
  .tablet, .mobile{
    display:none;
  }
  .desktop {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 10px;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 20px 0;
  }
  button {
    width: 60%;
    min-width: 150px;
    height: 50px;
    background-color: #D87D4A;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  @media (max-width: 930px) {
    .desktop{
      display:none;
    }
    .tablet{
      display:block;
      height: 60%;
    }
  }
  @media (max-width: 780px) {
    height: 380px;
    margin-bottom: 35px;
    overflow: hidden;
    .tablet{
      display:none;
    }
    .mobile{
      display:block;
      height: 70%;
      width: 100%;
      object-fit: cover;
    }
    button{
      width: 30%;
      height: 40px;
    }

  }
`;