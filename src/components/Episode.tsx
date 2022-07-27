import React from "react";
import {
  faAngleDown,
  faUser,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
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

  constructor({ data }: EpisodeProps) {
    super({ data });
    this.toggleBody = this.toggleBody.bind(this);
  }

  toggleBody() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const data = this.props.data;

    const title = "Episode " + data["Episode"] + " - " + data["Topic"];
    const titleGuest = title + " with " + data["Guest(s)"];
    const imageUrl =
      "https://img.youtube.com/vi/" + data["YouTube Stream"] + "/mqdefault.jpg";
    const videoUrl = "https://www.youtube.com/embed/" + data["YouTube Stream"];

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
              <img src={imageUrl} alt={titleGuest} />
            </div>
            <div>
              <h4>{title}</h4>
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
              <p className="description">
                Lorem ipsum set dolor Lorem ipsum set dolor Lorem ipsum set
                dolor Lorem ipsum set dolor Lorem ipsum set dolor Lorem ipsum
                set dolor Lorem ipsum set dolor.
              </p>
            </div>
            <div></div>
          </div>
          <div className="player">
            <iframe
              src={videoUrl}
              title={titleGuest}
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
