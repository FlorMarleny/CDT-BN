import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Nosotros from "./pages/nosotros/Nosotros";
import CursosyProgramas  from "./pages/cursosyprogramas/CursosyProgramas";
import Contacto  from "./pages/contacto/Contacto";
import Academico   from "./pages/academico/Academico";
import NotFoundPage from './pages/404/NotFoundPage';
import Cursos from './pages/cursos/Cursos';
import Programas from './pages/programas/Programas';
import { DarkModeProvider} from "./DarkModeContext"; // Import the DarkModeProvider
import Menu from "./components/Navbar/Menu";



function App() {


  return (

    <DarkModeProvider> {/* Wrap the entire application with DarkModeProvider */}
    <BrowserRouter>
      <div className="container">
      <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cursosyprogramas" element={<CursosyProgramas />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/academico" element={<Academico />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
