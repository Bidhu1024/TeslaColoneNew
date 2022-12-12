/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";
// import backg from "../Assets/model-s.jpg";
import downarr from "../Assets/down-arrow.svg";
const Section = ({title, description,leftBtnText, rightBtnText}) => {
//  console.log(backgroundImg);
  return (
    <Wrap>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          <RightButton>{rightBtnText}</RightButton>
        </ButtonGroup>
        <DownArrow src={downarr}></DownArrow>
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;  
  /* background-image: url(${backgroundImg}); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-image: ${props => `url("/Assets/${props.bgImage}")`} */
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 2rem;
  @media(max-width:768px){
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 2.5rem;
  width: 16rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: .5rem;

`;
const RightButton = styled(LeftButton)`
background-color: #fff;
color: black; 
opacity: 0.65;

`;
const DownArrow = styled.img`
  margin: 1.25rem;
  height: 2.5rem;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
const Buttons = styled.div`

`;