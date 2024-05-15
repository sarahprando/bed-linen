import { NavLink } from 'react-router-dom';
import Shopping from '../assets/icon/shopping.svg?react';
import Account from '../assets/icon/account.svg?react';
import Language from '../assets/icon/language.svg?react';

const Navbar = () => {

  return (
    <header className="header mx-auto d-flex align-items-center position-sticky">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav text-color">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/payment" className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}>
              Payment
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}>
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}>
              Blog
            </NavLink>
          </li>
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
  );
};

export default Navbar;
