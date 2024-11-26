import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/REACT_241121_07_Home';
import About from './pages/REACT_241121_08_About';
import Profile from './pages/REACT_241121_09_Profile';
import Articles from './pages/REACT_241122_01_Articles';
import Article from './pages/REACT_241122_02_Article';
import Layout from './styles/REACT_241122_03_Layout';
import Login from './pages/REACT_241122_04_Login';
import GlobalStyle from './styles/REACT_241122_05_GlobalStyle';
import UserStore from './context/REACT_241125_02_UserStore';
import Setting from './pages/REACT_241125_03_Setting';
import ImageUploader from './pages/REACT_241125_05_ImageUploader';
import MaterialEx from './pages/REACT_241126_01_MaterialEx';
import CardEx from './pages/REACT_241126_02_CardEx';
import GridEx from './pages/REACT_241126_03_GridEx';

function App() {
  return (
    <>
      {/*
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<Article />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/firebase" element={<ImageUploader />} />
            </Route>
          </Routes>
        </Router>
      </UserStore>
      <MaterialEx />
      <CardEx />
      */}
      <GridEx />
    </>
  );
}

export default App;
