import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
export default class List extends Component {
    render () {
        const { list } = this.props

        return (
            <div className='list'>
                {list.get('name')}
            </div>
        )
    }
}