import React from 'react'
import Event from './../Event'
import {filter} from 'lodash'
import './styles.css'

const EventList = (
    events,
    babyId
) => {
    const lista = filter(events, (item) => item.babyIndex===babyId)
    console.log('----------')
    console.log(events)
    console.log('----------')
    return (
        <div className = "eventsList">
            {lista.map ( item => <Event payload={ item }/>)}
        </div>
    )
}

export default EventList