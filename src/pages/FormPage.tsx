import { useRef } from "react"
const FormPage = () =>{ 

    const inputRef  = useRef<HTMLInputElement>(null)

    const handleSubmit = () =>{
        const fullNameFormValue = inputRef.current?.value
        alert (`Profile ${fullNameFormValue} Saved` )
    }

    return(
        <>
        
         <h2> Form Page</h2>
         <div style={{
            display : "flex",
            flexDirection : "column",
            width : "300px",
            gap : "4px",
            maxWidth : "300px",
         }}>
         <label htmlFor="full-name">Full Name</label>
         <input ref={inputRef} id= "full-name" type="text" placeholder="Full Name" />
         <button onClick={handleSubmit}>Click</button>
         </div>
         
        </>
    )
}
export default FormPage