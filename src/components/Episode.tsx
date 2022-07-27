import React from "react";
import "./Episode.scss";

export type EpisodeData = {
  [key: string]: any;
};

type EpisodeProps = {
  data: EpisodeData;
};

export const Episode = ({ data }: EpisodeProps) => (
  <div className="episode">
    <h3>
      Episode {data.Episode} - {data.Topic}
    </h3>
  </div>
);
