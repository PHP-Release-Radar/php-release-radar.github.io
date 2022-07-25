import React from "react";
import "./Session.scss";

export type SessionData = {
  [key: string]: any;
};

type SessionProps = {
  data: SessionData;
};

export const Session = ({ data }: SessionProps) => (
  <div className="session">
    <h3>
      Episode {data.Episode} - {data.Topic}
    </h3>
  </div>
);
