import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
  const placeholderPullRequest = [
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
        <div>Name</div>
        <div>Agency </div>
        <div>Description </div>
        <div>Languages </div>
        <div>
          <div className="main-section-div">
            <div>Status </div>
            <div>Done </div>
            <div>Avencement </div>
          </div>
        </div>
      </div>
      <div className="message-commit-section-projects-cards">
        Messages
        <div className="message-section">
          {placeholderMessage.map((message) => (
            <div>
              {message} <hr />{" "}
            </div>
          ))}{" "}
        </div>
        Pull Request
        <div className="pull-request-section">
          {placeholderPullRequest.map((pullRequest) => (
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
