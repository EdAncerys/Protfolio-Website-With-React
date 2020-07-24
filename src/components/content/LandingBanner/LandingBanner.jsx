import React, { Component } from 'react';
import SelectionBanner from './ProjectSelectionBanner';
import ProjectShowCaseBanner from './ProjectShowCaseBanner';

export default class LandingBanner extends Component {
  state = {
    projects: [
      { id: 1, name: 'About', link: 'link1' },
      { id: 2, name: 'ThereAndBack', link: 'link1' },
      { id: 3, name: 'About', link: 'link1' },
    ],
  };

  render() {
    return (
      <div className="landing-banner">
        <SelectionBanner
          projects={this.state.projects}
          selectedProject={this.props.selectedProject}
        />
        <ProjectShowCaseBanner
          projects={this.state.projects}
          selectedProjectId={this.props.selectedProjectId}
        />
      </div>
    );
  }
}