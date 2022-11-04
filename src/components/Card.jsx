import styled from "styled-components"
import { NavLink } from "react-router-dom";

const Card = (props) => {

  return (
    <Container>
      <img src={props.image} alt="" />
      <Description>
        <div>
          { props.new ? <h5>NEW PRODUCT</h5> : null }
          <h3>{props.name.toUpperCase()}</h3>
        </div>
        <h4>{props.description}</h4>
        <NavLink to={`/${props.category}/${props.slug}`}><button>SEE PRODUCT</button></NavLink>
      </Description>
    </Container>
  )
}

export default Card;


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  column-gap: 10%;
  margin-bottom: 20px;
  img{
    width: 48%;
    height: auto;
    @media only screen and (max-width: 900px){
      width: 100%;
      margin-bottom: 20px;
    }
  }
  :nth-child(even){
    flex-direction: row-reverse;
  }
  :nth-child(n) {
    @media only screen and (max-width: 900px){
      height: auto;
      flex-direction: column;
      text-align: center;
    }
  }
`
const Description = styled.div`
  width: 48%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  @media only screen and (max-width: 900px){
      width: 100%;
    }
  div{
    width: 50%;
    @media only screen and (max-width: 900px){
      width: 100%;
    }
  }
  h3{
    font-size: 2.1rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  h4{
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.5;
    color: #7E7E7E;
    margin-bottom: 20px;
  }
  h5{
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 10px;
    color: #D87D4A;
    margin-bottom: 20px;
  }
  button{
    width: 150px;
    height: 50px;
    background-color: #D87D4A;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
  }
  @media only screen and (max-width: 900px){
      align-items: center;
  }
`