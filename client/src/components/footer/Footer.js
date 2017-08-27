import React, { Component } from 'react'
import {observer} from 'mobx-react'

@observer
export default class Footer extends Component {
  render () {
    return (
      <footer className="footer ignore">
        <div className="footer-sidebar">
          <button 
            className="btn btn-sm footer-sidebar-button" 
          >
            + New Project
          </button>
        </div>

        <div className="footer-main">
          <div className="nav justify-content-center">
            <button 
              className="btn btn-sm footer-button" 
            >
              +
            </button>
          </div>
        </div>
      </footer>
    );
  }
}