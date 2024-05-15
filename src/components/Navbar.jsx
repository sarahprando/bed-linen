import { NavLink } from 'react-router-dom';
import Shopping from '../assets/icon/shopping.svg?react';
import Account from '../assets/icon/account.svg?react';
import Language from '../assets/icon/language.svg?react';

const Navbar = () => {
  return (
    <header className="header mx-auto d-flex align-items-center position-sticky">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav text-color">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/payment" className="nav-link">Payment</NavLink>
          <NavLink to="/catalog" className="nav-link">Catalog</NavLink>
          <NavLink to="/shop" className="nav-link">Shop</NavLink>
          <NavLink to="/blog" className="nav-link">Blog</NavLink>
        </ul>
      </nav>
      <div className="profile ml-auto d-flex">
        <NavLink to="/checkout">
          <Shopping />
        </NavLink>
        <NavLink to="/account">
          <Account />
        </NavLink>
        <NavLink to="/language">
          <Language />
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar;
