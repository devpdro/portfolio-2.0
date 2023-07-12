import React from "react";
import styles from "../../styles/layout/Sidebar.module.scss";
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

import SidebarItem from "./SidebarItem";

const Sidebar = ({ active, sidebar }) => {
  const closeSidebar = () => {
    active(false);
  };

  const leftValue = sidebar ? "0" : "-100%";

  return (
    <nav style={{ left: leftValue }} className={styles.container} sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <div className={styles.content}>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaChartBar} Text="Statistics" />
        <SidebarItem Icon={FaUserAlt} Text="Users" />
        <SidebarItem Icon={FaEnvelope} Text="Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </div>
    </nav>
  );
};

export default Sidebar;
