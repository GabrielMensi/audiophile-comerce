import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeroTitle = () => {
  return (
    <Container>
      <h1>NEW PRODUCT</h1>
      <h2>XX99 MARK II HEADPHONES</h2>
      <p>
        Experience natural, lifelike audio and exceptional build quality made for
        the passionate music enthusiast.
      </p>
      <NavLink to='/headphones/xx99-mark-two-headphones'><button>SEE PRODUCT</button></NavLink>
    </Container>
  );
};

export default HeroTitle;

const Container = styled.div`
  width: 380px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  position: absolute;
  left: 7.5%;
  bottom: 10%;
  h1 {
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 10px;
    margin-bottom: 10px;
    color: gray;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 15px;
  }
  p {
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.8;
    margin-bottom: 30px;
    text-align: start;
    color: gray;
  }
  button {
    width: 200px;
    height: 50px;
    background-color: #D87D4A;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
  }
  @media only screen and (max-width: 900px){
    width: 60%;
    height: auto;
    left: 50%;
    bottom: 20%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
      text-align: center;
    }
  }
  @media only screen and (max-width: 480px){
    width: 85%;
    h1{
      font-size: 0.6rem;
    }
    h2{
      font-size: 2.5rem;
    }
    p{
      font-size: 1rem;
    }
  }
`;