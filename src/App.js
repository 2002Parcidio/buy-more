import * as React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Vender from './components/pages/Vender';
import Comprar from './components/pages/Comprar';
import Netflix from './components/pages/Netflix';
import Apoio from './components/pages/Apoio';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';

export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="vender" element={<Vender />} />
        <Route path="comprar" element={<Comprar />} />
        <Route path="netflix" element={<Netflix />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
