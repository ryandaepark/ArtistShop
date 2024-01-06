import styled from "styled-components";
import Button from "./Button";
import { React, useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "./UserContext";
import solarLogo from "../RyanAssets/solarlogo.png";

const Section = styled.section`
width: 20vw;
margin-top: 2rem;
`

const NavBar = styled.nav`
display: flex-column;
align-items: center;
justify-content: center;
width: 85%;
margin: 0 auto;

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  padding-bottom: 7rem;
}
`

const Menu = styled.ul`
display: flex-column;
align-items: center;
justify-content: center;
text-align: center;
`

//This is where the menu item is being styled
//The after and hover is being used to create a line underneath the selection
//NOTE: connected by using &:hover::after (this connected the prev and the
//       next statement)
const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;
padding: 1rem;
width: 50%;
margin: auto;

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
}
&:hover::after{
    width: 100%;
}
`

const Navigation = () => {
    return (
        <Section>
            <NavBar>
                <img src={solarLogo}/>
                <Menu>
                    <Link to="/"> 
                    <MenuItem>Home</MenuItem>
                    </Link>
                    <Link to="/gallery"> 
                    <MenuItem>Gallery</MenuItem>
                    </Link>
                    <Link to="/shop"> 
                    <MenuItem>Shop</MenuItem>
                    </Link>
                    <Link to="/aboutus"> 
                    <MenuItem>About Me</MenuItem>
                    </Link>
                </Menu>
            </NavBar>
        </Section>
    )
}

export default Navigation;