import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TaskList = () => {
    const todos = useSelector(state => state);

    // Добавим проверку на существование todos и что todos является массивом
    if (!todos || !Array.isArray(todos)) {
        return <div>No todos found</div>; // или что-то другое, чтобы обработать этот случай
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
};

export default TaskList;
