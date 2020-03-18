import React from 'react';
import './styles.css'
import {connect} from 'react-redux'
import * as actions from './../../../actions/index.js'

//DUMB
const Event = (
    { payload ,
    onDelete}
) => {
    return(
        <div className="event" key={payload.key}>
            <h1>{
                payload.fecha.getDate() + '/' + (payload.fecha.getMonth())}
                <button className="deleteButton" 
                    onClick = {() => onDelete(payload.id)}>
                    {'X'}
                </button>
            </h1>
            <h2>{payload.tipo}</h2>
            <h3>{payload.notas}</h3>
        </div>
    )
}

//SMART
export default connect(
    undefined,
    dispatch => ({
        onDelete(id){
            console.log(id)
            dispatch(actions.deleteEvent(id))
        }
    })
)(Event)