import React from 'react'
import Grandchild from 'Grandchild'

const Child = (props) => {
  return (
    <div>
      My parent's name is {props.father}{props.mother}
      <br />
      <Grandchild />
    </div>
  )
}

export default Child
