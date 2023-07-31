import React from 'react';
import { UseSelector, useDispatch } from 'react-redux';
import { addTodo } from '../Redux/todos/todos-actions';

const AddTodo = () => {
    const dispatch = useDispatch();
    function handleSubmit(event) {
        event.preventDefault()
        dispatch(addTodo(event.target.title.value))
        event.target.reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='add Todo' />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddTodo;