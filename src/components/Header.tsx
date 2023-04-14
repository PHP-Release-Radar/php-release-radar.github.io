import React from "react";
import ChannelLink from "./ChannelLink";
import logo from "../img/logo.png";
import { faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const youtubeLink = "https://youtube.com/c/PHPReleaseRadar";
const twitterLink = "https://twitter.com/PhpReleaseRadar";
const calendarLink =
  "https://calendar.google.com/calendar/u/0/embed?src=phpreleaseradar@gmail.com&ctz=Europe/Berlin&pli=1";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo of PHP Release Radar" />
      <h1>PHP Release Radar</h1>
      <span>Featuring awesome releases of the PHP OSS ecosphere</span>
      <div className="channels">
        <ChannelLink
          className="youtube"
          link={youtubeLink}
          title="YouTube Channel"
          icon={faYoutube}
        />
        <ChannelLink
          className="twitter"
          link={twitterLink}
          title="Twitter Account"
          icon={faTwitter}
        />
        <ChannelLink
          className="calendar"
          link={calendarLink}
          title="Google Calendar"
          icon={faCalendar}
        />
      </div>
    </header>
  );
}
