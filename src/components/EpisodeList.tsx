import React from "react";
import Episode, { EpisodeData } from "./Episode";
import { Headline } from "./Headline";
import { HookState } from "use-google-sheets/dist/types";
import { Loader } from "./Loader";
import { Error } from "./Error";
import moment from "moment";
import { Empty } from "./Empty";

export enum EpisodeFilter {
  Past,
  Upcoming,
}

type EpisodeListProps = {
  title: string;
  episodes: HookState;
  filter: EpisodeFilter;
};

class EpisodeList extends React.Component<EpisodeListProps> {
  filteredEpisodes(): Array<EpisodeData> {
    if (this.props.episodes.loading || this.props.episodes.error) {
      return [];
    }

    let self = this;
    let episodes = this.props.episodes.data[0].data.filter(function (
      episode: EpisodeData
    ) {
      if (!("Date" in episode) || episode["Published"] === "FALSE") {
        return false;
      }

      if (self.props.filter === EpisodeFilter.Upcoming) {
        return moment(episode.Date, "D.M.Y H:i:s").diff(moment()) > 0;
      }

      return moment(episode.Date, "D.M.Y H:i:s").diff(moment()) <= 0;
    });

    if (this.props.filter === EpisodeFilter.Past) {
      return episodes.reverse();
    }

    return episodes;
  }

  render() {
    const episodes = this.filteredEpisodes();

    let content;
    if (this.props.episodes.loading) {
      content = <Loader />;
    } else if (this.props.episodes.error) {
      content = <Error />;
    } else if (episodes.length === 0) {
      content = <Empty />;
    } else {
      content = episodes.map((episode) => (
        <Episode key={episode["Episode"]} data={episode} />
      ));
    }

    return (
      <div className="episodeList">
        <Headline text={this.props.title} />
        {content}
      </div>
    );
  }
}

export default EpisodeList;
