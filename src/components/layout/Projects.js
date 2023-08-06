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
import { BiLogoNetlify, BiLogoFirebase } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";

import Pokemundi from "../../assets/pokemundi.png";
import TravelBeyond from "../../assets/travelBeyond.png";
import Finans from "../../assets/finans.png";
import Spotify from "../../assets/spotify.png";
import Foodies from "../../assets/foodies.png";
import Play from "../../assets/playtv.png"
import TravelProject from "../view/TravelProject";
import PokemundiProject from "../view/PokemundiProject";
import FoodiesProject from "../view/FoodiesProject";
import SpotifyProject from "../view/SpotifyProject";
import FinansProject from "../view/FinansProject";
import Bookworm from "../../assets/bookworm.png";
import BookwormProject from "../view/BookwormProject";
import PlayTv from "../view/PlayTvProject";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1>Projetos</h1>
      <h2>
        <span>Destaqu</span>es
      </h2>
      <div className={styles.box_container_projects}>
        <div className={styles.box}>
          <img src={Bookworm} alt="Imagem do Projeto de Livros" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiSass className={styles.icon_sass} />
              <SiReact className={styles.icon_react} />
              <SiJavascript className={styles.icon_javascript} />
              <BiLogoFirebase className={styles.icon_firebase}/>
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
              <BookwormProject />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Play} alt="Imagem do Projeto de Filmes" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiStyledcomponents className={styles.icon_styled} />
              <SiReact className={styles.icon_react} />
              <SiJavascript className={styles.icon_javascript} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
              <PlayTv />
            </div>
          </div>
        </div>
      </div>

      <h2>
        <span>Todos os proje</span>tos
      </h2>
      <div className={styles.box_container_projects}>
        <div className={styles.box}>
          <img src={Pokemundi} alt="Imagem do Projeto de Pokemons" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiSass className={styles.icon_sass} />
              <SiNextdotjs className={styles.icon_next} />
              <SiJavascript className={styles.icon_javascript} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
              <PokemundiProject />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={TravelBeyond} alt="Imagem do Projeto de Viagens" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiSass className={styles.icon_sass} />
              <SiReact className={styles.icon_react} />
              <SiJavascript className={styles.icon_javascript} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
              <TravelProject />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={Foodies} alt="Imagem do Projeto de Restaurante" />
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
          <img src={Spotify} alt="Imagem do Projeto Spotify" />
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
          <img src={Finans} alt="Imagem do Projeto de Finanças Pessoais" />
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
