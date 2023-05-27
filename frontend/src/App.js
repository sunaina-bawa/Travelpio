import logo from "./logo.svg";
import "./App.css";
import Form from "./Component/Form";
import Home from "./Component/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
