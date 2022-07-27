import React from "react";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Footer } from "./components/Footer";
import useGoogleSheets from "use-google-sheets";
import { HookOptions } from "use-google-sheets/dist/types";
import EpisodeList, { EpisodeFilter } from "./components/EpisodeList";

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

const apiOptions: HookOptions = {
  apiKey: "AIzaSyA3KAEDDKkV8CSuaYxp1Q7EPq6nbamoGOs",
  sheetId: "1EoUQakFsdyNbQt4FcrKzxCxLqhR3JzyZSOvDAYAdynU",
  sheetsOptions: [{ id: "Episodes" }],
};

function App() {
  const apiCall = useGoogleSheets(apiOptions);

  return (
    <div className="App">
      <Header />
      <Intro links={links} />
      <EpisodeList
        title="Upcoming Episodes"
        episodes={apiCall}
        filter={EpisodeFilter.Upcoming}
      />
      <EpisodeList
        title="Past Episodes"
        episodes={apiCall}
        filter={EpisodeFilter.Past}
      />
      <Footer links={links} />
    </div>
  );
}

export default App;
