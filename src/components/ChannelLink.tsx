import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import "./ChannelLink.scss";

type ChannelLinkProps = {
  className: string;
  link: string;
  title: string;
  icon: IconDefinition;
};

export const ChannelLink = ({
  className,
  link,
  title,
  icon,
}: ChannelLinkProps) => (
  <a className={`channelLink ${className}`} href={link} title={title}>
    <FontAwesomeIcon icon={icon} />
  </a>
);
