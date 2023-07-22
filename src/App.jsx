import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/navbar/Menu";
import { Home } from "./pages/Home";
import Nosotros from './components/nosotros/Nosotros';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
