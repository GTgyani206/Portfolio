import React from "react";
import image from "../images/education.jpeg";
import vitBhopalLogo from "../images/VIT-Bhopal-Logo.jpg";

const imageAltText = "education";

const projectList = [
  {
    title: "VIT Bhopal University",
    description: "(B.Tech. in Computer Science & Engineering) - 2023-2027",
    url: "https://vitbhopal.ac.in/",
    logo: null,
  },
  {
    title: "Academics",
    description:
      "I have maintained a GPA of 8.5 in my first semester of first year of college. And am also active in extra curricular activities.",
    logo: null,
  },
  {
    title: "My Resume",
    description: "Have a look at my resume to know more about my skills and achievements.",
    url: "https://gtgyani206.github.io/",
    logo: null,
  },
  {
    logo: true,
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
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
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              {project.logo && (
                <img
                  src={vitBhopalLogo}
                  alt="VIT-Bhopal-Logo"
                  style={{ width: "100%", height: "70%" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
