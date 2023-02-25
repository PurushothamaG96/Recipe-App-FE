
import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './Components/Login';
import Register from './Components/Register';
import PostRecipe from './Components/PostRecipe';
import ViewRecipe from './Components/viewRecipe';
import CardView from './Components/CardView';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route  path='/signup' element={<Register/>}/>
      <Route path="/postrecip" element={<PostRecipe/>}/>
      <Route path='/home' element={<ViewRecipe/>}/>
      <Route path='/cardView' element={<CardView/>}/>
    </Routes>
    </>
  );
}

export default App;
