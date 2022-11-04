import styled from "styled-components";
import { NavLink } from "react-router-dom";
//Images
import speakerx9 from "../../images/home/desktop/image-speaker-zx9.png";
import circles from "../../images/home/desktop/pattern-circles.svg";

const Promocion1 = () => {

  return (
    <Container>
      <img src={speakerx9} className='zx9-home' />
      <img src={circles} className='circles' />
      <PromocionText>
        <h2>ZX9 SPEAKER</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <NavLink to='/speakers/zx9-speaker'><button>SEE PRODUCT</button></NavLink>
      </PromocionText>
    </Container>
  );
};

export default Promocion1;

const Container = styled.div`
  width: 85%;
  height: 90vh;
  background-color: #D87D4A;
  border-radius: 10px;
  margin: 35px 0;
  padding: 0 100px;
  display: flex;
  overflow: hidden;
  position: relative;
  .circles{
    position: absolute;
    object-fit: cover;
    margin-left: -200px;
    margin-top: -180px;
    /* z-index: 900; */
  }
  .zx9-home{
    width: 410px;
    align-self: flex-end;
    margin-bottom: -15px;
    margin-right: 80px;
    z-index: 100;
  }
  @media only screen and (max-width: 1060px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 0;
    .zx9-home{
      width: 180px;
      margin: 20px 0;
      align-self: center;
    }
    .circles{
      width: 100%;
      margin: 0;
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
  padding-right: 20px;
  z-index: 100;
  h2{
    font-size: 60px;
    font-weight: 600;
    letter-spacing: 5px;
    line-height: 1;
    color: white;
    @media only screen and (max-width: 380px){
      font-size: 40px;
    }
  }
  p{
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.5;
    color: rgba(255,255,255,0.7);
    margin: 0;
    margin-top: 20px;
    width: 80%;
  }
  button{
    width: 150px;
    height: 40px;
    background-color: black;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: white;
    cursor: pointer;
  }
  @media only screen and (max-width: 1060px){
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 0;
    margin-bottom: 20px;
  }
`