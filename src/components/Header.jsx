import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from "../features/car/carSlice"

import { useSelector } from 'react-redux';
const Header = () => {
  const [burgerStatus,setBurgerStatus] = useState(false);
  const cars  = useSelector(selectCars);
  console.log(cars);
  return (
    <div>
      <Container>
        <a>
          <img src={logo} alt="ww" />
        </a>
        <Menu>
        {cars && cars.map((car,index)=>
        {
       return   <a  key={index} href="#">{car}</a>
        }
        )}
          
       
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu onClick={()=> setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
        <CloseWrapper>
        <CustomClose onClick={()=>setBurgerStatus(false)}></CustomClose>
        </CloseWrapper>
        {cars && cars.map((car,index)=>
        {
       return <li>
            <a key={index} href="#">{car}</a>
          </li>
        }
        )}
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">CyberTruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
        
        </BurgerNav>
      </Container>
    </div>
  );
};

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.125rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 0.625rem;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 0.625rem;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
position: fixed;
top: 0;
right:0;
background-color: #FFFFFF;
width: 18.75rem;
z-index: 16;
height: 100vh;
list-style: none;
padding: 1.2rem;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.3s ease-in-out;
li{
  padding: 1rem 0;
  border-bottom: 1px solid rgba( 0,0,0,0.2);
  a{
    font-weight: 600;

  }
}
`;
const CustomClose = styled(CloseIcon)`

`;
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
`