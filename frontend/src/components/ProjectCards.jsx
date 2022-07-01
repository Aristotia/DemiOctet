import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/css/ProjectCards.css";

function ProjectCards() {
  const [backendTask, setBackendTask] = useState([]);
  const [githubDataCommits, setGitHubDataCommits] = useState([]);
  // const [githubDataProjects, setGithubDataProjects] = useState([]);
  const [backendProjects, setbackendProjects] = useState();
  const [backendAgencies, setbackendAgencies] = useState();
  const [backendTechnos, setbackendTechnos] = useState();
  // const [githubUser, setGithubUser] = useState("Aristotia");

  const placeholderMessage = [
    "lorem ipsum machin truc",
    "lorem ipsum machin truc",
    "lorem ipsum machin truc",
    "lorem ipsum machin truc",
    "lorem ipsum machin truc",
    "lorem ipsum machin truc",
    "lorem ipsum machin truc",
    "lorem ipsum machin truc",
    "lorem ipsum machin truc",
  ];

  // TO DO ADD GITHUBUSER TO URL

  // const fetchGithubProjectsData = () => {
  //   axios
  //     .get(`https://api.github.com/repos/Aristotia/DemiOctet/`)
  //     .then((data) => setGithubDataProjects(data.data));
  // };

  const fetchBackendTaskData = () => {
    axios
      .get(`http://localhost:5000/tasks/projects/2`, {
        withCredentials: true,
      })
      .then((res) => {
        setBackendTask(res.data);
      })
      .catch((error) => console.error(error));
  };

  const fetchGithubCommitsData = () => {
    axios
      .get(`https://api.github.com/repos/Aristotia/DemiOctet/commits`)
      .then((data) => setGitHubDataCommits(data.data));
  };

  const fetchBackendProjectsData = () => {
    axios
      .get(`http://localhost:5000/projects`)
      .then((data) => setbackendProjects(data.data));
  };

  const fetchBackendAgenciesData = () => {
    axios
      .get(`http://localhost:5000/agencies`)
      .then((data) => setbackendAgencies(data.data));
  };

  const fetchBackendTechnosData = () => {
    axios
      .get(`http://localhost:5000/projects/technos/2`)
      .then((data) => setbackendTechnos(data.data));
  };

  useEffect(() => {
    // fetchGithubProjectsData();
    fetchGithubCommitsData();
    fetchBackendProjectsData();
    fetchBackendAgenciesData();
    fetchBackendTechnosData();
    fetchBackendTaskData();
  }, []);
  return (
    <div className="member-card">
      <div className="todo-list-projects-cards">
        <VerticalTimeline>
          {backendTask.map((task) => (
            <VerticalTimelineElement>
              <h1>{task.name}</h1>
              <h2>{task.description}</h2>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      {/* && githubDataProjects */}
      {backendProjects && backendAgencies && (
        <div className="main-section-projects-cards">
          <h1>{backendProjects[0].title}</h1>
          <h2>{backendAgencies[16].city} </h2>
          <div>{backendProjects[0].description}</div>
          <div className="technos">
            <ul className="techno-list">
              {backendTechnos &&
                backendTechnos.map((techno) => <li>{techno.name}</li>)}
            </ul>
          </div>
          <div>
            <div className="main-section-div progressbar-container">
              <div className="progressbar-content">
                <h2>{backendProjects[0].progress}%</h2>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="message-commit-section-projects-cards">
        <div id="messages"> Messages</div>
        <div className="message-section">
          {placeholderMessage.map((message) => (
            <div>
              {message} <hr />{" "}
            </div>
          ))}{" "}
        </div>
        <div id="commits">Commits and Pull Requests</div>
        <div className="commits-section">
          {githubDataCommits
            ? githubDataCommits.map((commit) => (
                <>
                  <div>{commit.commit.author.name}</div>
                  <div>{commit.commit.author.date.split("T")[0]}</div>
                  <div>
                    {commit.commit.author.date.split("T")[1].slice(0, 8)}
                  </div>
                  <div>{commit.commit.message}</div>
                  <hr />
                </>
              ))
            : null}{" "}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
