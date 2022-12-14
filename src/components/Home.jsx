import React from 'react'
import styled from "styled-components";
import Section from './Section';
import models from '../Assets/model-s.jpg'
import modelx from "../Assets/model-x.jpg"
import modely from "../Assets/model-y.jpg"
import model3 from "../Assets/model-3.jpg"
import solar from "../Assets/solar-panel.jpg"
import solarroof from "../Assets/solar-roof.jpg"
const Home = () => {
  return (
    <Container>
      <Section title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg = {models}
        leftBtnText = "Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg = {modely}
        leftBtnText = "Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg = {modelx}
        leftBtnText = "Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg = {model3}
        leftBtnText = "Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
      title="Lowest Cost Solar Panels in America"
        description="Money-Back Guarentee"
        backgroundImg = {solar}
        leftBtnText = "Custom Order"
        rightBtnText="Existing Inventory"
      >

      </Section>
      <Section
      title="Solar for New Roofs"
        description="Solar roof Costs less than a new roof plus solar panel"
        backgroundImg = {solarroof}
        leftBtnText = "Custom Order"
        rightBtnText="Existing Inventory"
      >

      </Section>
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;

`