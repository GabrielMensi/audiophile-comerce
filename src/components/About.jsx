import styled from "styled-components";
import '../index.css';
//public/images
import aboutImgDesktop from "../../public/images/shared/desktop/image-best-gear.jpg";
import aboutImgTablet from "../../public/images/shared/tablet/image-best-gear.jpg";
import aboutImgMobile from "../../public/images/shared/mobile/image-best-gear.jpg";

const About = () => {
  return (
    <Container>
      <AboutText>
        <h2>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our store
          to meet some of the fantastic people who make Audiophile the best place
          to buy your portable audio equipment.
        </p>
      </AboutText>
      <img src={aboutImgDesktop} className='about-img desktop' />
      <img src={aboutImgTablet} className='about-img tablet' />
      <img src={aboutImgMobile} className='about-img mobile' />
    </Container>
  );
}

export default About;

const Container = styled.div`
  width: 85%;
  height: 90vh;
  margin: 35px auto;
  margin-bottom: 70px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 900px){
    flex-direction: column-reverse;
    height: auto;
  }
  .about-img{
    width: 48%;
    border-radius: 10px;
    object-fit: cover;
    &.tablet{
      display: none;
    }
    &.mobile{
      display: none;
    }
    @media screen and (max-width: 900px){
      &.tablet{
        display: block;
        width: 100%;
      }
      &.desktop{
        display: none;
      }
    }
    @media screen and (max-width: 480px){
      &.tablet{
        display: none;
      }
      &.mobile{
        display: block;
        width: 100%;
      }
    }
  }
  `

  const AboutText = styled.div`
    width: 48%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 40px;
    @media screen and (max-width: 900px){
    width: 100%;
    height: auto;
    padding: 0;
    text-align: center;
    margin: 50px 0;
    }
    h2{
      font-size: 36px;
      font-weight: 800;
      margin-bottom: 20px;
      letter-spacing: 1px;
      span {
        color: #D87D4A;
      }
    }
    p{
      font-size: 15px;
      font-weight: 600;
      line-height: 1.8;
      color: rgba(0,0,0,0.4);
    }
    @media only screen and (max-width: 380px){
      h2{
        font-size: 30px;
        font-weight: 600;
        line-height: 1.2;
      }
    }
  `

  