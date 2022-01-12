import { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
export const Layout = (props) => {
  const location = useLocation()
  useEffect(() => {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  }, [])
  return (
    <div className="Layout">
      <ul id="dropdown1" className="dropdown-content">
        <li className={isActive(location.pathname, '/usestate')}>
          <NavLink to="/usestate">
            usestate
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useeffect')}>
          <NavLink to="/useeffect">
            useeffect
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useref')}>
          <NavLink to="/useref">
            useref
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/withcontex')}>
          <NavLink to="/withcontex">
            withcontex
          </NavLink>
        </li>
      </ul>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          <ul className="right hide-on-med-and-down">
            <li className={isActive(location.pathname, '/')}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={isActive(location.pathname, '/about')}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className={isActive(location.pathname, '/className')}>
              <NavLink to="/className">HomeClass</NavLink>
            </li>
            <li className={isActive(location.pathname, '/timer')}>
              <NavLink to="/timer">TimerClass</NavLink>
            </li>
            <li className={isActive(location.pathname, '/formclasspage')}>
              <NavLink to="/formclasspage">Form Page</NavLink>
            </li>
            <li className={isActive(location.pathname, '/hook-search-logic-outside')}>
              <NavLink to="/hook-search-logic-outside">
                Search Page:: logic-outside
              </NavLink>
            </li>
            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Hooks<i className="material-icons right">arrow_drop_down</i></a></li>
          </ul>
        </div>
      </nav>
      <Outlet />
      <footer></footer>
    </div>
  );
};

function isActive(pathname, to) {
  return pathname === to ? 'active' : ''
}