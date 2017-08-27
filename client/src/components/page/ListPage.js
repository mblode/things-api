import React, { Component } from 'react';
import { observer } from 'mobx-react'

import CardStore from '../../stores/CardStore'
import Card from '../todo/Card'

@observer
export default class List extends Component {
    componentWillMount () {
        CardStore.fetch()
    }

    render () {
        const { list } = this.props

        return (
            <div className='list'>
                {list.get('name')}

                {CardStore.models
                    .filter(card => card.get('idList') === list.get('id'))
                    .map(card => (
                        <Card key={card.id} card={card} />
                    ))
                }

            </div>
        )
    }
}