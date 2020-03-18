import React  from 'react'
import {connect} from 'react-redux'
import EventList from './EventsList'
import NewEventForm from './NewEventForm'
import './styles.css'

const EventsPage = (eventos, bebeId) => {
    return (
        <div className ="pagina2">
            <EventList 
                events= {eventos}
                babyId = {bebeId}/>
            <NewEventForm/>
        </div>
    )
}

const mapStateToProps = (state) =>  {
    return {
        events: state.events,
        babyId: state.selectedBaby
    }
}

const mapDispatchToProps = (dispatch) => {
    return undefined
}

export default connect (
    mapStateToProps, 
    //mapDispatchToProps
    )
(EventsPage)