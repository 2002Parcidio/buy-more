import * as React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Vender from './components/pages/Vender';
import Comprar from './components/pages/Comprar';
import Netflix from './components/pages/Netflix';
import Apoio from './components/pages/Apoio';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    
     <Router>
    <NavBar />

    <Routes>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/vender">
        <Vender />
      </Route>
      <Route path="/comprar">
        <Comprar />
      </Route>
      <Route path="/netflix">
        <Netflix />
      </Route>
      <Route path="/apoio">
        <Apoio />
      </Route>
    </Routes>
    </Router>
  
  );
}

export default App;
