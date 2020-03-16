import {v4 as uuidv4} from 'uuid';
import * as types from '../types/index.js';

export const delEvents = (state = [], action) => {
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
        case types.ACTION_DELETED : {
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        }
        default: {return state}
    }
}