import React, { Component } from 'react';
import { observer } from 'mobx-react'

import ListStore from '../../stores/ListStore'
import List from './List'

import ChecklistStore from '../../stores/ChecklistStore'
import Checklist from './Checklist'

import ContextStore from '../../stores/ContextStore'
import Context from './Context'

@observer
export default class Card extends Component {
    componentWillMount () {
        ListStore.fetch()
        ChecklistStore.fetch()
        ContextStore.fetch()
    }

    render () {
        const { card } = this.props

        return (
            <div className="todo todo-open">
                <div className="todo-main">
                    <input 
                        className="todo-check" 
                        type="checkbox" 
                        checked={card.get('checked')}
                    />

                    <input
                        type="text"
                        placeholder="New To-Do"
                        value={card.get('name')}
                        className="todo-input"
                    />

                    <textarea
                        placeholder="Notes"
                        className="todo-notes"
                        value={card.get('notes')}
                        rows="3"
                    />

                    {ChecklistStore.models
                        .filter(checklist => checklist.get('idCard') === card.get('id'))
                        .map(checklist => (
                            <Checklist key={checklist.id} checklist={checklist} />
                        ))
                    }
                    
                    {ContextStore.models
                        .filter(context => context.get('id') === card.get('idContext'))
                        .map(context => (
                            <Context key={context.id} context={context} />
                        ))
                    }

                    {ListStore.models
                        .filter(list => list.get('id') === card.get('idList'))
                        .map(list => (
                            <List key={list.id} list={list} />
                        ))
                    }
                </div>
            </div>
        )
    }
}