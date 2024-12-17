import { signOut } from "firebase/auth"
import auth from "./config"
import { Navigate, useNavigate } from "react-router-dom"

function Home()
{
const navigate=useNavigate()
function logout(){
signOut(auth).then(()=>{
navigate("/login")
})
}


return(
    <div>Home
        <button onClick={logout}>Logout</button>
    </div>
)
}
export default Home