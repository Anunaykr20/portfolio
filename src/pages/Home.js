import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Anunay</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, Yarn,
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C, C++, Java</span>
          </li>
          <li className="item">
            <h2>Technologies</h2>
            <span>Git, GitHub, Visual Studio Code,MySQL</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
