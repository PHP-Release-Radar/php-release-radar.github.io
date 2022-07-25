import React from "react";
import "./Footer.scss";
import { LinkProps } from "../App";

export const Footer = ({ links }: LinkProps) => (
  <footer>
    PHP Release Radar by <a href={links.brumann}>@dbrumann</a> and{" "}
    <a href={links.hertel}>@el_stoffel</a>.
  </footer>
);
