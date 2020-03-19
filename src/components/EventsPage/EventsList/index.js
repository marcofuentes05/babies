import React from 'react'
import Event from './../Event'
import {filter} from 'lodash'
import './styles.css'
import { connect } from 'react-redux'
import * as actions from './../../../actions/index.js'
import reverse from 'lodash/reverse'

const EventList = (
    {events, babyId, babies,
    changeSelected } 
) => {
    const lista = filter(events, (item) => item.babyIndex===babyId)
    return (
        <div className = "listWrapper"  key= '0'>
            <h1>
                {'Bebé: '}
                <select
                    id = "babies"
                    onChange = {() => changeSelected(filter(babies, (item) => item.name === document.getElementById('babies').value)[0].id)}
                >
                    <option key = {'0'} value="" selected disabled hidden>{'Nombre del bebé'}</option>
                    {babies.map(value => <option key = {value.id} selected = {babyId===value.id} value = {value.name} 
                    > {value.name} </option>)}
                </select>
            </h1>
            <div className = "lista">
                {reverse(lista).map(item => <Event payload={item} key={item.key}/>)}
            </div>
        </div>
    )
}

export default connect(
    state =>({
        events : state.events,
        babyId: state.selectedBaby,
        babies : state.babies
    }),
    dispatch => ({
        changeSelected (index) {
            dispatch(actions.selectBaby(index))
        }
    })
)(EventList)