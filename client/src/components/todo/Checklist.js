import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
export default class Checklist extends Component {
    render () {
        const { checklist } = this.props

        return (
            <div className='checklist'>
                <ul>
                    {checklist.get('checkItems').map((checkItem, i) => {
                            return (
                                <li key={i}>{checkItem.name}</li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}