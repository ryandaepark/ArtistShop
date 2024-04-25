import styled from 'styled-components'
import { React } from "react";
import bagIcon from '../RyanAssets/Shop_BagIcon.png';
import computer from '../RyanAssets/Shop_ComputerIcon.png'
import { Link } from 'react-router-dom';

//Section
//min-height : This is calculating spacing per window size before scroll
const Section = styled.section`
width: 75%;
margin-top: 2rem;
`

//Title
//border-bottom + width : underlines the text 
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxxl};
font-weight: bold;
text-transform: uppercase;
display: flex;
margin: 1rem auto;
padding: 1rem 0;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin: auto;
position: relative;
height: 75vh;

.comp{
  width: 50%;
  margin: auto;
}


a {
  margin: auto;
  position: absolute;
  rotate: 3deg;
  height: 15%;

  img{
    height:  100%;
  }
}

.bag:hover{
  animation: shake 0.5s;
  animation-iteration-count: infinite;

  @keyframes shake {
    50% { transform: rotate(8deg); }
    100% { transform: rotate(-8deg); }
  }
}
`


const Shop = () => {
  return (
    <Section>
    <Title> Shop </Title>
    <Container>
      <img src={computer} class="comp" />
      <a href="https://linktr.ee/solarbroccoli"> <img src={bagIcon} class="bag"/> </a> 
    </Container>
    </Section>
  )
}

export default Shop