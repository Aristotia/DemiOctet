import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function ProjectCards() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const projectId = 2;
    axios
      .get(`http://localhost:5000/tasksByProject/${projectId}`, {
        withCredentials: true,
      })
      .then((res) => {
        setTodoList(res.data);
      })
      // eslint-disable-next-line no-console
      .catch(() => console.log("cheh"));
  }, [todoList]);
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
        <VerticalTimeline>
          {todoList.map((truc) => (
            <VerticalTimelineElement>
              <h1>{truc.name}</h1>
              <h2>{truc.description}</h2>
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
