import React from "react";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Footer } from "./components/Footer";

export type Links = {
  brumann: string;
  hertel: string;
};

export type LinkProps = {
  links: Links;
};

const links: Links = {
  brumann: "https://twitter.com/dbrumann",
  hertel: "https://twitter.com/el_stoffel",
};

function App() {
  return (
    <div className="App">
      <Header />
      <Intro links={links} />
      <Footer links={links} />
    </div>
  );
}

export default App;
