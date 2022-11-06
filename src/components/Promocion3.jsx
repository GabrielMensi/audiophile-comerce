import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
//public/images
import earphonesYx1Mobile from "../../public/images/home/mobile/image-earphones-yx1.jpg";
import earphonesYx1 from "../../public/images/home/desktop/image-earphones-yx1.jpg";

const Promocion3 = () => {


  return (
    <Container>
      <img src={earphonesYx1} className='desktop' />
      <img src={earphonesYx1Mobile} className='mobile' />
      <PromocionText>
        <h2>YX1 EARPHONES</h2>
        <NavLink to='/category/yx1-earphones'><button>SEE PRODUCT</button></NavLink>
      </PromocionText>
    </Container>
  );
}

export default Promocion3;

const Container = styled.div`
  width: 85%;
  height: 300px;
  margin: 35px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img{
    width: 48%;
    border-radius: 10px;
    object-fit: cover;
  }
  .mobile{
    display: none;
  }
  @media only screen and (max-width: 900px){
    .desktop{
      display: none;
    }
    .mobile{
      display: block;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 680px){
    width: 85%;
    height: auto;
    flex-direction: column;
    align-items: center;
    .mobile{
      width: 100%;
      margin-bottom: 30px;
    }
  }
  `

  const PromocionText = styled.div`
    width: 48%;
    height: 300px;
    background-color: #F1F1F1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 100px;
    border-radius: 10px;
    h2{
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 20px;
      letter-spacing: 1.5px;
    }
    button{
    width: 150px;
    height: 40px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: black;
    border: 1px solid black;
    cursor: pointer;
  }
  @media only screen and (max-width: 900px){
    padding: 0 20px;
  }
  @media only screen and (max-width: 680px){
    width: 100%;
    height: auto;
    padding: 20px 20px;
  }
  @media only screen and (max-width: 380px){
    h2{
      font-size: 30px;
    }
  }
`