import styled from "styled-components";
import { Link } from "react-router-dom";
//public/images
import facebook from "../../public/images/shared/desktop/icon-facebook.svg";
import instagram from "../../public/images/shared/desktop/icon-instagram.svg";
import twitter from "../../public/images/shared/desktop/icon-twitter.svg";
import logo from "../../public/images/shared/desktop/logo.svg";


const Footer = () => {
  return (
    <Container>
      <Us>
        <div className="logo-container">
          <img src={logo}  />
        </div>
        <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
        <p>
        Copyright 2021. All Rights Reserved
        </p>
      </Us>
      <div className="media">
        <Nav>
          <Link to='/'><h3>HOME</h3></Link>
          <Link to='/headphones'><h3>HEADPHONES</h3></Link>
          <Link to='/speakers'><h3>SPEAKERS</h3></Link>
          <Link to='/earphones'><h3>EARPHONES</h3></Link>
        </Nav>
        <Social>
          <img src={facebook}  />
          <img src={twitter}  />
          <img src={instagram}  />
        </Social>
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: #191919;
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
  }
  .media{
    width: 50%;
  }
`

const Us = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  @media only screen and (max-width: 768px) {
    width: 80%;
    padding-left: 0;
    justify-content: center;
    align-items: center;
  }
  .logo-container{
    height: 35%;
    width: 145px;
    border-top: 5px solid #D87D4A;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
    padding-top: 20px;
    justify-content: center;
    }
    img{
      width: 144px;
      height: 25px;
      @media only screen and (max-width: 768px) {
      margin: 20px 0;
      }
    }
  }
  p{
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    margin-bottom: 20px;
    font-weight: 600;
    line-height: 1.7;
    letter-spacing: 0.8px;
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }
`

const Social = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 100px;
  @media only screen and (max-width: 768px) {
    padding: 0;
    justify-content: center;
    margin: 20px 0;
  }
  img{
    width: 25px;
    height: 25px;
    margin: 0 10px;
    cursor: pointer;
  }
  img:hover{
    transform: scale(1.1);
  }
`
const Nav = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    padding-top: 30px;
  }
  h3{
    color: white;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.9px;
    margin: 0 18px;
    user-select: none;
    cursor: pointer;
    @media only screen and (max-width: 1000px) {
    margin: 10px 0;
   }
  }
  h3:hover{
    color: #D87D4A;
  }
`
