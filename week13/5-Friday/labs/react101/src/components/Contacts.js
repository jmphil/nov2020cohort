

import React from 'react'

const Contacts = (props) => {
  return (
    <>
        <h3>{props.firstName} {props.lastName} </h3>
        {props.email} <br />
        {props.phoneNumber}
        
    </>
  )
}




export default Contacts
