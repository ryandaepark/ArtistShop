import styled from 'styled-components'
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Post from '../components/Post'
import CommisionForm from '../components/InquiryForm'
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
border: 2px solid #73AD21;
border-radius: 25px;
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


const Commissions = () => {
  return (
    <Section>
    <Title> Commissions </Title>
    <SubTitle> Purchase custom work done by me </SubTitle>
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
    <CommisionForm/>
    </Section>
  )
}

export default Commissions