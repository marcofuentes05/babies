import * as types from '../types/index.js'
// import {v4 as uuidv4} from  'uuid';

export const addBaby = (state = [], action) => {
    switch(action.type){
        case types.BABY_ADDED: {
            return [...state, 
            {
                //Es conveniente que el bebe tenga el ID del tamano de la lista porquenunca vamos a eliminar bebes
                //Esto no es conveniente en eventos
                id: state.length,
                name : action.name,
                lastName: action.lastName
            }]
        }
        default: {
            return state
        }
    }
}

export const selectBaby = (state = 0, action) => {
    switch(action.type){
        case types.BABY_CHANGED: {
            return action.newIndex
        }
        default:{return state}
    }

}