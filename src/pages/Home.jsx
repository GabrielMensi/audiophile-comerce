import styled from "styled-components";

//Hero Image
import heroDesktop from "../../public/images/home/desktop/image-hero.jpg";
import heroTablet from "../../public/images/home/tablet/image-hero.jpg";
import heroMobile from "../../public/images/home/mobile/image-hero.jpg";
//Components
import Category from "../components/Category";
import HeroTitle from "../components/HeroTitle";
import Promocion1 from "../components/Promocion1";
import Promocion2 from "../components/Promocion2";
import Promocion3 from "../components/Promocion3";
import About from "../components/About";

const Home = () => {

  return (
    <Container>
      <img src={heroDesktop} className="hero-img-desktop"/>
      <img src={heroTablet} className="hero-img-tablet"/>
      <img src={heroMobile} className="hero-img-mobile"/>
      <HeroTitle />
      <Category />
      <Promocion1 />
      <Promocion2 />
      <Promocion3 />
      <About />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .hero-img-desktop{
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media only screen and (max-width: 900px){
      display: none;
    }
  }
  .hero-img-tablet{
    display: none;
    @media only screen and (max-width: 900px){
      display: block;
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    @media only screen and (max-width: 480px){
      display: none;
    }
  }
  .hero-img-mobile{
    display: none;
    @media only screen and (max-width: 480px){
      display: block;
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`