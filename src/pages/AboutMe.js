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



const AboutMe = () => {
  return (
    <Section>
    <Container>
    <Title> About Me </Title>
    </Container>

    <ContentContainer>
      <img src={mainLogo} class="w-80"/>
      <TextBlock> 
        SolarBroccoli is an artist based in Southern California. <br/><br/> 
        Solar utilizes illustration and animation to create pieces tha speak to his daily thoughts, feelings, and experiences. Many of his influences are shown through these mediums as a form of "fanart" to celebrate the media that shaped his tastes. <br/> <br/>
      </TextBlock> 
    </ContentContainer>
    
    </Section>
  )
} 

export default AboutMe