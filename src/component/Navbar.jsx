import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

function Navbar() {
    const quality = useSelector(state => state.cart.amount)
    // console.log("log", quality);
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <SearchIcon style = {{color: "gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Center</Logo>
            </Center>
            <Right>
                <MuneItems>REGISTER</MuneItems>
                <MuneItems>SIGN IN</MuneItems>
                <Link to="/cart">
                <MuneItems>
                    <Badge badgeContent={quality} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MuneItems>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    height: 60px;
    padding-bottom: 20px;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items : center;
   justify-content: space-between;
   ${mobile({padding: "10px 0px" })}
`
const Left = styled.div`
   flex: 1;
   display: flex;

`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer; 
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border : none
`
const Center = styled.div`
    flex: 1;
    text-align: center
`
const Logo = styled.h1`
font-weight: bold
`

const Right = styled.div`
flex: 1;
display:flex;
text-align: center;
justify-content: flex-end;
`

const MuneItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`


