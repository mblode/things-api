import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
export default class Context extends Component {
    render () {
        const { context } = this.props

        return (
            <div className='context'>
                {context.get('name')}
            </div>
        )
    }
}