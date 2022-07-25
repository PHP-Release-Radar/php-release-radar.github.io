import React from "react";
import { Headline } from "./Headline";
import { ApiProps } from "../App";
import { Loader } from "./Loader";
import { Error } from "./Error";
import moment from "moment";
import { SessionData } from "./Session";
import SessionList from "./SessionList";

function PastSessions({ apiCall }: ApiProps) {
  var sessions: Array<SessionData> = [];
  if (apiCall.data.length > 0) {
    sessions = apiCall.data[0].data.filter(function (session: SessionData) {
      if ("Date" in session) {
        return moment(session.Date, "D.M.Y H:i:s").diff(moment()) <= 0;
      }

      return false;
    });
  }

  return (
    <div>
      <Headline text="Past Sessions" />
      <Loader active={apiCall.loading} />
      <Error active={apiCall.error} />
      <SessionList sessions={sessions.reverse()} />
    </div>
  );
}

export default PastSessions;
