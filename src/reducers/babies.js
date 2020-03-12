import * as types from '../types/index.js'
import {v4 as uuidv4} from  'uuid';

export const addBaby = (state = [], action) => {
    switch(action.type){
        case types.BABY_ADDED: {
            return [...state, 
            {
                id: uuidv4(),
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