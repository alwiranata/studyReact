import { useCounter } from "../hooks/useConter"

const Counter = () => {
    const {count ,handleDecrement ,handleIncrement ,handleResetCount}  = useCounter()

    return(
        <div style={{
            display : "flex",
            gap : "16px"
        }}>
            <button onClick={handleIncrement}>Tambah</button>
            <p style={{fontSize : "40px"}}>{count}</p>
            <button onClick={handleDecrement}>Kurang</button>
            <button onClick={handleResetCount}>Reset</button>
        </div>
    )
}
export default Counter