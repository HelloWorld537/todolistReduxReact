import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../Redux/filters/filters-selectors';
import { setFilter } from '../Redux/filters/filters-actions';
import React, { useEffect } from 'react';

const Filter = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectActiveFilter);

    const handleAllClick = () => {
        dispatch(setFilter('all'));

    };

    const handleActiveClick = () => {
        dispatch(setFilter('active'));

    };

    const handleCompletedClick = () => {
        dispatch(setFilter('completed'));

    };

    useEffect(() => {
        console.log(activeFilter);
    }, [activeFilter]);

    return (
        <div>
            <button onClick={handleAllClick} style={{ color: activeFilter === 'all' ? 'red' : 'blue' }}>all</button>
            <button onClick={handleActiveClick} style={{ color: activeFilter === 'active' ? 'red' : 'blue' }}>active</button>
            <button onClick={handleCompletedClick} style={{ color: activeFilter === 'completed' ? 'red' : 'blue' }}>completed</button>
        </div>
    );
};

export default Filter;
