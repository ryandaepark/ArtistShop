import styled from 'styled-components'
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Post from '../components/Post'

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
padding-bottom: 2rem;
`

const Shop = () => {
  // const [posts, setPosts] = useState([]);
  
  // useEffect(() => {
  //   fetch('http://localhost:4000/post').then(response => {
  //     response.json().then(posts => {
  //       setPosts(posts);
  //     });
  //   });
  // }, []);

  // const breweries = posts.filter((post) => post.type === "breweries")

  return (
    <Section>
    <Title> Shop </Title>
    <SubTitle> Purchase custom work done by me </SubTitle>
      {/* <div class="grid grid-cols-3 gap-3">
        {posts.length > 0 && breweries.map(brewery =>(
          <Post {...brewery} />
        ))}
      </div> */}
    </Section>
  )
}

export default Shop