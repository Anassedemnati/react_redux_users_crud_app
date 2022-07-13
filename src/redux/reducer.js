import * as types from './actionType';
const initialState = {
    users:[],
    user:{},
    loading:true
}

const usersReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.GET_USERS_REQUEST:
            return {
                ...state,
                users:[],
                loading:true
            }
        case types.GET_USERS_SUCCESS:
            return{
                ...state,
                users:action.payload,
                loading:false
            }
        case types.GET_USERS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case types.DELETE_USER_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case types.DELETE_USER_SUCCESS:
            
            return{
                ...state,
                loading:false,
                users:state.users.filter(user=>user.id!==action.payload.id)
            }
        case types.DELETE_USER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case types.ADD_USER_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case types.ADD_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                users:[...state.users,action.payload]
            }
        case types.ADD_USER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;
            
    }

}



export default usersReducer;