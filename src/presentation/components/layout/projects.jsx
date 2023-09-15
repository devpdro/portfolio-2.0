import React from "react";

import { Link } from "react-router-dom";

import styles from "./projects.module.scss";
import {
  SiNextdotjs,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
} from "react-icons/si";
import { BsFillBootstrapFill, BsStripe } from "react-icons/bs";
import { BiLogoNetlify, BiLogoFirebase, BiLogoTypescript, BiLogoNodejs } from "react-icons/bi";
import { SiStyledcomponents, SiExpress } from "react-icons/si";

import Pokemundi from "../../assets/img/pokemundi.png";
import TravelBeyond from "../../assets/img/travelBeyond.png";
import Finans from "../../assets/img/finans.png";
import Spotify from "../../assets/img/spotify.png";
import Foodies from "../../assets/img/foodies.png";
import Play from "../../assets/img/playtv.png"
import Bookworm from "../../assets/img/bookworm.png";
import AutoLuxury from "../../assets/img/autoluxury.png";

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
              <SiReact className={styles.icon_react} />
              <SiJavascript className={styles.icon_javascript} />
              <BiLogoFirebase className={styles.icon_firebase}/>
              <SiSass className={styles.icon_sass} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
            <Link to="/bookworm"> <input type="submit" value="Ver mais" className={styles.input_box} /></Link>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={AutoLuxury} alt="Imagem do Projeto de Carros" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiReact className={styles.icon_react} />
              <BiLogoTypescript className={styles.icon_typescript} />
              <BiLogoNodejs className={styles.icon_node}/>
              <SiExpress className={styles.icon_express} />
              <BsStripe className={styles.icon_stripe} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
            <Link to="/auto-luxury"> <input type="submit" value="Ver mais" className={styles.input_box} /></Link>
            </div>
          </div>
        </div>
      </div>
       <h2>
          <span>Todos os proje</span>tos
       </h2>
      <div className={styles.box_container_projects}>
      <div className={styles.box}>
          <img src={Play} alt="Imagem do Projeto de Filmes" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiReact className={styles.icon_react} />
              <SiJavascript className={styles.icon_javascript} />
              <SiStyledcomponents className={styles.icon_styled} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
            <Link to="/play-tv"> <input type="submit" value="Ver mais" className={styles.input_box} /></Link>
            </div>
          </div>
          </div>
        <div className={styles.box}>
          <img src={Pokemundi} alt="Imagem do Projeto de Pokemons" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiReact className={styles.icon_react} />
              <SiNextdotjs className={styles.icon_next} />
              <SiJavascript className={styles.icon_javascript} />
              <SiSass className={styles.icon_sass} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
            <Link to="/pokemundi"> <input type="submit" value="Ver mais" className={styles.input_box} /></Link>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={TravelBeyond} alt="Imagem do Projeto de Viagens" />
          <div className={styles.icons_box_container}>
            <div className={styles.box_icons}>
              <SiReact className={styles.icon_react} />
              <SiJavascript className={styles.icon_javascript} />
              <SiSass className={styles.icon_sass} />
              <SiVercel className={styles.icon_vercel} />
            </div>
            <div className={styles.input_box}>
            <Link to="/travel-beyond"> <input type="submit" value="Ver mais" className={styles.input_box} /></Link>
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
            <Link to="/foodies"> <input type="submit" value="Ver mais" className={styles.input_box} /></Link>
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
            <Link to="/spotify"> <input type="submit" value="Ver mais" className={styles.input_box} /></Link>
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
            <Link to="/finans"> <input type="submit" value="Ver mais" className={styles.input_box} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
