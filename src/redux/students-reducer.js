import * as types from './studentsTypes';
const initialState = {
    students:[],
    student:{},
    loading:true
}

const studentsReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.GET_STUDENTS_REQUEST:
            return {
                ...state,
                students:[],
                loading:true
            }
        case types.GET_STUDENTS_SUCCESS:
            return{
                ...state,
                students:action.payload,
                loading:false
            }
        case types.GET_STUDENTS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case types.DELETE_STUDENT_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case types.DELETE_STUDENT_SUCCESS:
            return{
                ...state,
                loading:false,
                students:state.students.filter(student=>student.id!==action.payload)
            }
        case types.DELETE_STUDENT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case types.ADD_STUDENT_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case types.ADD_STUDENT_SUCCESS:
            return{
                ...state,
                loading:false,
                students:[...state.students,action.payload]
            }
        case types.ADD_STUDENT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case types.GET_SINGLE_STUDENT_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case types.GET_SINGLE_STUDENT_SUCCESS:
            return{
                ...state,
                loading:false,
                student:action.payload
            }
        case types.GET_SINGLE_STUDENT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case types.UPDATE_STUDENT_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case types.UPDATE_STUDENT_SUCCESS:
            return{
                ...state,
                loading:false,
                students:state.students.map(student=>student.id===action.payload.id?action.payload:student)
            }
        case types.UPDATE_STUDENT_FAIL:
            return{
                loading:false,
                error:action.payload
            }


        default:
            return state;
    }
}
export default studentsReducer;