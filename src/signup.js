import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./config";
import { useNavigate } from "react-router-dom";
function Signup()
{
const[user,setUser]=useState()
const[pass,setPass]=useState()

const navigate=useNavigate()

function signupuser(){
createUserWithEmailAndPassword(auth,user,pass).then(()=>{
    console.log("User Registered")
    navigate("/login")
})
}

    return(
        <div>
        <h1>Sign up</h1>
        <input placeholder="username" onChange={(e)=>setUser(e.target.value)}></input>
        <input placeholder="password" onChangeCapture={(e)=>setPass(e.target.value)}></input>
        <button onClick={signupuser}>Sign up</button>
        </div>
    )
}
export default Signup