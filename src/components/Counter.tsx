import { useState } from "react"

const Counter = () => {

    const [count , setCount] = useState(0)
    // const [nama , setName ] = useState("Aldo")
    // let count = 0

    const handleDecrement = () =>{
        // count -= 1
        // alert(count)
        setCount(count -1)
        // setName("Wiranata")
    }

    const handleIncrement = () => {
    //    count += 1
    //    alert(count)
    setCount(count + 1)
    // setName("18")
    }

    const handleResetCount =() =>{
        setCount(0)
    }
 
    return(
        <div style={{
            display : "flex",
            gap : "16px"
        }}>
            <button onClick={handleIncrement}>Tambah</button>
            <p style={{fontSize : "40px"}}>{count}</p>
            {/* <p>{nama}</p> */}
            <button onClick={handleDecrement}>Kurang</button>
            <button onClick={handleResetCount}>Reset</button>
        </div>
    )
}
export default Counter