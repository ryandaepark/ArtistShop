import React from 'react'
import styled from 'styled-components'
//This import can be found on this site https://www.npmjs.com/package/typewriter-effect
import Typewriter from 'typewriter-effect';
import Button from './Button'

//Title
//text-transform: capilizes the first letter on every sentence
//span: changes the case and font for everything
//.text-1 : changes color for <span class= "text-1">
const Title = styled.h2`
font-family: 'Caveat Variable', sans-serif;
font-size: ${props => props.theme.fontxxxl};
text-transform: capitalize;
text-self: center;
padding-bottom: 1rem;
span{
  font-family: 'Caveat Variable', sans-serif;
  color: black;
}
`

//SubTitle
//font-weight: is for darkness/lightness of text
//margin-bottom: used to recenter to the top
//align-self: flex-start: used to make in line to the left 
const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
text-self: center;
padding-bottom: 2rem;
`

//ButtonContainer
//Not sure why but width changes nothing
const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
`

//1138
const TypeWriterText = () => {
  return (
    <>
      <Title>
      Elijah LastName
      {/* <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-1">Brewery Reviews.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-2">Cafe Reviews.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      /> */}
    </Title> 
    <SubTitle> "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in." </SubTitle>
    {/* <ButtonContainer>
      <Button text ="Explore" link="#about" />
    </ButtonContainer> */}
    </>
  );
};

export default TypeWriterText