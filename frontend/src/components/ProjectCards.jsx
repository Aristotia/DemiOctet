import axios from "axios";
import React, { useEffect, useState } from "react";

function ProjectCards() {
  const [githubDataCommits, setGitHubDataCommits] = useState([]);
  const [githubDataProjects, setGithubDataProjects] = useState([]);
  const [backendProjects, setbackendProjects] = useState([]);
  // const [githubUser, setGithubUser] = useState("Aristotia");

  const placeholder = [
    {
      name: "manger",
      desc: "pour la santé mangé 5 fruits et legumes par jours",
    },
    {
      name: "manger",
      desc: "pour la santé mangé 5 fruits et legumes par jours",
    },
    {
      name: "manger",
      desc: "pour la santé mangé 5 fruits et legumes par jours",
    },
    {
      name: "manger",
      desc: "pour la santé mangé 5 fruits et legumes par jours",
    },
    {
      name: "manger",
      desc: "pour la santé mangé 5 fruits et legumes par jours",
    },
    {
      name: "manger",
      desc: "pour la santé mangé 5 fruits et legumes par jours",
    },
    {
      name: "manger",
      desc: "pour la santé mangé 5 fruits et legumes par jours",
    },
    {
      name: "manger",
      desc: "pour la santé mangé 5 fruits et legumes par jours",
    },
    {
      name: "manger",
      desc: "pour la santé mangé 5 fruits et legumes par jours",
    },
  ];
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

  const fetchGithubProjectsData = () => {
    axios
      .get(`https://api.github.com/repos/Aristotia/DemiOctet/`)
      .then((data) => setGithubDataProjects(data.data));
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

  useEffect(() => {
    fetchGithubProjectsData();
    fetchGithubCommitsData();
    fetchBackendProjectsData();
  }, []);
  return (
    <div className="member-card">
      <div className="todo-list-projects-cards">
        <div className="task-list">
          {placeholder.map((task) => (
            <div className="task">
              <div className="task-name-item">{task.name}</div>
              <div className="task-desc-item">{task.desc}</div>
            </div>
          ))}
        </div>
      </div>
      {githubDataProjects ? (
        <div className="main-section-projects-cards">
          <div>{backendProjects[0].title}</div>
          <div>Agency </div>
          <div>{backendProjects[0].description}</div>
          <div>Languages </div>
          <div>
            <div className="main-section-div">
              <div>Status </div>
              <div>Done </div>
              <div>{backendProjects[0].progress}%</div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="message-commit-section-projects-cards">
        Messages
        <div className="message-section">
          {placeholderMessage.map((message) => (
            <div>
              {message} <hr />{" "}
            </div>
          ))}{" "}
        </div>
        Commits
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
