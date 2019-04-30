import { renderRecipes } from "./views";

function loadRecipes(){
    let recipes = localStorage.getItem('recipes')
    if (recipes){
        recipes = JSON.parse(recipes)
    }else{
        recipes = []
    }
    return recipes
    //console.log(recipes)
}

function saveRecipes(){
    localStorage.setItem('recipes',JSON.stringify(recipes))
}

function newRecipe(id){
    const recipe = {
        id: id,
        ingredients: [],
        steps: []
    }
    console.log(recipe)
    recipes.push(recipe)
    saveRecipes()
}

function updateRecipe(recipe,{title,ingredients,step}){
    //Check new Title is a string and isn't the default value
    if(typeof title === 'string' && title !== 'Unnamed Recipe'){
        recipe.title = title
    }
    //Check ingredients array contains value(s)
    if(ingredients.length > 0){
        ingredients.forEach((ingredient)=>{
            recipe.ingredients = ingredients
        })
    }
    //Check step to make sure it's a string and not the same as previous value
    if((typeof step.title === 'string' && step.title !== recipe.steps[step.id].title)||(typeof step.title === 'string' && step.details !== recipe.steps[step.id].details)){
        recipe.steps[step.id] = step
    }
    saveRecipes()
}

function removeRecipe(id){
    let removeIndex = recipes.findIndex((recipe)=>recipe.id===id)
    recipes.splice(removeIndex,1)
    saveRecipes()
}

function removeIngredient(recipe,ingredient){
    const index = recipe.ingredients.findIndex((value)=>value===ingredient)
    recipe.ingredients.splice(index,1)
    saveRecipes()
}

const getRecipes = () => recipes //Exports entire array of recipes
const getUniqueRecipe = (id) => recipes.find((recipe)=>recipe.id === id) //Exports specific recipe based on Id

const recipes = loadRecipes()

export {newRecipe,getRecipes,saveRecipes,removeRecipe,updateRecipe,removeIngredient,getUniqueRecipe}