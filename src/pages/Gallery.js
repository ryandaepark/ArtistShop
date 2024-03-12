import styled from 'styled-components';
import { React, useEffect, useState } from "react";
import testImage from '../RyanAssets/girl.jpg';
import { Link } from 'react-router-dom';
import MiniMePanel from '../RyanAssets/Panel-MiniMe.gif';
import IllustrationPanel from '../RyanAssets/Panel-Illustrations.gif';

//Section
//First block
const Section = styled.section`
width: 75%;
margin-top: 2rem;
`

//Container
//width: affects side borders (works with margin)
//min-height: affects bottom border (Note: vh = screen height percent, 
//            vw = screen width percent)
//margin: creating the boarder on the left side (using 0 to say left and auto
//        for auto-assigning left and ride size)
//display: flex : makes things in container to be written in-line
//justify-content: center: makes it centered horizontally
//align-items: center: makes it centered vertically
const Container = styled.div`
display: flex-column;
justify-content: center;
align-items: center;
text-align: center;
margin: auto;
`

//Title
//border-bottom + width : underlines the text 
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxxl};
font-weight: bold;
text-transform: uppercase;
display: flex;
margin: 1rem auto;
padding-top: 1rem;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;
`

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
font-weight: 600;
text-transform: capitalize;
text-align: center;
color: grey;
`

const GalleryItem = styled.div`
height: 200px;
max-width: 800px;
display: flex;
justify-content: center;
align-items: center;
margin: 2rem auto;
text-align: center;
font-size: ${(props) => props.theme.fontxxl};
font-weight: 500;
color: white;
background-size: cover;
background-position: center;
transition: border 0.3s, padding 0.3s, box-shadow 0.3s;
text-shadow: -2px -2px 0 #73ad21, 2px -2px 0 #73ad21, -2px 2px 0 #73ad21, 2px 2px 0 #73ad21;

:hover{
  box-shadow: 0 0 40px 5px #73ad21;
  padding-bottom: 1rem;
}
`

const Panel1 = styled(GalleryItem)`
background-image: url(${MiniMePanel})
`

const Panel2 = styled(GalleryItem)`
background-image: url(${IllustrationPanel})
`

const Panel3 = styled(GalleryItem)`
background-image: url(${testImage})
`

const Gallery = () => {

  return (
    <Section>
    <Title> Gallery </Title>
    <SubTitle> 2020 - 2024 </SubTitle>
      <Container>
        <Link to="/gallery/minime"> 
          <Panel1> Mini Me </Panel1>
        </Link>

        <Link to="/gallery/illustrations">
          <Panel2>Illustrations</Panel2>
        </Link>

        <Link to="/gallery/animations">
          <Panel3>Animations</Panel3>
        </Link>
      </Container>
    </Section>
  )
}

export default Gallery