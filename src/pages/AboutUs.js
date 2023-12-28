import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import linkedIn from '../RyanAssets/LI-In-Bug.png'
import mainLogo from '../RyanAssets/Cover.png'

const Section = styled.section`
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

const AboutUs = () => {
  return (
    <Section>
      <img src={mainLogo} class="w-80"/>
      <TextBlock>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
      </TextBlock>
      <TextBlock> Enjoy! </TextBlock>
      <TextBlock> SolarBrocolli </TextBlock>
      <Link> <img src={linkedIn} class="w-12"/> </Link>
    </Section>
  )
} 

export default AboutUs