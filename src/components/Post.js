import styled from 'styled-components'
import star from '../RyanAssets/star.jpg';
import {formatISO9075} from "date-fns";
import { Link } from 'react-router-dom';

//Item
const Item = styled.div`
padding: .1rem auto;
margin: 1rem;

display: flex;      
flex-direction: column;  
justify-content: center;
align-items: center;     

border: 2px solid;
border-radius: 40px;
`

//ImageContainer
const ImageContainer = styled.div`
width: 55%;
margin: 2rem 1rem;
padding: 1rem;
min-height: 150px;
cursor: pointer;
background-color: red;

img{
  width: 100%;
  height: 400px;
  object-fit:cover;
  transition: all 0.3s ease;
}
`

//Name
const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
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

export default function Post({_id, title, summary, img, author}) {
    return(
        <Item>
            <ImageContainer>
            {/* <Link to={`/post/${_id}`}> */}
            <img src={img} />
            {/* </Link> */}
            </ImageContainer>
            <InfoContainer>
                <Name> {"Ryan"} </Name>
                <Position>{"ainsd spk fwef wefowk efw weof wefojowjoef woejf"}</Position>
            </InfoContainer>
        </Item>
    );
  }