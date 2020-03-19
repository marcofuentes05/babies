import React  from 'react'
import EventList from './EventsList'
import NewEventForm from './NewEventForm'
import Babies from './../babyForm'
import './styles.css'

const EventsPage = ({eventos, bebeId,babies},{changeSelected}) => {
    return (
        <div className ="pagina">
            <EventList/>
            <NewEventForm/>
        </div>
    )
}

export default EventsPage