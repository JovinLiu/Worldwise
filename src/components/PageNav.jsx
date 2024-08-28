import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

function PageNav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navBarContainer}>
        <Logo />
        <div className={styles.menu}>
          <ul>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/login" className={styles.ctaLink}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageNav;
