import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  position:absolute;
  top:250px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  z-index:1;
  opacity:0.7;
  
`;

const Categories = () => {
  return (
    <Container>
   
        <CategoryItem />
   
    </Container>
  );
};

export default Categories;
