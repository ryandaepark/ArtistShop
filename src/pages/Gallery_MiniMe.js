import styled from 'styled-components'
import { React, useEffect, useState } from "react";
import Post from '../components/Post'
import Artworks from '../components/Artworks'

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
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
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

const minimes = Artworks.filter((post) => post.type === "MiniMe")

const Gallery_MiniMe = () => {
  return (
    <Section>
    <Title> Mini Me </Title>
      <Container>
        {Artworks.length > 0 && minimes.map(art =>(
          <Post {...art} />
        ))}
      </Container>
    </Section>
  )
}

export default Gallery_MiniMe