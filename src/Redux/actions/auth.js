import store from '../store'
import types from '../types'
const {dispatch}  = store;
export function login(data){
    dispatch({
        type: types.IS_LOGIN,
        payload: data
    })
}

export function logout(){
    dispatch({
        type: types.CLEAR_REDUX_STATE,
        payload: data
    }) 
}