import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";
import { Gorevler } from "./pages/Gorevler";
import { GorevVer } from "./pages/GorevVer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

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
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
      <div>
      <div style={{bottom:100,overFlow:"hidden",marginTop:100}}>
        <Footer />
      </div>
      </div>
      
      
    </div>
    
  );
}

export default App;
