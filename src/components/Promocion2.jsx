import styled from "styled-components";
import { NavLink } from "react-router-dom";
//images
import speakerMobile from "../../images/home/mobile/image-speaker-zx7.jpg";
import speakerx7 from "../../images/home/desktop/image-speaker-zx7.jpg";

const Promocion2 = () => {
  return (
    <Container>
      <img src={speakerx7} className='desktop'/>
      <img src={speakerMobile} className='mobile'/>
      <PromocionText>
        <h2>ZX7 SPEAKER</h2>
        <NavLink to='/speakers/zx7-speaker'><button>SEE PRODUCT</button></NavLink>
      </PromocionText>
    </Container>
  );
}

export default Promocion2;

const Container = styled.div`
  width: 85%;
  height: 300px;
  margin: 35px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  position: relative;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  .mobile{
    display: none;
  }
  @media only screen and (max-width: 600px){
    .desktop{
      display: none;
    }
    .mobile{
      display: block;
      object-fit: cover;
    }
  }
  `
  const PromocionText = styled.div`
    width: 50%;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 100px;
    position: absolute;
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
    @media only screen and (max-width: 400px){
      width: 100%;
      padding: 0 30px;
    }
  `