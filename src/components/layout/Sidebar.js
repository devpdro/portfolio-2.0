import React from "react";
import styles from "../../styles/layout/Sidebar.module.scss";

import { FaAdn, FaAngular } from "react-icons/fa";

function Sidebar() {
  return (
    <nav id={styles.social_sidebar}>
      <ul>
        <li>
          <a
            href="https://twitter.com/m412c0b"
            className="entypo-twitter"
          >
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="http://dribbble.com/m412c0"
            className="entypo-dribbble"
          >
            <FaAngular />
            <span>dribbble</span>
          </a>
        </li>
        <li>
          <a
            href="http://www.behance.net/m412c0"
            className="entypo-behance"
          >
            <FaAdn />
            <span>behance</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
