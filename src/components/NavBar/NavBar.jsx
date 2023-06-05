import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {
  return (
    <header>
<h1>Chuampis Garage Sale</h1>
<nav>
    <ul>
        <li>Adultos</li>
        <li>Niños</li>
        <li>Otras categorias</li>
    </ul>
</nav>
<CartWidget/>
    </header>
  )
}

export default NavBar