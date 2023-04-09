import { NavLink, Outlet } from "react-router-dom";
import styles from "./Root.module.scss";

export default function Root() {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <ol>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/grass"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                Grass
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ol>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Made by Steffen Samseth</footer>
    </>
  );
}
