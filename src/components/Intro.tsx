import React from "react";
import { LinkProps } from "../App";
import denischris from "../img/denis-chris.jpg";
import "./Intro.scss";

export const Intro = ({ links }: LinkProps) => (
  <div className="intro">
    <img src={denischris} alt="Denis Brumann and Christopher Hertel" />
    <p>
      The YouTube project <span>PHP Release Radar</span> was initiated by
      <a href={links.brumann} target="_blank" rel="noreferrer">
        Denis Brumann
      </a>
      and
      <a href={links.hertel} target="_blank" rel="noreferrer">
        Christopher Hertel
      </a>
      in COVID-19 times where in-person events like conferences or meetups were
      not a thing.
    </p>
    <p>
      The goal of this interview series is to shed some light on Open Source PHP
      projects and their creators &amp; maintainers.
    </p>
    <p>
      We believe that Open Source is more than just a `composer require` and
      getting software "for free". Open Source is hard work, interaction,
      innovation, people and much more.
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
