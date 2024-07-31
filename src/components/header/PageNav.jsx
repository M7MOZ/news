import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
function PageNav() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            New
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/popular"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trending"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
