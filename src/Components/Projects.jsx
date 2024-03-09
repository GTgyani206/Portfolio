import React from "react";
import image from "../images/projects.jpeg";
import Update from "../images/ToBeUpdated.jpeg";

const imageAltText = "projects";

const projectList = [
  {
    title: "Education",
    description: Update,
  },
  {
    title: "Web Development for Beginners",
    description: Update,
  },
  {
    title: "My Resume Site",
    description: Update,
  },
  {
    title: "GitHub Codespaces and github.dev",
    description: Update,
  },
];

const Projects = () => {
  return (
    <section className="padding" id="projects">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <img src={project.description} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
