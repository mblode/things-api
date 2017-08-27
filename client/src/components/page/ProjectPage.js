import React, { Component } from 'react';
import { observer } from 'mobx-react'

import CardStore from '../../stores/CardStore'
import Card from '../todo/Card'

@observer
export default class Project extends Component {
    componentWillMount () {
        CardStore.fetch()
    }

    render () {
        const { project } = this.props

        return (
            <div className='project'>
                {project.get('name')}

                {CardStore.models
                    .filter(card => card.get('idProject') === project.get('id'))
                    .map(card => (
                        <Card key={card.id} card={card} />
                    ))
                }

            </div>
        )
    }
}