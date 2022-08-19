import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { useDispatch } from "react-redux";
import { logaout, logout, userCurrent } from "./redux/userSlice/userSlice";
import Profile from "./components/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
function App() {
  const [nav, setnav] = useState("")
  const [pp, setpp] = useState("")
  let navigate=useNavigate();

  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
  }, []);

  return (
    <div className="App">
      <Navbar navStyle={nav} pp={pp}/>  
      
          {/* <div className="nav-bar">
        <Link to="/login">
          <h3>Login</h3>
        </Link>
        <Link to="/">
          <h3>Register</h3>
        </Link>
        {isAuth?<button onClick={()=>{
          dispatch(logout());
          navigate("/");
          }}>logout</button>:null}
      </div> */}
      <Routes>
        <Route exact path="/register" element={<Register setnav={setnav}setpp={setpp}/>} />
        <Route path="/login" element={<Login setnav={setnav} setpp={setpp} />} />
        <Route element={<PrivateRoute/>}>
          <Route  path="/profil" element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
