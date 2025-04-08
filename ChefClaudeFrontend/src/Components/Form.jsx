export default function Form(props){
    return (
        <form action = {props.addingredient} className="add-ingredient-form" >
        <input
        type = "text"
        placeholder="e.g. oregano" 
        aria-label = "Add ingredient"
        name="ingredient"/>
        <button>Add ingredient</button>
        </form>
    )
}