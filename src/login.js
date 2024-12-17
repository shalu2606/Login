
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./config";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login(){

    const[user,setUser]=useState()
    const[pass,setPass]=useState()
    const navigate=useNavigate()

useEffect(()=>{
auth.onAuthStateChanged(function(user)
{
    if(user){
        console.log("Logged In")
        navigate("/home")
    }
    else{
        console.log("Logged Out")
    }
})

},[])


    function loginuser()
    {
signInWithEmailAndPassword(auth,user,pass).then(()=>{
    console.log("User Logged In")                                   
    navigate("/home")
}).catch(()=>{
    console.log("Login Failed")
})
    }

    return(
        <div>
        <h1>Login</h1>
        <input placeholder="username" onChange={(e)=>setUser(e.target.value)}></input>
        <input placeholder="password" onChangeCapture={(e)=>setPass(e.target.value)}></input>
        <button onClick={loginuser}>Login</button>
        </div>
    )
        
}
export default Login