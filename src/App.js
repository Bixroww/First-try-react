import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './page/About';
import Home from './page/Home';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/about"  element={<About/>} />
      {/* path="*" fonctionne si jamais l'url ne  correspond à rien de declaré */}
      <Route path="*"  element={<Home/>} />
    </Routes>
   </BrowserRouter>
  );
};

export default App;
