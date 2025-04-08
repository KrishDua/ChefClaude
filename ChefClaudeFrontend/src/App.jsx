import React from 'react'
import './App.css'
import {render} from 'react-dom'
import Header from './Components/Header'
import Maincontent from './Components/Maincontent'
import Ingredientlist from './Components/Ingredientlist'
import Form from './Components/Form'
import ClaudeRecipe from './Components/ClaudeRecipe'
import { getRecipeFromChefClaude,getRecipeFromMistral } from './Services/ai'
export default function App() {  
    const [ingredients,setingredients] = React.useState([]);
    const [recipe,setrecipe] = React.useState("");
    function addingredient(formdata){
        const newingredient = formdata.get("ingredient").trim();
        if(newingredient){
          setingredients(previngredients => [...previngredients,newingredient]);
        }
    }
    function deleteingredient(name){
      const updated = ingredients.filter(ingredient => ingredient !== name);
      setingredients(updated)
    }
    async function getrecipe(){
      try{
        const generatedrecipe = await getRecipeFromChefClaude(ingredients);
        console.log("Recipe Generated");
        setrecipe(generatedrecipe);
      }catch(error){
        console.error("Error Fetching Recipe",error);
      }
    } 
  return (
    <>
    <Header/>
    <main>
    <Maincontent/>
    <Form addingredient = {addingredient}/>
    <Ingredientlist 
    deleteingredient = {deleteingredient}
    getrecipe = {getrecipe}
    ingredients = {ingredients}/>
    {
      recipe ? 
      <ClaudeRecipe recipe = {recipe} />
      : null
    }
    </main>
    </>
  )
} 