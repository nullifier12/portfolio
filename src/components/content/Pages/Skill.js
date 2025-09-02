import { Fragment } from "react";
import style from "./css/page.module.css";

const Skill = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Modern UI library for building dynamic interfaces", level: "Advanced" },
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Cross-platform mobile development", level: "Advanced" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", description: "Full-stack React framework", level: "Advance" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "Semantic markup and structure", level: "Advanced" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "Modern styling and animations", level: "Advanced" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "ES6+ and modern JS features", level: "Advanced" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", description: "Responsive CSS framework", level: "Advance" },
        { name: "EJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "Template engine for Node.js", level: "Advance" }
      ]
    },
    {
      title: "Backend Development",
      description: "Server-side development and API creation",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "JavaScript runtime environment", level: "Advanced" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", description: "Web application framework", level: "Advanced" },
        { name: "C# (.NET)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", description: "Microsoft development framework", level: "Intermediate" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Relational database management", level: "Advanced" },
        { name: "MS SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", description: "Microsoft database system", level: "Advanced" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", description: "Server-side scripting language", level: "Advanced" }
      ]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      skills: [
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Native mobile apps with React", level: "Advanced" },
        { name: "Expo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "React Native development platform", level: "Advanced" },
        { name: "Mobile UI/UX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", description: "Mobile-first design principles", level: "Advanced" },
        { name: "App Store Deployment", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg", description: "iOS and Android publishing", level: "Advanced" }
      ]
    },
    {
      title: "Tools & Libraries",
      description: "Essential development tools and utilities",
      skills: [
        { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", description: "JavaScript library for DOM manipulation", level: "Advance" },
        { name: "Axios", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "Promise-based HTTP client", level: "Advanced" },
        { name: "Ajax", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "Asynchronous data requests", level: "Advanced" },
        { name: "Knex.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "SQL query builder", level: "Advance" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", description: "State management for React", level: "Advance" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "Type-safe JavaScript", level: "Advance" }
      ]
    },
    {
      title: "DevOps & Tools",
      description: "Development operations and workflow tools",
      skills: [
        { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "Version control and collaboration", level: "Advanced" },
        { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", description: "CI/CD and project management", level: "Intermediate" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", description: "API testing and documentation", level: "Advanced" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", description: "Code editor and extensions", level: "Advanced" },
        { name: "Terminal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", description: "Command line development", level: "Advanced" }
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
