import React from "react";
import image from "../images/certification.jpeg";

//Certificate images
import CSS from "../images/Certificates/CSS.png";
import Java from "../images/Certificates/Java.png";
import Full_Stack from "../images/Certificates/Full-Stack.jpg";
import Matlab from "../images/Certificates/MATLAB.jpg";

const imageAltText = "certification";

const projectList = [
  {
    title: "CSS",
    cert: CSS,
  },
  {
    title: "Java",
    cert: Java,
  },
  {
    title: "Full Stack",
    cert: Full_Stack,
  },
  {
    title: "Matlab",
    cert: Matlab,
    more: "https://drive.google.com/drive/folders/1kTFRazawZ48T_byaUYTKREwEESmzYsKD?usp=drive_link",
  },
];

const Certification = () => {
  return (
    <section className="padding" id="certification">
      <h2 style={{ textAlign: "center" }}>Certification</h2>
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
              <img src={project.cert} alt={project.title} />
              {project.more && (
                <a href={project.more} target="_blank" rel="noopener noreferrer">
                  More&#10141;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
