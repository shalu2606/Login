import {BrowserRouter,Link,Route,Router,Routes} from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";

function App() {
  return (
<BrowserRouter>
<nav>
  <Link to={"/login"}>Login</Link>
  <Link to={"/signup"}>Signup</Link>
  <Link to={"/home"}></Link>
</nav>
<Routes>
  <Route path="/home" element={<Home/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/signup" element={<Signup/>}></Route>
</Routes>



</BrowserRouter>

    
  )
}

export default App;
