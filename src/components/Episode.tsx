import React from "react";
import {
  faAngleDown,
  faUser,
  faClock,
  faCalendar,
  faExternalLinkSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Episode.scss";
import moment from "moment";

export type EpisodeData = {
  [key: string]: any;
};

type EpisodeProps = {
  data: EpisodeData;
};

type EpisodeState = {
  collapsed: boolean;
};

class Episode extends React.Component<EpisodeProps, EpisodeState> {
  state = {
    collapsed: true,
  };

  constructor(props: EpisodeProps) {
    super(props);
    this.toggleBody = this.toggleBody.bind(this);
  }

  toggleBody() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const data = this.props.data;

    const title = "Episode " + data["Episode"] + " - " + data["Topic"];
    const videoStreamUrl =
      "https://www.youtube.com/watch?v=" + data["YouTube Stream"];
    const videoEmbedUrl =
      "https://www.youtube.com/embed/" + data["YouTube Stream"];
    const calendarUrl =
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=" +
      data["Calendar"] +
      "&tmsrc=phpreleaseradar%40gmail.com";

    return (
      <div className={`episode ${this.state.collapsed ? "collapsed" : ""}`}>
        <div className="head" onClick={this.toggleBody}>
          <FontAwesomeIcon icon={faAngleDown} />
          <h3>
            {title}
            <span className="guest">with {data["Guest(s)"]}</span>
          </h3>
        </div>
        <div className="body">
          <div className="info">
            <div>
              <p>
                <FontAwesomeIcon icon={faUser} /> {data["Guest(s)"]}
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} />
                {moment(data["Date"], "D.M.Y H:m:s").format(
                  "MMMM Do Y - HH:mm"
                )}{" "}
                CET
              </p>
            </div>
            <div className="links">
              <a href={data["Project URL"]} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                More about this project
              </a>
              <a href={videoStreamUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
                Jump to YouTube stream
              </a>
              <a href={calendarUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faCalendar} />
                Add this to your calendar
              </a>
            </div>
          </div>
          <div className="player">
            <iframe
              src={videoEmbedUrl}
              title={title}
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Episode;
