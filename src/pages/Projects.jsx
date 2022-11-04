import React from "react";
import Card from "../components/Card";

const cards = [
  {
    image: "https://iili.io/mVJlDl.png",
    title: "Popup",
    description: "User is able to hide modal by clicking outside.",
    link: "https://github.com/nikolozb/react-popup",
  },
  {
    image:
      "https://i.postimg.cc/WtmzHxSF/Screenshot-from-2022-11-04-22-21-03.png",
    title: "Context menu",
    description:
      "Context menu written for browser, it is a custom hook, thus could be used inside of any container.",
    link: "https://github.com/nikolozb/react-context-menu",
  },
  {
    image:
      "https://i.postimg.cc/tYXJQDmr/Screenshot-from-2022-11-04-22-22-02.png",
    title: "Todo app written using Functional components",
    description:
      "Todo app, it has add, edit, update, delete buttons and many other features.",
    link: "https://github.com/nikolozb/react-todo-using-functional-components",
  },
  {
    image:
      "https://i.postimg.cc/tYXJQDmr/Screenshot-from-2022-11-04-22-22-02.pngs",
    title: "Todo app written using Class components",
    description:
      "Todo app, it has add, edit, update, delete buttons and many other features.",
    link: "https://github.com/nikolozb/todo-app",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      {cards.map(({ image, title, description, link }, index) => {
        return (
          <Card
            key={index}
            image={image}
            title={title}
            description={description}
            link={link}
          />
        );
      })}
    </div>
  );
};

export default Projects;
