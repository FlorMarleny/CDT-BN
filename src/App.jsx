import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
