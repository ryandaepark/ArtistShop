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
import AboutUs from './pages/AboutUs';
// import Login from './pages/Login';
// import Register from './pages/Register';
import { UserContextProvider } from './components/UserContext';
// import CreatePost from './pages/CreatePost';
// import PostPage from './pages/PostPage';
import Shop from './pages/Shop';

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
          <Route path= "/shop" element={<Shop />} />
          <Route path="/aboutus" element={<AboutUs />} />
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
