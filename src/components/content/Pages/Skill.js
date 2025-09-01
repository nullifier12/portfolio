import { Fragment } from "react";
import style from "./css/page.module.css";
import js from "./img/jsnbg.png";
import html from "./img/html2.png";
import reactNative from "./img/native.png";
import sql from "./img/sql.png";
import jq from "./img/jq1.png";
import axios from "./img/axios.png";
import knex from "./img/kns2nbg.png";
import css from "./img/css2.png";
import reactjs from "./img/react.png";
import node from "./img/nd2.png";
import ejs from "./img/ejs-removebg-preview.png";
import ajax from "./img/ajax.png";
import bootstrap from "./img/bootstrap.png";

const Skill = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "React", icon: reactjs, description: "Modern UI library for building dynamic interfaces", level: "Advanced" },
        { name: "React Native", icon: reactNative, description: "Cross-platform mobile development", level: "Advanced" },
        { name: "Next.js", icon: reactjs, description: "Full-stack React framework", level: "Advance" },
        { name: "HTML5", icon: html, description: "Semantic markup and structure", level: "Advanced" },
        { name: "CSS3", icon: css, description: "Modern styling and animations", level: "Advanced" },
        { name: "JavaScript", icon: js, description: "ES6+ and modern JS features", level: "Advanced" },
        { name: "Bootstrap", icon: bootstrap, description: "Responsive CSS framework", level: "Advance" },
        { name: "EJS", icon: ejs, description: "Template engine for Node.js", level: "Advance" }
      ]
    },
    {
      title: "Backend Development",
      description: "Server-side development and API creation",
      skills: [
        { name: "Node.js", icon: node, description: "JavaScript runtime environment", level: "Advanced" },
        { name: "Express.js", icon: node, description: "Web application framework", level: "Advanced" },
        { name: "C# (.NET)", icon: node, description: "Microsoft development framework", level: "Intermediate" },
        { name: "MySQL", icon: sql, description: "Relational database management", level: "Advanced" },
        { name: "MS SQL Server", icon: sql, description: "Microsoft database system", level: "Advanced" },
        { name: "PHP", icon: node, description: "Server-side scripting language", level: "Advanced" }
      ]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      skills: [
        { name: "React Native", icon: reactNative, description: "Native mobile apps with React", level: "Advanced" },
        { name: "Expo", icon: reactNative, description: "React Native development platform", level: "Advanced" },
        { name: "Mobile UI/UX", icon: reactNative, description: "Mobile-first design principles", level: "Advanced" },
        { name: "App Store Deployment", icon: reactNative, description: "iOS and Android publishing", level: "Advanced" }
      ]
    },
    {
      title: "Tools & Libraries",
      description: "Essential development tools and utilities",
      skills: [
        { name: "jQuery", icon: jq, description: "JavaScript library for DOM manipulation", level: "Advance" },
        { name: "Axios", icon: axios, description: "Promise-based HTTP client", level: "Advanced" },
        { name: "Ajax", icon: ajax, description: "Asynchronous data requests", level: "Advanced" },
        { name: "Knex.js", icon: knex, description: "SQL query builder", level: "Advance" },
        { name: "Redux", icon: reactjs, description: "State management for React", level: "Advance" },
        { name: "TypeScript", icon: js, description: "Type-safe JavaScript", level: "Advance" }
      ]
    },
    {
      title: "DevOps & Tools",
      description: "Development operations and workflow tools",
      skills: [
        { name: "Git & GitHub", icon: node, description: "Version control and collaboration", level: "Advanced" },
        { name: "Azure DevOps", icon: node, description: "CI/CD and project management", level: "Intermediate" },
        { name: "Postman", icon: axios, description: "API testing and documentation", level: "Advanced" },
        { name: "VS Code", icon: node, description: "Code editor and extensions", level: "Advanced" },
        { name: "Terminal", icon: node, description: "Command line development", level: "Advanced" }
      ]
    }
  ];

  return (
    <Fragment>
      <div className={style.skillContainer} id="skill">
        <div className={style.greetings}>
          <h1>Technical Skills & Expertise</h1>
        </div>
        <div className={style.skillDescription}>
          <p>Here's a comprehensive overview of the technologies, tools, and frameworks I work with to create exceptional digital experiences:</p>
        </div>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={style.skillCategory}>
            <h2 className={style.categoryTitle}>{category.title}</h2>
            <p className={style.categoryDescription}>{category.description}</p>
            <div className="d-flex flex-wrap justify-content-center">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={`${style.skillCard} card m-3`}>
                  <div className={style.skillIconContainer}>
                    <img className={style.skillIcon} src={skill.icon} alt={skill.name} />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: '#e6f3ff' }}>{skill.name}</h5>
                    <p className="card-text" style={{ color: '#e6f3ff' }}>{skill.description}</p>
                    <span className={style.skillLevel}>{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Skills Section */}
        <div className={style.additionalSkills}>
          <h2 className={style.categoryTitle}>Additional Competencies</h2>
          <div className={style.competencyGrid}>
            <div className={style.competencyItem}>
              <h4>Problem Solving</h4>
              <p>Analytical thinking and creative solutions</p>
            </div>
            <div className={style.competencyItem}>
              <h4>Team Leadership</h4>
              <p>Leading development teams and mentoring</p>
            </div>
            <div className={style.competencyItem}>
              <h4>Agile Methodology</h4>
              <p>Sprint planning and iterative development</p>
            </div>
            <div className={style.competencyItem}>
              <h4>Client Communication</h4>
              <p>Requirements gathering and project updates</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Skill;
