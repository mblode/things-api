import React, { Component } from 'react';
import { observer } from 'mobx-react'

import ListStore from '../../stores/ListStore'
import CardStore from '../../stores/CardStore'
import Card from '../todo/Card'

@observer
export default class List extends Component {
    componentWillMount () {
        ListStore.fetch()
        CardStore.fetch()
    }

    render () {
        return (
            <div className='list'>
                <h3>
                    {ListStore.models
                        .filter((list, i) => i === 0)
                        .map(list => (
                            list.get('name')
                        ))
                    }
                </h3>

                {CardStore.models
                    .filter(card => card.get('idList') === ListStore.models[0].get('id'))
                    .map(card => (
                        <Card key={card.id} card={card} />
                    ))
                }

            </div>
        )
    }
}