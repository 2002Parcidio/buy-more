import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/vender">Vender</Link>
        </li>
        <li>
          <Link to="/comprar">Comrar</Link>
        </li>
        <li>
          <Link to="/netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/apoio">Apoio</Link>
        </li>
      </ul>
    );
}
export default NavBar;