import { React } from "react";
import styled from 'styled-components'
import TypeWriterText from '../components/TypeWriterText'
import Carousel from '../components/Carousel'
// import { cubicCoordinates, stepsCoordinates } from 'easing-coordinates'
// import { useSpring, animated, to as interpolate, createInterpolator } from '@react-spring/web'
// import { useMemo } from "react";

//Section
//min-height : This is calculating spacing per window size before scroll
const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
background-image: linear-gradient(144deg, yellow, green);

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
min-height: 80vh;

display: flex-column;
justify-content: center;
align-items: center;
text-align: center;
margin: auto;
width: 50%;
padding: 10px;
`



const Home = () => {
  return (
    <Section>
      <Container>
        <TypeWriterText />
        <Carousel/> 
      </Container>
    </Section>
  )
}

export default Home