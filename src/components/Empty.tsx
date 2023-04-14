import React from "react";
import "./Empty.scss";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Empty() {
  return (
    <div className="empty">
      <FontAwesomeIcon icon={faHourglass} /> No episodes found, sorry!
    </div>
  );
}
