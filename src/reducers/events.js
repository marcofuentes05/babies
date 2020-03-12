import {v4 as uuidv4} from 'uuid';
import * as types from '../types/index.js';

export const addEvent = (state = [], action) => {
    switch(action.type){
        case types.EVENT_ADDED : {
            let d = new Date();
            return [...state, {
                    id: uuidv4(),
                    babyIndex : action.babyIndex,
                    tipo: action.tipo,
                    notas : action.notes,
                    fecha : d.getDate()
               }
            ]
        }
        default: {return state}
    }
}

export const deleteEvent = (state = [], action) => {
    switch(action.type){
        case types.ACTION_DELETED : {
            return 
        }
        default : { return state }
    }
}