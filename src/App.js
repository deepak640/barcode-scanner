import React, { useState } from "react";
import Scanner from "./pages/Scanner";
import "./styles.css";
import Uploader from "./components/Uploader";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Option from "./pages/Option";
import ManualSearch from "./pages/ManualSearch";
function App() {
  const data = useSelector((state) => state.upload);
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!data ? <Uploader /> : <Option />} />
          <Route path="/barcode" element={<Scanner />} />
          <Route path="/search" element={<ManualSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
