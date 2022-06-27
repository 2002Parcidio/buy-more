import './App.css';
import Home from './components/pages/Home';
import Vender from './components/pages/Vender';
import Comprar from './components/pages/Comprar';
import Apoio from './components/pages/Apoio';
import Serviços from './components/pages/Serviços';
import Carrinho from './components/pages/Carrinho';
import Cart from './components/pages/Cart';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from 'react-use-cart';

 function App () {
  

  return (
    <div className='App'>

       <Router>
    <CartProvider>
    <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/vender' element={<Vender />}></Route>
        <Route path='/comprar' element={<Comprar />}></Route>
        <Route path='/apoio' element={<Apoio />}></Route>
        <Route path='/servicos' element={<Serviços />}></Route>
        <Route path='/carrinho' element={<Carrinho />}></Route>
    </Routes>
  </CartProvider>
    </Router>
    
    </div>
  
  );
}
export default App;