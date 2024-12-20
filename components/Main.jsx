import React from "react"


export default function Main(){

    const [ingredients,setIngredients] = React.useState([]);

   



    const ingredientsListIems = ingredients.map(ingredient=>(
        <li key={ingredient}>{ingredient}</li>
    ))

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

            { ingredients.length > 0 ? <section>
                <h2>Ingredient on Hand</h2>
                <ul className="ingredient-list"  aria-live="polite">{ingredientsListIems}</ul>

                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section> : null}
            
        </main>
    )
}