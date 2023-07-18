import React from "react";
import styles from "../../styles/layout/Projects.module.scss";

import {
  SiNextdotjs,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
} from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { BiLogoNetlify } from "react-icons/bi";

import Pokemundi from "../../assets/pokemundi.png";
import TravelBeyond from "../../assets/travelBeyond.png";
import Finans from "../../assets/finans.png";
import Spotify from "../../assets/spotify.png";
import Foodies from "../../assets/foodies.png";
import TravelProject from "../view/TravelProject";
import PokemundiProject from "../view/PokemundiProject";
import FoodiesProject from "../view/FoodiesProject";
import SpotifyProject from "../view/SpotifyProject";
import FinansProject from "../view/FinansProject";

function Projects() {
  return (
    <section className={styles.container}>
      <h1>Projetos</h1>
      <h2>
        <span>Destaqu</span>es
      </h2>
      <div className={styles.box_container_projects}>
        <div className={styles.box}>
          <img className={styles.img} alt="" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}></div>
            <div className={styles.input_box}></div>
          </div>
        </div>
        <div className={styles.box}>
          <img className={styles.img} alt="" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}></div>
            <div className={styles.input_box}></div>
          </div>
        </div>
        <div className={styles.box}>
          <img className={styles.img} alt="" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}></div>
            <div className={styles.input_box}></div>
          </div>
        </div>
      </div>
      <h2>
        <span>Todos os proje</span>tos
      </h2>
      <div className={styles.box_container_projects}>
        <div className={styles.box}>
          <img className={styles.img} alt="" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}></div>
            <div className={styles.input_box}></div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Pokemundi} alt="" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiNextdotjs className={styles.icon_next} />
              <SiSass className={styles.icon_sass} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
              <PokemundiProject />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={TravelBeyond} alt="Imagem do projeto de viagens" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiReact className={styles.icon_react} />
              <SiSass className={styles.icon_sass} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
              <TravelProject />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Foodies} alt="Imagem do projeto de restaurante" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiHtml5 className={styles.icon_html} />
              <SiCss3 className={styles.icon_css} />
              <BsFillBootstrapFill className={styles.icon_bootstrap} />
              <SiJavascript className={styles.icon_javascript} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
              <FoodiesProject />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Spotify} alt="Imagem do projeto spotify" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiHtml5 className={styles.icon_html} />
              <SiCss3 className={styles.icon_css} />
              <BsFillBootstrapFill className={styles.icon_bootstrap} />
              <BiLogoNetlify className={styles.icon_netlify} />
            </div>
            <div className={styles.input_box}>
              <SpotifyProject />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Finans} alt="Imagem do projeto de finanças pessoais" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiHtml5 className={styles.icon_html} />
              <SiCss3 className={styles.icon_css} />
              <BsFillBootstrapFill className={styles.icon_bootstrap} />
              <BiLogoNetlify className={styles.icon_netlify} />
            </div>
            <div className={styles.input_box}>
              <FinansProject />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
