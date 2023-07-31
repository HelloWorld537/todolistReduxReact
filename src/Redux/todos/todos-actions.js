export const addTodo = (title) => ({
    type: "ADD_TODO",
    title
})
export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id
})