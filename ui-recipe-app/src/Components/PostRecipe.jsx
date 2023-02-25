import React, {useState} from 'react';
import "./post.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function PostRecipe(props) {
    const navigate = useNavigate()
    const [form, setForm]= useState({name:"",
        author:"",
        url:"",
        ingredients:"",
        description:""
    })
    function handleForm(e){
        e.preventDefault()
        
        axios.post("http://localhost:5500/app/v1/post", form)
        .then((res)=>{
            navigate("/home")
        }).catch((e)=>{
            console.log(e)
        })
    }
    return (
        <>
            <div className='form-container'>
                <div className='sub-form-container'>
                    <h1>Create a recipe</h1>
                    <p>Share a recipe with the club for competing the form below</p>
                    <form onSubmit={handleForm}>
                        <input type="text" placeholder='Recipe name' required
                        onChange={(e)=>{setForm({...form, name:e.target.value})}}/>

                        <input type="text" placeholder='Author name' required
                        onChange={(e)=>{setForm({...form, author:e.target.value})}}/>

                        <input type="url" placeholder='past reecipe image url' required
                        onChange={(e)=>{setForm({...form, url:e.target.value})}}/>

                        <textarea id="text" cols="30" rows="5" placeholder='ingredients' required
                        onChange={(e)=>{setForm({...form, ingredients:e.target.value})}}>
                        </textarea>

                        <textarea id="text" cols="30" rows="5" placeholder='Description' required
                        onChange={(e)=>{setForm({...form, description:e.target.value})}}>

                        </textarea>
                        <button>Post Recipe</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PostRecipe;