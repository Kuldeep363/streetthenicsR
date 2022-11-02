import { ActionTypes } from "../actions/actionTypes";

const initialState = {
    gender: 'male',
    exType: 'gym'
}

export const myReducer = (state = initialState, action)=>{
    let type = action.type;
    switch(type){
        case ActionTypes.changeGender:
            return {...state, gender:action.gender}
        case ActionTypes.changeExerciseType:
            return {...state, exType: action.exType}
        default:
            return state
    }
}

export const selectGender = state=>state.myReducer.gender;
export const selectExerciseType = state=>state.myReducer.exType;