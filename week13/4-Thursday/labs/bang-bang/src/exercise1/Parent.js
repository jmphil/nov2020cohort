import React from 'react'
import Child from './Child';

let newArr = ['Anthony', 'Tonya']

const Parent = (props) => {
  return (
    <>
      My name is {props.firstName}
      <Child father='Anthony' mother='Tonya' />
    </>
  )
}

export default Parent
