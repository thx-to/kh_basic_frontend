import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import UserStore from './context/UserStore';
import Login from './pages/signup/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;