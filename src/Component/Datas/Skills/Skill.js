import React from "react";
import html from "../../../asset/icons8-html-50.png";
import react from "../../../asset/icons8-react-40.png";
import css from "../../../asset/icons8-css-50.png";
import js from "../../../asset/icons8-js-50.png";
import sharepoint from "../../../asset/icons8-sharepoint-50.png";
import redux from "../../../asset/icons8-redux-an-open-source-javascript-library-for-managing-application-state-50.png";
import bootstrap from "../../../asset/icons8-bootstrap-50.png";
import tailwind from "../../../asset/icons8-tailwind-css-50.png";
import git from "../../../asset/icons8-git-50.png";
import python from "../../../asset/icons8-python-50.png";
import typescript from "../../../asset/icons8-typescript-50.png";
function Skill() {
  const skillArray = [
    {
      id: 1,
      name: "React",
      img: react,
      alt: "React Icon",
    },
    {
      id: 2,
      name: "HTML",
      img: html,
      alt: "HTML Icon",
    },
    {
      id: 3,
      name: "CSS",
      img: css,
      alt: "CSS Icon",
    },
    {
      id: 4,
      name: "JavaScript",
      img: js,
      alt: "JavaScript Icon",
    },
    {
      id: 5,
      name: "SharePoint (SPFx)",
      img: sharepoint,
      alt: "SharePoint Icon",
    },
    {
      id: 6,
      name: "Redux",
      img: redux,
      alt: "Redux Icon",
    },
    {
      id: 7,
      name: "Bootstrap",
      img: bootstrap,
      alt: "Bootstrap Icon",
    },
    {
      id: 8,
      name: "Tailwind CSS",
      img: tailwind,
      alt: "Tailwind CSS Icon",
    },
    {
      id: 9,
      name: "Git",
      img: git,
      alt: "Git Icon",
    },
    {
      id: 10,
      name: "Python",
      img: python,
      alt: "Python Icon",
    },
    {
      id: 11,
      name: "TypeScript",
      img: typescript,
      alt: "TypeScript Icon",
    },
  ];
  return (
    <div
    className="border-2 rounded-md text-white font-semibold p-2 flex flex-wrap justify-evenly items-center overflow-auto"
    style={{ backgroundColor: "#454679" }}
  >
    {skillArray.map((item) => (
      <div key={item.id} className="flex flex-col items-center m-2">
        <div>
          <img src={item.img} width={50} alt={item.alt} />
        </div>
        <div className="text-center">{item.name}</div>
      </div>
    ))}
  </div>
  
  );
}

export default Skill;
