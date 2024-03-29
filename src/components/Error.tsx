import React from "react";
import "./Error.scss";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Error() {
  return (
    <div className="error">
      <FontAwesomeIcon icon={faWarning} /> An error occurred while loading the
      data.
    </div>
  );
}
