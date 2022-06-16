import {ADD_USER,DELETE_USER,INNCREMENT} from './action-types'


export const addNewUser = (user) =>{
    return{
        type:ADD_USER,
        payload:user
    }
}

export const deleteUser = (userId) =>{
    return{
        type:DELETE_USER,
        payload:userId
    }
}


export const inncrement = () =>{
    return {
        type:INNCREMENT
    }
}

export const decrement = () =>{
    return {
        type:"DECREMENT"
    }
}