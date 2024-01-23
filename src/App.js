import styled, { ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes'
import{Routes, Route} from 'react-router-dom';
import './index.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';

//START OF ART PAGE
import Gallery from './pages/Gallery';
import Animations from './pages/Gallery_Animations';
import Illustrations from './pages/Gallery_Illustrations';
import MiniMe from './pages/Gallery_MiniMe';
import AboutMe from './pages/AboutMe';
import Commissions from './pages/Commissions';
import Shop from './pages/Shop';

import { UserContextProvider } from './components/UserContext';


const Page = styled.section`
display: flex;
justify-content: center;
align-items: flex-start;
margin: 0 auto;
width: 90%;
`

//Remove showcase
function App() {
  return (
    <>
    <UserContextProvider>
      <GlobalStyles />
      <ThemeProvider theme={light} >
      <Page>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/gallery" element={<Gallery />} />
          <Route path= "/commissions" element={<Commissions />} />
          <Route path= "/shop" element={<Shop />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/gallery/minime" element={<MiniMe />} />
          <Route path="/gallery/animations" element={<Animations />} />
          <Route path="/gallery/illustrations" element={<Illustrations />} />
          {/* <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} /> */}
          {/* <Route path="/cafes/create" element={<CreatePost/>} />
          <Route path="/breweries/create" element={<CreatePost/>} /> */}
          {/* <Route path="/post/:id" element={<PostPage/>} /> */}
        </Routes>
      </Page>
      </ThemeProvider>
    </UserContextProvider>
    </>
  );
}

export default App;
