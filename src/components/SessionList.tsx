import React from "react";
import "./SessionList.scss";
import { Session } from "./Session";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SessionListProps = {
  sessions: Array<object> | null;
};

function SessionList({ sessions }: SessionListProps) {
  if (sessions === null) {
    return <div className="sessionList"></div>;
  }

  if (sessions.length === 0) {
    return (
      <div className="sessionList empty">
        <FontAwesomeIcon icon={faHourglass} /> No sessions found, sorry!
      </div>
    );
  }

  return (
    <div>
      {sessions.map((session) => (
        <Session data={session} />
      ))}
    </div>
  );
}

export default SessionList;
