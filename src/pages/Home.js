import { React } from "react";
import styled from 'styled-components'
import MainPanel from '../RyanAssets/MainPage.gif'

//Section
//min-height : This is calculating spacing per window size before scroll
const Section = styled.section`
width: 75%;
margin-top: 5%;
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
margin: 0 auto;
padding: 2rem;
background-position: center;
`

const Home = () => {
  return (
    <Section>
      <Container>
      <img src={MainPanel}/>
      </Container>
    </Section>
  )
}

export default Home