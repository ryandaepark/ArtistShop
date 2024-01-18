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
font-size: ${props => props.theme.fontlg};

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: rgba(115, 173, 33, 0.8);
    transition: width 0.3s ease;
}
&:hover::after{
    width: 100%;
}
`
const DropDown = styled.li`

a{
    display: block;
    color: black;
    padding: 10px 15px;
}

.content{
    overflow: hidden;  
    height: 0;  
    opacity: 0;
    width: 10rem;
    margin: 0 auto;
    transition: height 0ms 400ms, opacity 0.5s linear;
}

:hover .content{
    height: 100%;
    display: block;
    opacity: 1;
}

a:hover .subitem{
    background-color: rgba(115, 173, 33, 0.6); 
    border-radius: 25px;
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

                    <DropDown>
                        <Link to="/gallery"> 
                        <MenuItem>Gallery</MenuItem>
                        </Link>
                        <div class="content">
                            <Link to="/gallery/minime"> 
                            <a class="subitem"> MiniMe </a>
                            </Link>

                            <Link to="/gallery/graphics"> 
                            <a class="subitem"> Graphics </a>
                            </Link>

                            <Link to="/gallery/animations"> 
                            <a class="subitem"> Animations </a>
                            </Link>

                        </div>
                    </DropDown>
                    


                    <Link to="/shop"> 
                    <MenuItem>Shop</MenuItem>
                    </Link>
                    <Link to="/aboutme"> 
                    <MenuItem>About Me</MenuItem>
                    </Link>
                </Menu>
            </NavBar>
        </Section>
    )
}

export default Navigation;