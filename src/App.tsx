// import { useState } from "react";
import "./App.css";
import Raff from "./Components/Raff/Raff";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raff" element={<Raff />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
