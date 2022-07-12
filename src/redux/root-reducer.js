import {combineReducers} from "redux"
import usersReducer from "./reducer"

const rootReucer = combineReducers({
    data:usersReducer
}
)

export default rootReucer;