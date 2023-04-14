import React from "react";
import Episode, { EpisodeData } from "./Episode";
import Headline from "./Headline";
import { HookState } from "use-google-sheets/dist/types";
import Loader from "./Loader";
import Error from "./Error";
import moment from "moment";
import Empty from "./Empty";

export enum EpisodeFilter {
  Past,
  Upcoming,
}

type EpisodeListProps = {
  title: string;
  episodes: HookState;
  filter: EpisodeFilter;
};

export default function EpisodeList({
  title,
  episodes,
  filter,
}: EpisodeListProps) {
  function filteredEpisodes(): Array<EpisodeData> {
    if (episodes.loading || episodes.error) {
      return [];
    }

    let tmpEpisodes = episodes.data[0].data.filter(function (
      episode: EpisodeData
    ) {
      if (!("Date" in episode) || episode["Published"] === "FALSE") {
        return false;
      }

      if (filter === EpisodeFilter.Upcoming) {
        return moment(episode.Date, "D.M.Y H:i:s").diff(moment()) > 0;
      }

      return moment(episode.Date, "D.M.Y H:i:s").diff(moment()) <= 0;
    });

    if (filter === EpisodeFilter.Past) {
      return tmpEpisodes.reverse();
    }

    return tmpEpisodes;
  }

  const filtered = filteredEpisodes();

  let content;
  if (episodes.loading) {
    content = <Loader />;
  } else if (episodes.error) {
    content = <Error />;
  } else if (filtered.length === 0) {
    content = <Empty />;
  } else {
    content = filtered.map((episode) => (
      <Episode key={episode["Episode"]} data={episode} />
    ));
  }

  return (
    <div className="episodeList">
      <Headline text={title} />
      {content}
    </div>
  );
}
