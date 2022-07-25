import React from "react";
import "./Loader.scss";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LoaderProps = {
  active: boolean;
};

export const Loader = ({ active }: LoaderProps) => (
  <div className={`loader ${active ? "active" : "inactive"}`}>
    <FontAwesomeIcon icon={faCircleNotch} spin={true} />
  </div>
);
