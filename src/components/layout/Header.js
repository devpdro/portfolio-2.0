import React, { useState } from "react";
import styles from "../../styles/layout/Header.module.scss";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <nav className={styles.container}>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </nav>
  );
};

export default Header;
