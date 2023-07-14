import React from "react";
import styles from "../../styles/layout/Navbar.module.scss";

function Navbar() {
  return (
    <div>
      <input
        className={styles.menu_icon}
        type="checkbox"
        id="menu_icon"
        name="menu_icon"
      />

      <label htmlFor="menu_icon"></label>
      <nav className={styles.nav}>
        <ul className={styles.pt_5}>
          <li>
            <a href="#a">Work</a>
          </li>
          <li>
            <a href="#a">Studio</a>
          </li>
          <li>
            <a href="a#">News</a>
          </li>
          <li>
            <a href="#a">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.section_center}>
        <h1 class="mb-0">Portfólio</h1>
      </div>
    </div>
  );
}

export default Navbar;
