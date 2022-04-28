
import './App.css';
import Home from './components/pages/Home';
import Vender from './components/pages/Vender';
import Comprar from './components/pages/Comprar';
import Apoio from './components/pages/Apoio';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div className='App'>
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/vender' element={<Vender />}></Route>
        <Route path='/comprar' element={<Comprar />}></Route>
        <Route path='/apoio' element={<Apoio />}></Route>
      
    </Routes>
    </Router>
    </div>
  
  );
}

