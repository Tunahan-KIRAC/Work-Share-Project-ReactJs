import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { Gorevler } from './pages/Gorevler';
import { GorevVer } from './pages/GorevVer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>


        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/gorevler" element={<Gorevler />} />
          <Route path="/gorevVer" element={<GorevVer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
