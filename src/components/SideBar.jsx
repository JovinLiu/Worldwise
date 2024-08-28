import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./SideBar.module.css";
import Disclaimer from "./Disclaimer";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
      <Disclaimer />
    </div>
  );
}

export default SideBar;
