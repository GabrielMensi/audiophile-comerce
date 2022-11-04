import styled from "styled-components";
import { NavLink } from "react-router-dom";
//Images
import headphones from "../../images/shared/desktop/image-headphones.png";
import speakers from "../../images/shared/desktop/image-speakers.png";
import earphones from "../../images/shared/desktop/image-earphones.png";
import rightArrow from "../../images/shared/desktop/icon-arrow-right.svg";

const Category = () => {
  return (
    <Container>
        <Card>
          <NavLink to='/headphones' className='link'>
            <img src={headphones} className='category-product-img' />
            <h3>HEADPHONES</h3>
            <Shop>
              <h4>SHOP</h4>
              <img src={rightArrow} className='right-arrow-img' />
            </Shop>
          </NavLink>
        </Card>
      <Card>
        <NavLink to='/speakers' className='link'>
          <img src={speakers} className='category-product-img' />
          <h3>SPEAKERS</h3>
          <Shop>
            <h4>SHOP</h4>
            <img src={rightArrow} className='right-arrow-img'/>
          </Shop>
        </NavLink>
      </Card>
      <Card>
        <NavLink to='/earphones' className='link'>
          <img src={earphones} className='category-product-img' />
          <h3>EARPHONES</h3>
          <Shop>
            <h4>SHOP</h4>
            <img src={rightArrow} className='right-arrow-img' />
          </Shop>
        </NavLink>
      </Card>
    </Container>
  );
}

export default Category;

const Container = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 70px auto;
  margin-bottom: 35px;
  padding: 50px 0;
  @media (max-width: 768px) {
    margin-top: 50px;
    justify-content: center;
  }
`

const Card = styled.div`
  width: 30%;
  height: 170px;
  background-color: #F1F1F1;
  margin: 0px 10px 35px 10px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  cursor: pointer;
  user-select: none;
  &:hover{
    .category-product-img{
      transform: scale(1.2) translateX(-42%);
    }
  }
  @media (max-width: 847px) {
    width: 90%;
    margin: 50px 0;
  }
  img{
    width: 138px;
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s ease-in-out;
    h3{
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 2px;
    }
  }
  .link{
    color: inherit;
  }
`

const Shop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
  h4{
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2px;
    color: rgba(0,0,0,0.5);
  }
  .right-arrow-img{
    position: inherit;
    width: 10px;
    height: 14px;
    margin-left: 15px;
  }
`