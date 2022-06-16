import {ADD_USER,DECREMENT,DELETE_USER, INNCREMENT} from './action-types'
import {data as listUsers } from '../data'

const init = {
    users:listUsers,
    value:0
}

export const userReducer = (state = init, action) =>{
    switch (action.type) { 
        case ADD_USER: return{
            ...state,
            users: [...state.users,action.payload]
        }
        case DELETE_USER: return{
            ...state,
            users: state.users.filter(user => user.id != action.payload)
        }
        case DECREMENT: return{
            ...state,
            value:state.value - 1
        }
        case INNCREMENT: return{
            ...state,
           value:state.value + 1
        }
        default:return state
    }
}