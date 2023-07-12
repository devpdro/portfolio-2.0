import React from "react";
import styles from "../../styles/layout/SidebarItem.module.scss";

const SidebarItem = ({ Icon, Text }) => {
  return (
    <div className={styles.container}>
      <Icon />
      {Text}
    </div>
  );
};

export default SidebarItem;
