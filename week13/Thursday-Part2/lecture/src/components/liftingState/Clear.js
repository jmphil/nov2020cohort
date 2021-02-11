import React from 'react'

const Clear = (props) => {
    return (
        <div>
            <button className = "btn btn-info" onClick = {props.reset}>Clear</button>
        </div>
    )
}

export default Clear
