import React from 'react'
import If from './if'

const iconButtons = props => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.styles}
            onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
)

export default iconButtons