import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../../styles/layout/Skills.module.scss";

function Skills() {
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
    <div>
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible) => handleVisibilityChange(isVisible, 0)}
      >
        <div id="element-0" className={`${styles.reveal} ${styles.fromLeft}`}>
          Elemento 1
        </div>
      </VisibilitySensor>
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible) => handleVisibilityChange(isVisible, 1)}
      >
        <div id="element-1" className={`${styles.reveal} ${styles.fromLeft}`}>
          Elemento 2
        </div>
      </VisibilitySensor>
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible) => handleVisibilityChange(isVisible, 2)}
      >
        <div id="element-2" className={`${styles.reveal} ${styles.fromLeft}`}>
          Elemento 3
        </div>
      </VisibilitySensor>
    </div>
  );
}

export default Skills;
