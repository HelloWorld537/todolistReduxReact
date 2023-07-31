import { combineReducers } from "redux";
import { todos } from "./todos/todos-reducer";
import { filterTodo } from "./filters/filters-reducer"
export const rootReducer = combineReducers({
    todos,
    filterTodo
})