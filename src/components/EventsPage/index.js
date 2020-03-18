import React  from 'react'
import EventList from './EventsList'
import NewEventForm from './NewEventForm'
import './styles.css'

const EventsPage = ({eventos, bebeId,babies},{changeSelected}) => {
    return (
        <div className ="pagina2">
            <EventList/>
            <NewEventForm/>
        </div>
    )
}

export default EventsPage