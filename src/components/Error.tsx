import React from "react";
import "./Error.scss";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorResponse } from "use-google-sheets/dist/types";

type ErrorProps = {
  active: null | ErrorResponse;
};

export const Error = ({ active }: ErrorProps) => (
  <div className={`error ${active ? "active" : "inactive"}`}>
    <FontAwesomeIcon icon={faWarning} /> An error occurred while loading the
    data.
  </div>
);
