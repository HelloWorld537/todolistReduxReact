export const selectorVisibleTodos = (state, filter) => {
    if (filter == 'all') {
        return state.todos
    }
    else if (filter == 'active') {
        return state.todos.filter(todo => !todo.completed)
    }
    else if (filter == 'completed') {
        return state.todos.filter(todo => todo.completed)
    }
    else {
        return state.todos;
    }
}