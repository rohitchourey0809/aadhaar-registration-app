import React from "react";
import AadharForm from "./components/Aadhar";
import DisplayData from "./components/Display";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AadharForm/>} />
      <Route path="/display" element={<DisplayData/>} />
    </Routes>
  );
}

export default App;
