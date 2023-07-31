import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../Redux/todos/todos-actions';
import { selectActiveFilter } from '../Redux/filters/filters-selectors';
import { selectorVisibleTodos } from '../Redux/todos/todos-selector';


const TaskList = () => {
    let filterNow = useSelector(selectActiveFilter)
    let dispatch = useDispatch()
    const todos = useSelector((state) => (selectorVisibleTodos(state, filterNow)));

    // Добавим проверку на существование todos и что todos является массивом
    if (!todos || !Array.isArray(todos)) {
        return <div>No todos found</div>; // или что-то другое, чтобы обработать этот случай
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input onChange={() => dispatch(toggleTodo(todo.id))} type="checkbox" checked={todo.completed} />
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
