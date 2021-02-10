import React ,{useState, useRef, useEffect} from "react"
import './styles.css'


const StopWatch = () => {

    const [lapse, setLapse] = useState(0)
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);
    useEffect (() => {
        //when component unmounts
        //ensures no memory leaks
        return() =>{
            return clearInterval(intervalRef)
        }
    })
    const handleRunClick = () => {
        if(running) {
            //do something
            clearInterval(intervalRef.current)

        }
        else{
            //start clock
            const startTime = Date.now() - lapse;
            intervalRef.current = setInterval(() => {
                setLapse(Date.now() - startTime)
            }, 0)
        }

        setRunning(!running)
    }
    
    const handleClearClick = () => {
        clearInterval(intervalRef.current)
        setLapse(0)
        setRunning()
        
    }

    return <>
        <label>{lapse}ms</label>
        <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={handleClearClick}>Clear</button>
        
    </>
}

export default StopWatch