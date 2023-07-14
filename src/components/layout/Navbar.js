import React from "react";
import styles from "../../styles/layout/Navbar.module.scss";

function Navbar() {
  return (
    <>
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
            <a href="#a">Início</a>
          </li>
          <li>
            <a href="#a">Sobre</a>
          </li>
          <li>
            <a href="a#">Habilidades</a>
          </li>
          <li>
            <a href="#a">Certificações</a>
          </li>
        </ul>
      </nav>
      <div className={styles.section_center}>
        <h1>{"<"}Portfólio/{">"}</h1>
      </div>
    </>
  );
}

export default Navbar;
