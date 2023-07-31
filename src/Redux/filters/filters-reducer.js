export function filterTodo(state = 'all', action) {
    if (action.type === 'SET_FILTER') {
        return action.filter;
    }

    // Возвращаем состояние по умолчанию для неизвестных типов действий
    return state;
}
