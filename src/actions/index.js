import * as types from '../types/index.js';

export const addBaby = (name, lastName) => ({
    type : types.BABY_ADDED,
    name,
    lastName
})

export const addEvent = (index , tipo, notes, date) => (
    {
        type : types.EVENT_ADDED,
        babyIndex : index,
        tipo,
        notes,
        date
    }
)

export const selectBaby = (newIndex) => ({
    type: types.BABY_CHANGED,
    newIndex
})

export const deleteEvent = (index) => (
    {
        type : types.ACTION_DELETED,
        index
    }
)