import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//components
import Card from "../components/Card";
import Category from "../components/Category";
import About from "../components/About";

const CategoryPage = ({ productsList }) => {

  const { category } = useParams();
  const products = productsList.filter((product) => product.category === category).sort( product => product.new ? -1 : 1);

  useEffect(() => { //scroll to top on page load
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <>
    <Header>
      <h1>{category.toUpperCase()}</h1>
    </Header>
    <ProductsContainer>
      {products.map((product) => (
      <Card
        key={product.id}
        slug={product.slug}
        image={product.image.desktop}
        name={product.name}
        description={product.description}
        new={product.new}
        category={category} />))}
    </ProductsContainer>
    <Category />
    <About />
    </>
  );
};

export default CategoryPage;

const Header = styled.div`
  width: 100%;
  height: 55vh;
  background-color: #191919;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 100px;
  margin-bottom: 50px;
  h1{
    color: white;
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
`

const ProductsContainer = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`