import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncLogin } from '../Redux/slice/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    
    const dispatch = useDispatch()

    const userData = useSelector(e=>e)
    const navigate = useNavigate()

    useEffect(() => {
        if(userData.userData.isAuthenticate===true) navigate("/home")
      },[userData?.userData?.isAuthenticate])


    const submitHandler = async (e) => {
      e.preventDefault();
        console.log(username, password)
    // Here we will make api call
        dispatch(asyncLogin(username,password))
   navigate("/home")

    }


  return (
    <div className='login'>
        <form onSubmit={submitHandler}>
            <h1>Login</h1>
            <h5>Username</h5>
            <input type = "text" placeholder='Type your username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <h5>Password</h5>
            <input type = "password" placeholder='Type your password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <h6 className='fp-text'>Forgot password ?</h6>
            <br/>
            <button><h4>Login</h4></button>
            <div className='signup-container'>
            <h6>Or Sign Up Using</h6>
           <div className='image-containers'>
           <img src='https://o.remove.bg/downloads/44abdd22-6392-4590-b2c1-80b03e7b812b/png-transparent-facebook-logo-social-media-facebook-like-button-computer-icons-facebook-like-button-social-trademark-logo-internet-removebg-preview.png'></img>
            <img src="https://o.remove.bg/downloads/712ddad0-3646-47c3-82c8-f89595a07b6b/png-clipart-twitter-twitter-thumbnail-removebg-preview.png"></img>
            <img src='https://o.remove.bg/downloads/d875b120-ea29-4dad-b237-06bb42701ca8/10091605-removebg-preview.png'></img>
            </div>
           </div>
           <div className='form-footer'>
            <h6>Or Sign Up Using</h6>
            <h6>SIGN UP</h6>
           </div>
        </form>
    </div>
  )
}

export default Login