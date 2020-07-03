import React, {useState} from 'react'
import RecipeDetails from './RecipeDetails';

const  Recipe=({recipe})=> {
    const {label, image, url, ingredients} = recipe.recipe;
  const [show, setShow] = useState(false);

    return (
        <div className="recipe">
        <h2>{label}</h2>
        <img src={image} alt={label}></img>
        <a href={url} target="_blank" rel="noopener noreferrer">More Information</a>
        <button onClick={()=>setShow(!show)}>ingredients</button>  
        {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    )
}
export default Recipe;