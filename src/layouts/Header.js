import { useDispatch, useSelector } from 'react-redux';

import { LOGOUT } from '../actions/authActions';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const user = useSelector(state => state.user);
  const dispach = useDispatch();

  const logout = () => {
    localStorage.clear();

    dispach({
      type: LOGOUT
    })
  }

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
      {isLoggedIn ? (<a className="navbar-item">Bienvenido {user.name}</a>): null}

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            {isLoggedIn ? (
              <button className='button is-info is-rounded' onClick={logout}>
                Cerrar Sessión
              </button>) : null}            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
