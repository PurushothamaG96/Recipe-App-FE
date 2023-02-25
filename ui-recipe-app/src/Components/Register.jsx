import React, { useState } from 'react';
import "./signin.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
function Register(props) {
    const navigate = useNavigate()
    const [form, setForm] = useState({email:"", password:""})
    const [confirmpass, setConirmPass] = useState("")
    const [validation, setValidation] = useState({password:false, passwordLength:false, confirmpass:false })
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(form.password!== confirmpass){
            setValidation({...validation, confirmpass:true})
        }
        else if(form.password.length < 5){
            setValidation({...validation, confirmpass:false, passwordLength:true})
        }
        else{
            setValidation({...validation, confirmpass:false, passwordLength:false})
            axios.post('https://gleaming-cuff-cod.cyclic.app/app/v1/signup', form)
            .then((data)=>{
                navigate("/")
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
                    {validation.passwordLength?<p className='validation'>Password length should be more than 5 charecter</p>:""}
                    </div>
                    
                    <div className='input-containers'>
                    <input className='inp' type="password" placeholder='Confirm Password'
                    onChange={(e)=>{setConirmPass(e.target.value)}} required/>
                    {validation.confirmpass?<p className='validation'>Password and confirm password not matching</p>:""}
                    </div>
                    <div className='input-containers'>
                    <input type="radio" id="radio" required/>
                    <span>I agree with <a href='#'>TERM & CONDITION</a></span>
                    </div>
                    <button className='submit-btn'  >Continue</button>
                </form>
                <Link to={"/"}>Go to Sign In</Link>
            </div>
        </div>
       </>
    );
}

export default Register;