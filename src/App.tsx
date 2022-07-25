import React from "react";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import UpcomingSessions from "./components/UpcomingSessions";
import PastSessions from "./components/PastSessions";
import { Footer } from "./components/Footer";
import useGoogleSheets from "use-google-sheets";
import { HookOptions, HookState } from "use-google-sheets/dist/types";

export type Links = {
  brumann: string;
  hertel: string;
};

export type LinkProps = {
  links: Links;
};

export type ApiProps = {
  apiCall: HookState;
};

export const links: Links = {
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
      <UpcomingSessions apiCall={apiCall} />
      <PastSessions apiCall={apiCall} />
      <Footer links={links} />
    </div>
  );
}

export default App;
