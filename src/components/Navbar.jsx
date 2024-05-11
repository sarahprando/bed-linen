import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header mx-auto d-flex align-items-center" style={{ width: '1400px' }}>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          <NavLink to="/" className="nav-link" >Home</NavLink>
          <NavLink to="/payment" className="nav-link">Payment</NavLink>
          <NavLink to="/catalog" className="nav-link">Catalog</NavLink>
          <NavLink to="/shop" className="nav-link">Shop</NavLink>
          <NavLink to="/blog" className="nav-link">Blog</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
