export default function Ingredientlist(props){
    const ingredlist = props.ingredients.map((name)=>{
        return (
            <li key = {name} >{name} <button onClick={()=> props.deleteingredient(name)} className="delete" >x</button></li>
        )
    })
    return (
        <>
        {
            props.ingredients.length > 0 ?  
            <section className="ingredtop">
            <div className="ingred">
                <h2 className="heading">Ingredients on hand:</h2>
                <ul aria-live="polite" className="list">
                    {ingredlist}
                </ul>
                { props.ingredients.length > 3 ? 
                    <div className="get-recipe-container">
                    <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getrecipe} >Get a recipe</button>
                    </div> : null
                }
            </div>
            </section>
            : null
         }
        </>
    )
}