import { ActionTypes } from "./actionTypes"

export const ChangeGender = (gender)=>{
    return {
        type: ActionTypes.changeGender,
        gender
    }
}

export const ChangeExerciseType = (exType)=>{
    return {
        type: ActionTypes.changeExerciseType,
        exType
    }
}