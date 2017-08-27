import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {observer} from 'mobx-react';

@observer
class ProjectSidebar extends Component {
  render () {
    const { project } = this.props

    return (
      <li className="nav-item">
        <NavLink to={'/project/'+project.get('id')}>
          <div className="nav-link">{project.get('name')}</div>
        </NavLink>
      </li>
    );
  }
}

ProjectSidebar = withRouter(ProjectSidebar);
export default ProjectSidebar;