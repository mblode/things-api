import React, { Component } from 'react';
import { observer } from 'mobx-react'

import ProjectStore from '../../stores/CardStore'

import CardStore from '../../stores/CardStore'
import Card from '../todo/Card'

@observer
export default class Project extends Component {
    componentWillMount () {
        ProjectStore.fetch()
        CardStore.fetch()
    }

    render () {
        const { project } = this.props

        return (
            <div className='project'>
                <h3>
                    {ProjectStore.models
                        .filter((project, i) => i === 0)
                        .map(project => (
                            project.get('name')
                        ))
                    }
                </h3>

                {CardStore.models
                    .filter(card => card.get('idProject') === 0)
                    .map(card => (
                        <Card key={card.id} card={card} />
                    ))
                }

            </div>
        )
    }
}