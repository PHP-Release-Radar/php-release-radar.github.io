import React from "react";
import "./Headline.scss";

type HeadlineProps = {
  text: string;
};

export const Headline = ({ text }: HeadlineProps) => <h2>{text}</h2>;
