import styled from 'styled-components'
import Popup from 'reactjs-popup';
import React, { useState } from 'react';

//Item
const Item = styled.div`
padding: .1rem auto;
margin: 1rem;
width: auto;
display: inline-block;      
justify-content: center;
align-items: center;    
cursor: pointer;

img {
    display:block;
    width: 100%;
}
`

//ImageContainer
// const ImageContainer = styled.div`
// margin: 1rem;
// padding: 1rem;
// cursor: pointer;
// background-color: pink; 


// `

//Name
const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
padding-top: 1rem;
`

//Position
const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
margin-top: 1rem;
font-weight: 400;
`

//InfoContainer
const InfoContainer = styled.div`
padding: 1rem ;
margin-bottom: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: green;
`

const PopupContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-text: center;
margin: 0 auto;
padding: 1rem;
background-color: white;
border: 0.5rem outset green;

img{
height: 700px;
}
`



export default function Post({title, img, author}) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return(
        <Item>
            <img src={img} onClick={() => setOpen(o => !o)}/>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <PopupContainer>
                    <a onClick={closeModal}>
                        &times;
                    </a>
                    <img src={img} />
                    <Name> {title} by {author} </Name>
                </PopupContainer>
            </Popup>
        </Item>
    );
  }