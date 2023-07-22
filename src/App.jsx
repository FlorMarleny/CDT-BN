import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div>
          <Menu />
        </div>
        <div>
          <Route path="/home" element={<Home />} />
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
