import React, { Component } from 'react'
import {useSelector} from 'react-redux';
import increaseAction from '../actions/increaseAction';
import decreaseAction from '../actions/decreaseAction';

const ViewCountHooks = (props) => {
    const count = useSelector(state => state.count);
    return (
        <>
            <h1>View Count Hooks</h1>
            <h3>{count}</h3>
            {/* <button onClick={()=>dispatch(increaseAction())}>Increase</button>
            <button onClick={()=>dispatch(decreaseAction())}>Decrease</button> */}
        </>
    )
}

export default ViewCountHooks
