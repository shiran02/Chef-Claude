import React from "react"
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from "./IngredientsList";

export default function Main(){

    const [ingredients,setIngredients] = React.useState(['tomato','asd','tomato','asd','erer']);
    const [recipeShown,setRecipeShown] = React.useState(false);

    function toggleRecipeShown(){
        setRecipeShown(prevShown=>!prevShown)
    }

    // function handleSubmit (event){
    //     event.preventDefault()
    //     console.log('Form sumbited')
    //     const formData = new FormData(event.currentTarget)
    //     const newIngredient = formData.get("ingredient")
    //     // ingredients.push(newIngredient)
    //     // console.log(ingredients)

    //     setIngredients( prevIngredient=> [
    //         ...prevIngredient,
    //         newIngredient
    //     ])
    // }


    function addIngredient(formData){
        const ingredients = formData.get('ingredient');
        console.log(ingredients);

        setIngredients( prevIngredient=> [
            ...prevIngredient,
            ingredients
        ])
    }

    
    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            { 
            
            ingredients.length > 0 ? 
                    
                 <IngredientsList toggleRecipeShown={toggleRecipeShown}  ingredients={ingredients}/>   : null
            }

            {recipeShown ? <ClaudeRecipe/>
                : null}
            
        </main>
    )
}