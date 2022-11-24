import React from "react";

import { AiFillHtml5, AiOutlineGitlab } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiReact,
  SiFirebase,
  SiNetlify,
  SiVisualstudio,
} from "react-icons/si";
import { BsBootstrapFill, BsGithub } from "react-icons/bs";
import { FaNodeJs, FaSass, FaLinux } from "react-icons/fa";

const skills = [
  <AiFillHtml5 />,
  <DiCss3 />,
  <FaSass />,
  <SiJavascript />,
  <SiReact />,
  <SiFirebase />,
  <BsBootstrapFill />,
  <FaNodeJs />,
  <BsGithub />,
  <AiOutlineGitlab />,
  <SiNetlify />,
  <FaLinux />,
  <SiVisualstudio />,
];

const About = () => {
  return (
    <div className="about">
      Hello, I'm Nika 20 years old from Georgia. Currently I'm Junior front-end
      developer with a desire to learn and grow in a collaborative team
      environment. Mainly skilled in HTML, CSS and JavaScript. Also I took
      Advanced JS and ReactJS course at OL Academy and created several awesome
      projects.
      <div className="about__certifications">
        Certifications: ReactJS Certification
      </div>
      <div className="about__skills">
        {skills.map((skill, idx) => (
          <span key={idx}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default About;
