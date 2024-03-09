import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a
        style={{ cursor: "pointer" }}
        onClick={() => {
          document.getElementById("home").scrollIntoView({ behavior: "smooth" });
        }}
      >
        Home
      </a>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => {
          document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        }}
      >
        About
      </a>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => {
          document.getElementById("education").scrollIntoView({ behavior: "smooth" });
        }}
      >
        Education
      </a>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => {
          document.getElementById("certification").scrollIntoView({ behavior: "smooth" });
        }}
      >
        Certification
      </a>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => {
          document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        }}
      >
        Projects
      </a>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => {
          document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact
      </a>
    </div>
  );
};

export default Header;
