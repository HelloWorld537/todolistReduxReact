let idNum = 0
export const todos = (state = [], action) => {

    if (action.type === "ADD_TODO") {
        return ([...state, {
            id: ++idNum,
            title: action.title,
            completed: false

        }])
    }
    else if (action.type === "TOGGLE_TODO") {
        return state.map((todo) =>
            todo.id == action.id ? { ...todo, completed: !todo.completed } : todo
        )
    }
    else {
        return state
    }

}