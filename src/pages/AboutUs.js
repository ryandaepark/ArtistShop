import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import linkedIn from '../RyanAssets/LI-In-Bug.png'
import mainLogo from '../RyanAssets/Cover.png'

//Section
const Section = styled.section`
width: 75%;
margin-top: 2rem;
`

const Container = styled.div`
flex-direction: column;
display: flex;
min-height: 80vh;
justify-content: center;
align-items: center;
`

const TextBlock = styled.section`
margin: 0 10rem 1rem;
text-align: center;
width: 50%;
`

//Title
//border-bottom + width : underlines the text 
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxxl};
text-transform: uppercase;
display: flex;
margin: 1rem auto;
padding: 1rem 0;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;
`

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
text-align: center;
color: grey;
font-weight: 400;
margin-bottom: 1rem;
padding-bottom: 2rem;
`

const AboutUs = () => {
  return (
    <Section>
    <Container>
    <Title> About Me </Title>
    <SubTitle> My inspiration, my work, and credits </SubTitle>
      <img src={mainLogo} class="w-80"/>
      <TextBlock>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
      </TextBlock>
      <TextBlock> Enjoy! </TextBlock>
      <TextBlock> SolarBrocolli </TextBlock>
      <Link> <img src={linkedIn} class="w-12"/> </Link>
    </Container>
    </Section>
  )
} 

export default AboutUs