import { useState } from "react";

export const useCounter  = () =>{
    const [count , setCounter] = useState(0)

    const handleIncrement = () =>{
        setCounter(count + 1)
    }

    const handleDecrement = () =>{
        setCounter(count - 1)
    }

    const handleResetCount = () =>{
        setCounter(0)
    }

    return {
        count,
        handleIncrement,
        handleDecrement,
        handleResetCount
    }
}