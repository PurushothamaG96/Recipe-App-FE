import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./view.css"
import {Link, useNavigate} from "react-router-dom"
function ViewRecipe(props) {
    
    const naviagate = useNavigate()
const [Arr, setArr] = useState([])
const [search, setSearch] = useState("")

const recep = localStorage.getItem('recipe')

useEffect(()=>{
handleRecipe()
}, [])
const handleRecipe = ()=>{
    axios.get("http://localhost:5500/app/v1/post")
    .then((res)=>{
        setArr(res.data.data)
    }).catch(e=>{
        console.log(e)
    })
}
if(recep===null){
    return (
        naviagate('/')
    )
}

function handleSearch(){
    if(search === ""){
        handleRecipe()
    }
    else{
    axios.get(`http://localhost:5500/app/v1/post/${search}`)
    .then((res)=>{
        setArr(res.data.data)
    }).catch(e=>{
        console.log(e)
    })
}
}
const handleLogout=()=>{
    localStorage.removeItem("recipe")
    naviagate('/')
}
    return (
        <div className='container'>
             <header>
                <h1 style={{color:"goldenrod"}}>Recipe<span style={{color:"black"}}>App</span></h1>
                <h3><button onClicK={handleLogout}>Log Out</button></h3>
            </header>
            <main>
            <div className='searchBar'>
                <input type="text" placeholder='Search By Recipe name' onChange={(e)=>{setSearch(e.target.value)}}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
            <Link to={"/postrecip"}> <button>Add New Recipe</button></Link>
            </div>
            <section>
                <p>All Recipes</p>
                <div className='card-container'>
                    {Arr.map((val, i)=>{
                        return(
                            <div className='cards'>
                                <p><b>Recipe Name:</b> {val?.name}</p>
                                 <Link to={"/cardView"} state={val}><img id="img" src={val?.url} alt="recipes"/></Link>
                            </div>
                            
                        )
                    })}
                </div>
            </section>
            </main>
           
        </div>
    );
}

export default ViewRecipe;