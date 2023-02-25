import React, { useState } from 'react';
import "./signin.css"
import axios from 'axios'
import {useNavigate, Link} from "react-router-dom"
function Login(props) {
    const [form, setForm] = useState({email:"", password:""})
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
            if(form.email && form.password){
                axios.post('https://gleaming-cuff-cod.cyclic.app/app/v1/signin', form)
            .then((data)=>{
                console.log(data.data.message)
                localStorage.setItem("recipe", JSON.stringify(data.data.message))
                navigate("/home")
            }).catch(e=>{
                console.log(e)
            })
            }
            
        
    }
    return (
       <>
        <div className='main-container'>
            <div className='sub-container'>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-containers'>
                         <input className='inp' type="email" placeholder='Email' 
                         onChange={(e)=>{setForm({...form, email:e.target.value})}} required/>
                    </div>
                    <div className='input-containers'>
                    <input className='inp' type="password" placeholder='Password'
                    onChange={(e)=>{setForm({...form, password:e.target.value})}} required/>
                    </div>
                    <div className='input-containers'>
                    <input type="radio" id="radio" required/>
                    <span>Remember me</span>
                    </div>
                    <button className='submit-btn'>Submit</button>
                </form>
                <Link to={"/signup"}>Go to Sign In</Link>
            </div>
        </div>
       </>
    );
}

export default Login;