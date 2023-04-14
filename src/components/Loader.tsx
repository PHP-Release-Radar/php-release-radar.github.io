import React from "react";
import "./Loader.scss";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loader() {
  return (
    <div className="loader">
      <FontAwesomeIcon icon={faCircleNotch} spin={true} />
    </div>
  );
}
