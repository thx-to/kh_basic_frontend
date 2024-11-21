import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './REACT_241121_07_Home';
import About from './REACT_241121_08_About';
import Profile from './REACT_241121_09_Profile';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
