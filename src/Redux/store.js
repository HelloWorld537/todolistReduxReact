import { legacy_createStore as createStore } from 'redux';
const todos = (state = [], action) => {
    if (action.type === "ADD_TODO") {
        return ([...state, {
            id: Date.now,
            title: action.title,
            completed: false

        }])
    }

}
export const addTodo = (title) => ({
    type: "ADD_TODO",
    title
})
export const Store = createStore(todos)