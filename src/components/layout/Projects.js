import React from "react";

import styles from "../../styles/layout/Projects.module.scss";

import { FaReact, FaSass } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoBootstrap,
  BiLogoNetlify,
  BiLogoHtml5,
  BiLogoCss3,
} from "react-icons/bi";
import { SiNextdotjs, SiVercel } from "react-icons/si";

import Pokemundi from "../../assets/pokemundi.png";
import TravelBeyond from "../../assets/travelBeyond.png";
import Finans from "../../assets/finans.png";
import Spotify from "../../assets/spotify.png";
import Foodies from "../../assets/foodies.png";
import Travel from "../view/Travel";

function Projects() {
  return (
    <section className={styles.container}>
      <h1>Projetos</h1>
      <h2>
        <span>Destaqu</span>es
      </h2>
      <div className={styles.box_container_projects}>
        <div className={styles.box}>
          <img src={Pokemundi} alt="" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}></div>

            <div className={styles.input_box}>
              <Travel />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Pokemundi} alt="" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}></div>

            <div className={styles.input_box}>
              <Travel />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img className={styles.img} src={TravelBeyond} alt="imagem do projeto de viagens" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}></div>

            <div className={styles.input_box}>
              <Travel />
            </div>
          </div>
        </div>
      </div>
      <h2>
        <span>Todos os proje</span>tos
      </h2>
      <div className={styles.box_container_projects}>
        <div className={styles.box}>
          <img src={Pokemundi} alt="" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}></div>
            <div className={styles.input_box}>
              <input type="submit" value="Ver mais" />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Pokemundi} alt="" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiNextdotjs className={styles.icon_next} />
              <FaSass className={styles.icon_sass} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
              <Travel />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={TravelBeyond} alt="Imagem do projeto de viagens" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <FaReact className={styles.icon_react} />
              <FaSass className={styles.icon_sass} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
              <Travel />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Foodies} alt="Imagem do projeto de restaurante" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <BiLogoHtml5 className={styles.icon_html} />
              <BiLogoCss3 className={styles.icon_css} />
              <BiLogoBootstrap className={styles.icon_bootstrap} />
              <BiLogoJavascript className={styles.icon_javascript} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
              <input type="submit" value="Ver mais" />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Spotify} alt="Imagem do projeto spotify" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <BiLogoHtml5 className={styles.icon_html} />
              <BiLogoCss3 className={styles.icon_css} />
              <BiLogoBootstrap className={styles.icon_bootstrap} />
              <BiLogoNetlify className={styles.icon_netlify} />
            </div>
            <div className={styles.input_box}>
              <input type="submit" value="Ver mais" />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Finans} alt="Imagem do projeto de finanças pessoais" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <BiLogoCss3 className={styles.icon_html} />
              <BiLogoCss3 className={styles.icon_css} />
              <BiLogoBootstrap className={styles.icon_bootstrap} />
              <BiLogoNetlify className={styles.icon_netlify} />
            </div>
            <div className={styles.input_box}>
              <input type="submit" value="Ver mais" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
