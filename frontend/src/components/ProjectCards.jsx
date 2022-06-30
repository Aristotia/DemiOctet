import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/css/ProjectCards.css";

function ProjectCards() {
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
  const placeholderCommits = [
    "Pull request",
    "Pull request",
    "Pull request",
    "Pull request",
    "Pull request",
    "Pull request",
    "Pull request",
    "Pull request",
    "Pull request",
  ];
  return (
    <div className="member-card">
      <div className="todo-list-projects-cards">
        <div className="line">fggg </div>
        <VerticalTimeline>
          {placeholder.map((truc) => (
            <VerticalTimelineElement>
              <h1>{truc.name}</h1>
              <h2>{truc.desc}</h2>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <div className="main-section-projects-cards">
        <div id="name">Name</div>
        <div id="agency">Agency </div>
        <div id="description">Description </div>
        <div id="languages">Languages </div>
        <div>
          <div className="main-section-div">
            <div id="status">Status </div>
            <div id="progress">% </div>
            <div id="countdown">Time remaining </div>
          </div>
        </div>
      </div>
      <div className="message-commit-section-projects-cards">
        <div id="messages"> Messages</div>
        <div className="message-section">
          {placeholderMessage.map((message) => (
            <div>
              {message} <hr />{" "}
            </div>
          ))}{" "}
        </div>
        <div id="commits"> Last Commits</div>
        <div className="pull-request-section">
          {placeholderCommits.map((pullRequest) => (
            <div>
              {pullRequest}
              <hr />{" "}
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
