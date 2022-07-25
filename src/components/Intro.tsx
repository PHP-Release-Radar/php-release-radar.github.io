import React from "react";
import { LinkProps } from "../App";
import denischris from "../img/denis-chris.jpg";
import "./Intro.scss";

export const Intro = ({ links }: LinkProps) => (
  <div className="intro">
    <img src={denischris} alt="Denis Brumann and Christopher Hertel" />
    <p>
      The YouTube project <span>PHP Release Radar</span> was initiated by
      <a href={links.brumann}>Denis Brumann</a>and
      <a href={links.hertel}>Christopher Hertel</a>
      in COVID-19 times where in-person events were not a thing.
    </p>
    <p>
      The goal of this interview series is to shed some light on Open Source PHP
      projects and the creators/maintainers behind it.
    </p>
    <p>
      We believe that Open Source is more than just a `composer require` and
      getting software "for free". Open Source is hard work, interaction,
      innovation and people.
    </p>
    <p>
      If you have something to share or just want to propose a release or
      project for a session, just hit us up.
    </p>
    <a className="contact" href="mailto:phpreleaseradar@gmail.com">
      Propose a session
    </a>
  </div>
);
