import {v4 as uuidv4} from 'uuid';
import * as types from '../types/index.js';
import filter from 'lodash/filter'

export const delEvents = (state = [], action) => {
    switch(action.type){
        case types.EVENT_ADDED : {
            return [...state, {
                    id: uuidv4(),
                    babyIndex : action.babyIndex,
                    tipo: action.tipo,
                    notas : action.notes,
                    fecha : action.date 
               }
            ]
        }
        case types.ACTION_DELETED : {
            const lista = filter(state, (value) => value.id !== action.id)
            return lista
        }
        default: {return state}
    }
}