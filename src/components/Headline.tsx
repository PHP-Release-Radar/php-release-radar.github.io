import React from "react";
import "./Headline.scss";

type HeadlineProps = {
  text: string;
};

export default function Headline({ text }: HeadlineProps) {
  return <h2>{text}</h2>;
}
