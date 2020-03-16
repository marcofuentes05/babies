// aqui pongo el combineReducers de los demas y lo exporto poor defecto
import { combineReducers } from 'redux'
import * as events from './events.js'
import * as babies from './babies.js'

const reducer = combineReducers(
    {
        events: events.delEvents,
        babies : babies.addBaby,
        selectedBaby : babies.selectBaby
    }
);

export default reducer;