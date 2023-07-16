import React from "react";

import styles from "../styles/ScrollReveal.module.scss";

import VisibilitySensor from "react-visibility-sensor";

import Skills from "./layout/Skills";
import Projects from "./layout/Projects";

function ScrollReveal() {
  const handleVisibilityChange = (isVisible, index) => {
    const element = document.querySelector(`#element-${index}`);
    if (element) {
      if (isVisible) {
        element.classList.add(styles.active);
      } else {
        element.classList.remove(styles.active);
      }
    }
  };

  return (
    <section className={styles.container}>
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible) => handleVisibilityChange(isVisible, 0)}
      >
        <div id="element-0" className={` ${styles.fromLeft}`}>
          <Skills />
        </div>
      </VisibilitySensor>
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible) => handleVisibilityChange(isVisible, 1)}
      >
        <div
          id="element-1"
          className={`${styles.box_container_skills} ${styles.fromLeft}`}
        >
          <Projects />
        </div>
      </VisibilitySensor>
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible) => handleVisibilityChange(isVisible, 2)}
      >
        <div
          id="element-2"
          className={`${styles.box_container_skills} ${styles.fromLeft}`}
        ></div>
      </VisibilitySensor>
    </section>
  );
}

export default ScrollReveal;
