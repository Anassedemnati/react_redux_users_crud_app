import {combineReducers} from "redux"
import usersReducer from "./reducer"
import studentsReducer from "./students-reducer"

const rootReucer = combineReducers({
    data:usersReducer,
    studentData:studentsReducer

}
)

export default rootReucer;