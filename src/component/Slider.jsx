import React, {useState} from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems} from "../data";

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction ==="left"){
            setSlideIndex(slideIndex >0 ? slideIndex-1: 2);
        } else 
                {
                    setSlideIndex(slideIndex <2 ? slideIndex+1: 0);
                }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map((items) => (
                <Slice bg={items.bg} key = {items.id}> 
            <ImgContainer>
                <Image src={items.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{items.title}</Title>
                <Desc>{items.desc}</Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>
            </Slice>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #f7f7f7;
border-radius: 50%;
display:flex;
align-items : center;
justtify-content: center;
position: absolute;
top: 0;
bottom: 0;
left : ${props => props.direction === "left" && "10px"};
right : ${props => props.direction === "right" && "10px"};
margin : auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;
const Wrapper = styled.div`
display: flex;
height: 100%;
transform: translatex(${props => props.slideIndex*-100}vw);
transition: all 1.5s ease;
`;
const Slice = styled.div`
display: flex;
align-items: center; 
width: 100vw;
height: 100%
background-color : #${props => props.bg}
`
const ImgContainer = styled.div`
flex: 1; 
height: 100%;
`
const Image = styled.img`
height: 80%;
`
const InfoContainer = styled.div` 
flex: 1;
padding: 50px;
`
const Title = styled.h1`
    font-size : 70px
 `
const Desc = styled.p`
    margin: 50px opx;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 3px;
 `
const Button = styled.button`
    padding : 10px;
    font-size :20px;
    background-color: transparent;
    cursor:pointer;
 `