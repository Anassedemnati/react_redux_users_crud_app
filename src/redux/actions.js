import axios from 'axios';
import * as types from './actionType';



export const  loadUsers = ()=> async (dispatch)=>{
    
        try {
           dispatch({
            type:types.GET_USERS_REQUEST
           })
            const res = await axios.get('http://localhost:5000/user')
            dispatch({
                type:types.GET_USERS_SUCCESS,
                payload:res.data
            })
            
        } catch (error) {
            dispatch({
                type:types.GET_USERS_FAIL,
                payload: error.response && error.response.data.message
                ?error.response.data.message
                :error.message
            })
            console.error(error)
        }
        
}

export const  deleteUser = (id)=> async (dispatch)=>{
    
    try {
       dispatch({
        type:types.DELETE_USER_REQUEST
       })
            await axios.delete(`http://localhost:5000/user/${id}`)
        dispatch({
            type:types.DELETE_USER_SUCCESS,
            payload:id
        })
       
        
    } catch (error) {
        dispatch({
            type:types.DELETE_USER_FAIL,
            payload: error.response && error.response.data.message
            ?error.response.data.message
            :error.message
        })
        console.error(error)
    }
    

}

export const  addUser = (user)=> async (dispatch)=>{

    try {
       dispatch({
        type:types.ADD_USER_REQUEST
       })
            const res = await axios.post('http://localhost:5000/user',user)
        dispatch({
            type:types.ADD_USER_SUCCESS,
            payload:res.data
        })
       
        
    } catch (error) {
        dispatch({
            type:types.ADD_USER_FAIL,
            payload: error.response && error.response.data.message
            ?error.response.data.message
            :error.message
        })
        console.error(error)
    }
}