import React from "react";
import { Header } from "./components/Header";
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
      <Footer links={links} />
    </div>
  );
}

export default App;
