import React, { Component } from 'react'

export class DropDown extends Component {
    render() {

        let days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ]
        let daysArr = days.map(day => {

            return <option>{day}</option>

        })
        return (
            <>
            <div>
                <select>
                    {daysArr}
                    
                </select>
            </div>
            </>
        )
    }
}

export default DropDown
