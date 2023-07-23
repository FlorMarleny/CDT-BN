import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Nosotros from "./pages/nosotros/Nosotros";
import CursosyProgramas  from "./pages/cursosyprogramas/CursosyProgramas";
import Contacto  from "./pages/contacto/Contacto";
import Academico   from "./pages/academico/Academico";
import NotFoundPage from './pages/404/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cursosyprogramas" element={<CursosyProgramas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/academico" element={<Academico />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
