import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { userLogin } from '../redux/userSlice/userSlice';
import "./Register-login.css"
function Login({setnav,setpp}) {

  useEffect(() => {
      setnav("nav-login")
      setpp("pp")
  }, [])
  
  const [login, setLogin] = useState({
    
    email:"",
    password:"",
  })
  const dispatch=useDispatch();
  const isAuth =localStorage.getItem("token");
  let navigate=useNavigate();
  return (
  //   <form className='login'>
  //    <h2>Please login</h2>
  //    <input type="text" className='input' placeholder='email'onChange={(e)=>setLogin({...login,email:e.target.value})} required/>
  //    <input type="password" className='input' placeholder="password" onChange={(e)=>setLogin({...login,password:e.target.value})} />
  //    <div className='bobbox'><input type="checkbox" className='box'/><p>Remember me</p></div>
  //    <button  onClick={()=>{
  //     dispatch(userLogin(login));
  // setTimeout(()=>{
  //   navigate("/profil");
  // },1000);
 
  //    }}>Login</button>
  //    <Link to="/"><h5 style={{color:"black",textAlign:"center",width:"400px"}}>Register Now</h5></Link>

  //   </form>






  
  <div className='register-login'>
<div className='div1'>
<h2>Welcome Back</h2>
<p>welcome back please enter your details</p>
<div className='input'>
  <label>Email</label>
  <input placeholder='Email' type="email" onChange={(e)=>setLogin({...login,email:e.target.value})} required></input>
</div>
<div className='input' >
  <label>Password</label>
  <input placeholder='Password' type="password"  onChange={(e)=>setLogin({...login,password:e.target.value})}></input>
  
</div>
<div className='bobbox'><input type="checkbox" className='box'/><p>Remember me</p></div>
<div className='input' >
<button onClick={()=>{
      dispatch(userLogin(login));
  setTimeout(()=>{
  navigate("/profil");
  },2000);}}>Sign in</button>
  
</div>
<div className='input' >
<button className='bt2'><img src='google-logo.png'></img>Sign with Google</button>
  
</div>
<Link to="/register" style={{textDecoration:"none"}}><h5 style={{color:"black",textAlign:"center",width:"400px",width:"350px",display:"flex",justifyContent:"flex-start",textAlign:"left",marginTop:"-10px"}}>Register Now</h5></Link>
</div>

<div className='div2'>
  <img src='people.jpg'></img>
</div>
  </div>
  )
}

export default Login