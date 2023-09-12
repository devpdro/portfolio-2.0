import Header from "./presentation/components/layout/header";
import Navbar from "./presentation/components/layout/navbar";
import ScrollReveal from "./utils/scroll-reveal";

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
