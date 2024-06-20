import styled from 'styled-components'
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Post from '../components/Post'
import InquiryForm from '../components/InquiryForm'
import ex_static from '../RyanAssets/Badtz Maru Cover.png'
import ex_animated from '../RyanAssets/Badtz Maru 2023.gif'

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
padding-top: 1rem;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;
`

const ExamplesBlock = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
align-text: center;
margin: 0 auto;
`

const Example = styled.div`
display: flex-column;
margin: 2rem;

img{
  width: 400px;
  padding: 2rem;
  border-radius: 10%;
}
`

const ExText = styled.div`
padding-top: 1rem;
text-align: center;
font-size: ${props => props.theme.fontxl};
`

const Container = styled.div`
text-align: center;
font-size: ${(props) => props.theme.fontxl};
width: 50%;
margin: 0 auto;
padding-top: 1rem;
`


//Inquiry Form works but for security reasons will be disconnected from Emailer for public site
const Commissions = () => {
  return (
    <Section>
    <Title> Commissions </Title>
    <ExamplesBlock>
      <Example> 
        <ExText> Illustrations - $50 </ExText>
        <img src={ex_static} /> 
      </Example>
      <Example> 
        <ExText> Animations - $110 </ExText>
        <img src={ex_animated} /> 
      </Example>
    </ExamplesBlock>
    <Container>
      DM on X or Instagram to Request Commissions
    </Container>
    {/* <InquiryForm/> */}
    </Section>
  )
}

export default Commissions