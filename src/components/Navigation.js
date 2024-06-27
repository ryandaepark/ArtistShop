import styled from "styled-components";
import { React } from "react";
import { Link } from 'react-router-dom';
import solarLogo from "../RyanAssets/MainLogo.PNG";
import x from "../RyanAssets/x_logo.png";
import instagram from "../RyanAssets/insta_logo.png";

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

.main {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    padding-bottom: 4rem;
}

.sub {
    height: 4rem;
    margin: .5rem auto;
    padding: 1rem;
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

.subitem{
    display: block;
    color: black;
    padding: 10px 15px;
    margin: 1rem;
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

const LogoContainer = styled.div`
    margin: 0 auto;
    width: 70%;
    padding-top: 3rem;
`

const Navigation = () => {
    return (
        <Section>
            <NavBar>
                <LogoContainer>
                    <img class="main" src={solarLogo}/>
                </LogoContainer>
                <Menu>
                    <Link to="/ArtistShop"> 
                    <MenuItem>Home</MenuItem>
                    </Link>

                    <DropDown>
                        <Link to="/ArtistShop/gallery"> 
                        <MenuItem>Gallery</MenuItem>
                        </Link>
                        <div class="content">
                            <Link to="/ArtistShop/gallery/minime"> 
                            <a class="subitem"> Mini Me </a>
                            </Link>

                            <Link to="/ArtistShop/gallery/illustrations"> 
                            <a class="subitem"> Illustrations </a>
                            </Link>

                            <Link to="/ArtistShop/gallery/animations"> 
                            <a class="subitem"> Animations </a>
                            </Link>
                        </div>
                    </DropDown>

                    <Link to="/ArtistShop/commissions"> 
                    <MenuItem>Commissions</MenuItem>
                    </Link>

                    <Link to="/ArtistShop/shop"> 
                    <MenuItem>Shop</MenuItem>
                    </Link>

                    <Link to="/ArtistShop/aboutme"> 
                    <MenuItem>About Me</MenuItem>
                    </Link>
                    <a href="https://twitter.com/solarbroccoli"> <img class="sub" src={x}/> </a>
                    <a href="https://www.instagram.com/solarbroccoli/"> <img class="sub" src={instagram}/> </a>
                </Menu>
            </NavBar>
        </Section>
    )
}

export default Navigation;