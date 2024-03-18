import { ICON } from "../../presentation/assets/icons/icon";
import { IMAGES } from "../../presentation/assets/images/images";

import styles from '../../presentation/components/layout/projects.module.scss'; 

export const projects = [
  {
    name: "Matte",
    image: IMAGES.matte,
    icons: [
      <ICON.SiReact className={styles.icon_react}/>,
      <ICON.SiJavascript className={styles.icon_javascript}/>,
      <ICON.SiSass className={styles.icon_sass}/>,
      <ICON.SiFigma className={styles.icon_figma} />
    ],
    link: "/projeto/matte",
  },
  {
    name: "Pesqueiro",
    image: IMAGES.pesqueiro,
    icons: [
      <ICON.SiReact className={styles.icon_react}/>,
      <ICON.SiJavascript className={styles.icon_javascript}/>,
      <ICON.SiSass className={styles.icon_sass}/>,
    ],
    link: "/projeto/pesqueiro",
  },
   {
    name: "Bookworm",
    image: IMAGES.bookworm,
    icons: [
      <ICON.SiReact className={styles.icon_react} />,
      <ICON.SiJavascript className={styles.icon_javascript}/>,
      <ICON.BiLogoFirebase className={styles.icon_firebase}/>,
      <ICON.SiSass className={styles.icon_sass}/>,
      <ICON.SiVercel className={styles.icon_vercel}/>,
    ],
    link: "/projeto/bookworm",
  },
];


export const highlights = [
  {
    name: "AutoLuxury",
    image: IMAGES.luxury,
    icons: [
      <ICON.SiReact className={styles.icon_react}/>,
      <ICON.BiLogoTypescript className={styles.icon_typescript}/>,
      <ICON.BiLogoNodejs className={styles.icon_node}/>,
      <ICON.SiExpress className={styles.icon_express}/>,
      <ICON.BsStripe className={styles.icon_stripe}/>,
      <ICON.SiVercel className={styles.icon_vercel}/>,
    ],
    link: "/projeto/auto-luxury",
  },
  {
    name: "Play",
    image: IMAGES.tv,
    icons: [
      <ICON.SiReact className={styles.icon_react}/>,
      <ICON.SiJavascript className={styles.icon_javascript}/>,
      <ICON.SiStyledcomponents className={styles.icon_styled}/>,
      <ICON.SiVercel className={styles.icon_vercel}/>,
    ],
    link: "/projeto/play-tv",
  },
  {
    name: "Pokemundi",
    image: IMAGES.pokemundi,
    icons: [
      <ICON.SiReact className={styles.icon_react}/>,
      <ICON.SiNextdotjs className={styles.icon_next}/>,
      <ICON.SiJavascript className={styles.icon_javascript}/>,
      <ICON.SiSass className={styles.icon_sass}/>,
      <ICON.SiVercel className={styles.icon_vercel}/>,
    ],
    link: "/projeto/pokemundi",
  },
  {
    name: "TravelBeyond",
    image: IMAGES.travel,
    icons: [
      <ICON.SiReact className={styles.icon_react}/>,
      <ICON.SiJavascript className={styles.icon_javascript}/>,
      <ICON.SiSass className={styles.icon_sass}/>,
      <ICON.SiVercel className={styles.icon_vercel}/>,
    ],
    link: "/projeto/travel-beyond",
  },
  {
    name: "Foodies",
    image: IMAGES.foodies,
    icons: [
      <ICON.SiHtml5 className={styles.icon_html}/>,
      <ICON.SiCss3 className={styles.icon_css}/>,
      <ICON.BsFillBootstrapFill className={styles.icon_bootstrap}/>,
      <ICON.SiJavascript className={styles.icon_javascript}/>,
      <ICON.SiVercel className={styles.icon_vercel}/>,
    ],
    link: "/projeto/foodies",
  },
  {
    name: "Spotify",
    image: IMAGES.spotify,
    icons: [
      <ICON.SiHtml5 className={styles.icon_html}/>,
      <ICON.SiCss3 className={styles.icon_css}/>,
      <ICON.BsFillBootstrapFill className={styles.icon_bootstrap}/>,
      <ICON.BiLogoNetlify className={styles.icon_netlify}/>,
    ],
    link: "/projeto/spotify",
  },
  {
    name: "Finans",
    image: IMAGES.finans,
    icons: [
      <ICON.SiHtml5 className={styles.icon_html}/>,
      <ICON.SiCss3 className={styles.icon_css}/>,
      <ICON.BsFillBootstrapFill className={styles.icon_bootstrap}/>,
      <ICON.BiLogoNetlify className={styles.icon_netlify}/>,
    ],
    link: "/projeto/finans",
  },
];
