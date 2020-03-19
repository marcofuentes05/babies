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
            <div className = "header">
            <h1>{ payload.fecha.getDate() + '/' + (parseInt(payload.fecha.getMonth())+1) + '/' + parseInt(payload.fecha.getYear() + 1900)  }
            </h1>            
                <button className="deleteButton" 
                    onClick = {() => onDelete(payload.id)}>
                    {'X'}
                </button>
            </div>
            <div className="element">
                <h3>{payload.fecha.getHours() + ':' + payload.fecha.getMinutes()}</h3>
                <h3>{payload.tipo}</h3>
                <h3>{payload.notas}</h3>
            </div>
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