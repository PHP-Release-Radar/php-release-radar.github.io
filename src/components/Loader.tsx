import React from "react";
import "./Loader.scss";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Loader = () => (
  <div className="loader">
    <FontAwesomeIcon icon={faCircleNotch} spin={true} />
  </div>
);
