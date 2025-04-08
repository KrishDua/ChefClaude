export async function getRecipeFromChefClaude(ingredientsarr) {
  console.log("Calling backend with:", ingredientsarr);
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/claude`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ingredients: ingredientsarr })
    });
  
    const data = await response.json();
    console.log("Received from backend:", data);
    return data.recipe;
  }
  
  export async function getRecipeFromMistral(ingredientsarr) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mistral`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ingredients: ingredientsarr })
    });
  
    const data = await response.json();
    return data.recipe;
  }
  