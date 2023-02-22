import React, { Component } from "react";

export class ProjectCard extends Component {
  render() {
    let project = this.props.data;

    return (
      <div className="ui very raised card">
        <div className="ui image fluid">
          <a href={project.href} target="_self">
            <img className="ui image huge projectImage" src={project?.img} />
          </a>
        </div>
        <div className="content">
          <div className="header">{project.name}</div>
          <div className="meta ui text bold dark black">{project.meta}</div>
          <div className="description">{project.desc}</div>
        </div>
        <div className="extra content">
          <span className="right floated">{project.lastUpdated}</span>
          <span>
            <a href={project.github}>
              <i className="github icon black"></i>
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
