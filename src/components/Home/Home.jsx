import "./home.css";
import A from "../img/bg.mp4";
import B from "../img/lg2.png";
import logo from "../img/logo2.png";
import React from "react";
import Second from "../Second/Second";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Gen2de.pdf"; // ✅ Do NOT include "public/" here
    link.download = "Gen2De.pdf";
    link.click();
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="h">
      <div className="h-main">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/* <nav className="nav-links">
          <a href="#" class="Button">
            Cases
          </a>
          <a href="#" class="Button">
            Blog
          </a>
          <a href="#" class="Button">
            People
          </a>
          <a href="#" class="Button">
            Jobs
          </a>
          <a href="#" class="Button">
            Contact
          </a>
        </nav> */}
        <nav className="langu">
          {/* <a href="#" class="Button">
            DE
          </a>
          <a href="#" class="Button">
            EN
          </a> */}
          <a href="#Second" className="Button">
            About
          </a>
          <a href="#" className="Button">
            Contact
          </a>
        </nav>
        <div className="heading">
          We Design We Develop
          <br />
          You Grow.
        </div>
        {/* <div className="view">
          <a href="#" class="Button-view" onClick={handleDownload}>
            View Manifesto
          </a>
        </div> */}
        <div className="view">
          <a href="#" className="Button-view" onClick={handleDownload}>
            View Manifesto
          </a>
        </div>

        <div className="date">{date}</div>
        <div className="company">
          <img src={B} alt="CK" className="ck" />
        </div>
        <video loop muted autoPlay className="backdrop">
          <source src={A} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
