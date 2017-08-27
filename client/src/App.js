import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'

import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'

import ListPage from './components/page/ListPage'
import ProjectPage from './components/page/ProjectPage'

@observer
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="container-fluid">
                        <div className="row flex-xl-nowrap">
                            <Sidebar />
                        
                            <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
                                <Switch>
                                    <Route exact path="/" render={() => (
                                        <Redirect to="/list/inbox"/>
                                    )}/>
                                    <Route path='/list/:id?' component={ListPage} />
                                    <Route path='/project/:id?' component={ProjectPage} />
                                    <Route render={() => <h3>No Match</h3>} />
                                </Switch>
                            </main>
                        </div>
                    </div>
                    
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}