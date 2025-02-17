import { useRef } from "react"
import { useState } from "react"
const FormPage = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const inputEmailRef = useRef<HTMLInputElement>(null)


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const[usernameErrorMessage , setUsernameErrorMessage] = useState("")
    const[passwordErrormessage , setPasswordErrorMessage] = useState("")

    const handleSubmit = () => {
        // const fullNameFormValue = inputRef.current?.value
        // const emailFormValue = inputEmailRef.current?.value
        // alert(`Profile ${fullNameFormValue} and Email  ${emailFormValue}`)
        const usernameValidation = username.length < 4
        const passwordvalidation = password.length< 8

        if(usernameValidation){
            setUsernameErrorMessage("Username must be least 4 character")
        }else{
            setPasswordErrorMessage("")
        }

        if(passwordvalidation){
            setPasswordErrorMessage("Password must be least 8 character")
        }else{
            setPasswordErrorMessage("")
        }
      
        // setPassword("Aldo Wiranata")
    }


    return (
        <>

            <h2> Form Page</h2>
            <h3>{username}</h3>
            <h3>{password}</h3>

            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "300px",
                gap: "4px",
                maxWidth: "300px",
            }}>
                
                {/* //username */}
                <label htmlFor="Username">Username</label>
                <input 
                 onChange={(e) =>{ 

                    setUsername(e.target.value) 
                    const usernameValidation = e.target.value.length < 4
                    if(usernameValidation){
                        setUsernameErrorMessage("Username must be lest 4 character")
                    }else{
                        setUsernameErrorMessage("")
                    }
                 }} 
                 id="Username" 
                 type="text"
                 value={username} 
                />
                <span style={{color :"red"}}>{usernameErrorMessage}</span>

                {/* //password */}
                <label htmlFor="Password">Password</label>
                <input 
                 onChange={(e) => { setPassword(e.target.value) }}
                 id="password" 
                 type="password" 
                 value={password}
                 
                />
                <span style={{color : "red"}}>{passwordErrormessage}</span>
                <button onClick={handleSubmit}>Click</button>


            </div>

        </>
    )
}
export default FormPage