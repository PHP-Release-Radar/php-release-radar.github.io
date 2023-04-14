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

export default function ChannelLink({
  className,
  link,
  title,
  icon,
}: ChannelLinkProps) {
  return (
    <a
      className={`channelLink ${className}`}
      href={link}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
