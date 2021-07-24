import { v4 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';

const initialState = {
    items: [
        {
            id: uuid(),
            name: 'Eggs'
        },
        {
            id: uuid(),
            name: 'Milk'
        },
        {
            id: uuid(),
            name: 'Butter'
        },
        {
            id: uuid(),
            name: 'Homework'
        },
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
};