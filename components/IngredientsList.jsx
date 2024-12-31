/* eslint-disable react/prop-types */
export default function IngredientsList(props){

    const ingredientsListIems = props.ingredients.map(ingredient=>(
        <li key={ingredient}>{ingredient}</li>
    ))
    
    return (
        <section>
            <h2>Ingredient on Hand</h2>
            <ul className="ingredient-list"  aria-live="polite">{ingredientsListIems}</ul>

            { props.ingredients.length > 3 &&
                <div className="get-recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggleRecipeShown}>Get a recipe</button>
                </div> 
                    
            }
        </section> 
    )
}