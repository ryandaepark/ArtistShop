import styled from 'styled-components'
import Popup from 'reactjs-popup';
import React, { useState } from 'react';

//Item
const Item = styled.div`
flex-basis: 350px; 
padding: .1rem auto;
margin: 1rem;
width: auto;
display: inline-block;      
justify-content: center;
align-items: center;    
cursor: pointer;
`

//Name
const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
padding-top: 1rem;
`   

const Year = styled.h2`
font-size: ${props => props.theme.fontmd};
font-weight: 400;
display: flex;
align-items: center;
justify-content: center;
padding-top: 1rem;
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
box-shadow: 0 0 50px 15px #73ad21;

img{
height: 700px;
}

video{
height: 700px;
}
`

const ImgWrap = styled.div`
position: relative;

img{
width: 100%;
}

p{
width: 100%;
height: 100%;
display: flex;
text-align: center;
justify-content: center;
align-items: center; 
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: ${props => props.theme.fontxl};
color: white;
background: rgba(0, 0, 0, 0.45);
transition: .5s ease;
opacity: 0;
}

p:hover{
opacity: 1;
}
`

export default function Post({title, img, type, gif, year}) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    
    let clicked_img;

    if (type == "Gif") {
        clicked_img = <img src={gif}/>
    } else if (type == "Mp4") {
        clicked_img = <video controls autostart autoPlay src={gif} type="video/mp4" />
    } else {
        clicked_img = <img src={img}/>
    }

    return(
        <Item>
            <ImgWrap>
                <p class="description" onClick={() => setOpen(o => !o)}> {title} </p>
                <img src={img}/>
            </ImgWrap>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <PopupContainer>
                    {clicked_img}
                    <Name> {title} </Name>
                    <Year> {year} </Year>
                </PopupContainer>
            </Popup>
        </Item>
    );
  }