import { numberReducer } from './numberReducer'
import { userReducer } from './userReducer'

export function allReducers(state, action) {

    let newState = numberReducer(state, action);
    return userReducer(newState, action);

}