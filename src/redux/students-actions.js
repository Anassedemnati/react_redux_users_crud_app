import axios from 'axios';
import * as types from './studentsTypes';

export const getStudents = ()=> async (dispatch)=>{
    try {
        dispatch({
            type:types.GET_STUDENTS_REQUEST
        })
        const res = await axios.get('https://localhost:7002/api/Students')
        dispatch({
            type:types.GET_STUDENTS_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:types.GET_STUDENTS_FAIL,
            payload: error.response && error.response.data.message
            ?error.response.data.message
            :error.message
        })
        console.error(error)
    }
}

export const deleteStudent = (id)=> async (dispatch)=>{
    try {
        dispatch({
            type:types.DELETE_STUDENT_REQUEST
        })
            await axios.delete(`https://localhost:7002/api/Students/${id}`)
        dispatch({
            type:types.DELETE_STUDENT_SUCCESS,
            payload:id
        })
    } catch (error) {
        dispatch({
            type:types.DELETE_STUDENT_FAIL,
            payload: error.response && error.response.data.message
            ?error.response.data.message
            :error.message
        })
        console.error(error)
    }
}

export const addStudent = (student)=> async (dispatch)=>{
    try {
        dispatch({
            type:types.ADD_STUDENT_REQUEST
        })
            const res = await axios.post('https://localhost:7002/api/Students',student)
        dispatch({
            type:types.ADD_STUDENT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:types.ADD_STUDENT_FAIL,
            payload: error.response && error.response.data.message
            ?error.response.data.message
            :error.message
        })
        console.error(error)
    }
}

export const getSingleStudent = (id)=> async (dispatch)=>{
    try{
        dispatch({
            type:types.GET_SINGLE_STUDENT_REQUEST
        })
        const res = await axios.get(`https://localhost:7002/api/Students/${id}`)
        dispatch({
            type:types.GET_SINGLE_STUDENT_SUCCESS,
            payload:res.data
        })
    }
    catch (error) {
        dispatch({
            type:types.GET_SINGLE_STUDENT_FAIL,
            payload: error.response && error.response.data.message
            ?error.response.data.message
            :error.message
        })
        console.error(error)
    }
}

export const updateStudent = (student)=> async (dispatch)=>{
    try {
        dispatch({
            type:types.UPDATE_STUDENT_REQUEST
        })
            const res = await axios.put(`https://localhost:7002/api/Students/${student.id}`,student)
        dispatch({
            type:types.UPDATE_STUDENT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:types.UPDATE_STUDENT_FAIL,
            payload: error.response && error.response.data.message
            ?error.response.data.message
            :error.message
        })
        console.error(error)
    }
}