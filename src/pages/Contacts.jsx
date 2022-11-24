import React from "react";

import {
  BsGithub,
  BsLinkedin,
  BsTelegram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const links = [
  { name: "Github", href: "https://github.com/nikolozb", icon: <BsGithub /> },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nikoloz-beroshvili-903a6a247/",
    icon: <BsLinkedin />,
  },
  { name: "Telegram", href: "https://t.me/berose995", icon: <BsTelegram /> },
];

const Contacts = () => {
  return (
    <div className="contacts">
      <span className="contacts__text" style={{ marginBottom: "32px" }}>
        Here are my Contacts:
      </span>
      {links.map(({ href, icon, name }, index) => {
        return (
          <a
            key={index}
            target="_blank"
            className="contacts__link"
            href={href}
            rel="noreferrer"
          >
            {icon}
            {name}
          </a>
        );
      })}

      <div className="contacts__block">
        <span className="contacts__text">
          <MdEmail /> Email: berose995@gmail.com
        </span>
        <span className="contacts__text">
          <BsFillTelephoneFill /> Phone number: +995579206938
        </span>
      </div>
    </div>
  );
};

export default Contacts;
