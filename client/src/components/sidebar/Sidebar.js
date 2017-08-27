import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {observer} from 'mobx-react';

import ListStore from '../../stores/ListStore'
import ListSidebar from './ListSidebar'

import ProjectStore from '../../stores/ProjectStore'
import ProjectSidebar from './ProjectSidebar'

@observer
class Sidebar extends Component {
    componentWillMount () {
        ListStore.fetch()
        ProjectStore.fetch()
    }

    render () {
        return (
        <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
            <nav className="nav-sidebar">
            <ul className="nav flex-column sidebar-ul">

                {ListStore.models.map(list => (
                    <ListSidebar key={list.id} list={list} />
                ))}

                {ProjectStore.models.map(project => (
                    <ProjectSidebar key={project.id} project={project} />
                ))}
            </ul>
            </nav>
        </div>
        );
    }
}

Sidebar = withRouter(Sidebar);
export default Sidebar;