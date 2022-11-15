import axios from 'axios';
import React, {useEffect, useState}from 'react'
import styled from "styled-components";
import {popularProducts} from '../data'
import Product from './Product';

function Products() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
      let componentMounted = true;
      const getProdcuts = async () => {
          setLoading(true);
          const response = await axios ('https://fakestoreapi.com/products');
          if (componentMounted) {
              const data = response.data;
              setData(data);
              setFilter(data);
              setLoading(false);
          }
          return () => {
              componentMounted = false;
          }
      }
      getProdcuts();
  }, []);
  return (
    <Container>
       {filter.map(data=>(
            <Product data= {data} key = {data.id}/>
       ))}
    </Container>
  )
}

export default Products

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;