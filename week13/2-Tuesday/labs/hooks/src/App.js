
import React, {useState, useEffect} from 'react'

const useCounter = (initialState, step) => {
  //custom hook
  //would typically be placed in another folder to be imported when needed
  const [count, setCount] = useState(initialState)
  const increment = () => setCount(count + step);

  return [count, increment]
}

const App = () => {

  const [count, increment] = useCounter( 3, 5);

  return <button onClick={increment}>{count}</button>

}

// const App = () => {
  // const initialCount = () => parseInt(window.localStorage.getItem('count')) || 0;
  // const [count, setCount] = useState(initialCount)
  // const [count2, setCount2] = useState(0)
  //const count = 0
  //const setCount = () => {}

  // const handleChange = () => setCount(count + 1);
  // const handleChange2 = () => setCount(count +1)

  // useEffect(() => {
  //   window.localStorage.setItem('count', count)
  //   console.log("counting")
  // })

  // useEffect (() => {
  //   console.log("i get called alot")
  // })
  // return (
  //   <div styles={{textAlign: 'center', paddingTop: '500px'}}>
      
      {/* <button onClick={() => setCount(count + 1)}>1{count}</button> */}
      {/* <button onClick={handleChange}>{count}</button> */}
      {/* <button onClick={handleChange2}>{count2}</button> */}
    {/* </div>
  )
} */}


export default App;


