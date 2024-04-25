import React from 'react'
import styled from 'styled-components'
import mainLogo from '../RyanAssets/AboutMePic.JPG'

//Section
const Section = styled.section`
width: 75%;
margin-top: 2rem;
`

const Container = styled.div`
display: flex-column;
justify-content: center;
align-items: center;
text-align: center;
margin: auto;
`


const ContentContainer = styled.div`
margin: 6rem auto;
width: 65%;
display: flex; 
`

const TextBlock = styled.section`
margin: auto;
width: 50%;
height: 70%;
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

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
text-align: center;
color: grey;
font-weight: 400;
margin-bottom: 1rem;
padding-bottom: 2rem;
`

const AboutMe = () => {
  return (
    <Section>
    <Container>
    <Title> About Me </Title>
    <SubTitle> My inspiration, my work, and credits </SubTitle>
    </Container>

    <ContentContainer>
      <img src={mainLogo} class="w-80"/>
      <TextBlock> SolarBroccoli is an artist based in Los Angeles, California. <br/><br/> 
       SolarBroccoli uses  illustrative and animated works by mixing digital and traditional mediums to create pieces that speak to his daily thoughts, feelings, and influences. He enjoys celebrating many of his influences within pop culture. <br/> <br/>
       Enjoy, <br/> SolarBrocolli </TextBlock> 
    </ContentContainer>
    
    </Section>
  )
} 

export default AboutMe