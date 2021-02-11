import React from 'react'

function Increment (props) {


    return (
        <div>
            <button className = "btn btn-info" onClick = {props.increment}>Increment</button>
        </div>
    )
}

export default Increment
