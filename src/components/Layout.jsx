import { useEffect, useRef } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
export const Layout = (props) => {
  const dropdownRef = useRef(null)
  const sidenavRef = useRef(null)
  const location = useLocation()
  useEffect(() => {
    // for Pure JS
    // let elems = document.querySelectorAll('.dropdown-trigger');
    // M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
    // var sideNavs = document.querySelector('.sidenav');
    // M.Sidenav.init(sideNavs, { inDuration: 300, outDuration: 225 });

    const dropdownInstanse = M.Dropdown.init(dropdownRef.current, { inDuration: 300, outDuration: 225 });
    const sideInstanse = M.Sidenav.init(sidenavRef.current);
    return () => {
      sideInstanse.destroy()
      dropdownInstanse.destroy()
    }
  }, [])
  return (
    <div className="Layout">
      <ul id="dropdown1" className="dropdown-content">
        <li className={isActive(location.pathname, '/useState')}>
          <NavLink to="/hooks/useState">
            useState
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useEffect')}>
          <NavLink to="/hooks/useEffect">
            useEffect
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useRef')}>
          <NavLink to="/hooks/useRef">
            useRef
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/withContex')}>
          <NavLink to="/hooks/withContex">
            withcontex
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useLayoutEffect')}>
          <NavLink to="/hooks/useLayoutEffect">
            uselayouteffect
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useCallback')}>
          <NavLink to="/hooks/useCallback">
            usecallback
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useMemo')}>
          <NavLink to="/hooks/useMemo">
            usememo
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useImperativeHandle')}>
          <NavLink to="/hooks/useImperativeHandle">
            useimperativehandle
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useReducer')}>
          <NavLink to="/hooks/useReducer">
            useReducer
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useReducer')}>
          <NavLink to="/hooks/useRouterHooks/qwertys">
            useRouterHooks
          </NavLink>
        </li>
      </ul>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>

          <ul className="right hide-on-med-and-down" id="nav-mobile">
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
            <li><a ref={dropdownRef} className="dropdown-trigger" href="#!" data-target="dropdown1">Hooks<i className="material-icons right">arrow_drop_down</i></a></li>
          </ul>

          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav sidenav-close" ref={sidenavRef}>
        <li className={isActive(location.pathname, '/useState')}>
          <NavLink to="/hooks/useState">
            usestate
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useEffect')}>
          <NavLink to="/hooks/useEffect">
            useeffect
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useRef')}>
          <NavLink to="/hooks/useRef">
            useref
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/withContex')}>
          <NavLink to="/hooks/withContex">
            withcontex
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useLayoutEffect')}>
          <NavLink to="/hooks/useLayoutEffect">
            uselayouteffect
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useCallback')}>
          <NavLink to="/hooks/useCallback">
            usecallback
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useMemo')}>
          <NavLink to="/hooks/useMemo">
            usememo
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useImperativeHandle')}>
          <NavLink to="/hooks/useImperativeHandle">
            useimperativehandle
          </NavLink>
        </li>
        <li className={isActive(location.pathname, '/useReducer')}>
          <NavLink to="/hooks/useReducer">
            usereducer
          </NavLink>
        </li>
      </ul>
      <Outlet />
      <footer></footer>
    </div>
  );
};
function isActive(pathname, to) {
  return pathname === to ? 'active' : ''
}