import { Outlet, NavLink } from "react-router-dom";

export const Layout = (props) => {
  return (
    <div className="Layout">
      <header>
        <ol>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/class">HomeClass</NavLink>
          </li>
          <li>
            <NavLink to="/timer">TimerClass</NavLink>
          </li>
          <li>
            <NavLink to="/formclasspage">Form Page</NavLink>
          </li>
          <li>
            <NavLink to="/hook-search-logic-inside">
              Search Page:: logic-inside
            </NavLink>
          </li>
          <li>
            <NavLink to="/hook-search-logic-outside">
              Search Page:: logic-outside
            </NavLink>
          </li>
        </ol>
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
};
