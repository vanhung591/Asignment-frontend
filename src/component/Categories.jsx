import React from 'react'
import styled from "styled-components";
import {categories} from '../data'
import CategoryItem from './CategoryItem'

function Categories() {
  return (
    <Container>
        {categories.map(item => (
            <CategoryItem item={item} key = {item.id}/>
        ))}
    </Container>
  )
}

export default Categories

const Container = styled.div`
  display: flex;
  margin: 3px;
  height: 70vh;
  justify-content: space-between;
`;