import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header mx-auto d-flex align-items-center" style={{ width: '1400px' }}>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          <NavLink to="/" className="nav-link" >Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
