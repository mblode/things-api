import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {observer} from 'mobx-react';

@observer
class ListSidebar extends Component {
  render () {
    const { list } = this.props

    return (
      <li className="nav-item">
        <NavLink exact to={'/list/'+list.get('id')}>
          <div className="nav-link">{list.get('name')}</div>
        </NavLink>
      </li>
    );
  }
}

ListSidebar = withRouter(ListSidebar);
export default ListSidebar;