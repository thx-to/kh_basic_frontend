import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './REACT_241121_07_Home';
import About from './REACT_241121_08_About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
