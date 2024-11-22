import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/REACT_241121_07_Home';
import About from './pages/REACT_241121_08_About';
import Profile from './pages/REACT_241121_09_Profile';
import Articles from './pages/REACT_241122_01_Articles';
import Article from './pages/REACT_241122_01_Article';
import Layout from './styles/REACT_241122_02_Layout';
import Login from './pages/REACT_241122_03_Login';
import GlobalStyle from './styles/REACT_241122_04_GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<Article />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
