import React, { Component } from 'react';
import { observer } from 'mobx-react'

import ChecklistStore from '../../stores/ChecklistStore'
import Checklist from './Checklist'

import ContextStore from '../../stores/ContextStore'
import Context from './Context'

@observer
export default class Card extends Component {
    componentWillMount () {
        ChecklistStore.fetch()
        ContextStore.fetch()
    }

    render () {
        const { card } = this.props

        return (
            <div className='card'>
                {card.get('name')}

                {ContextStore.models
                    .filter(context => context.get('id') === card.get('idContext'))
                    .map(context => (
                        <Context key={context.id} context={context} />
                    ))
                }

                {ChecklistStore.models
                    .filter(checklist => checklist.get('idCard') === card.get('id'))
                    .map(checklist => (
                        <Checklist key={checklist.id} checklist={checklist} />
                    ))
                }
            </div>
        )
    }
}