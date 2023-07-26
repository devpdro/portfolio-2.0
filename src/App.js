import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import ScrollReveal from "./components/ScrollReveal";

import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Victor | Portfólio</title>
      </Helmet>
      <Navbar />
      <Header />
      <ScrollReveal />
    </>
  );
}

export default App;
