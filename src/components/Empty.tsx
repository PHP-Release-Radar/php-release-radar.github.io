import React from "react";
import "./Empty.scss";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Empty = () => (
  <div className="empty">
    <FontAwesomeIcon icon={faHourglass} /> No sessions found, sorry!
  </div>
);
