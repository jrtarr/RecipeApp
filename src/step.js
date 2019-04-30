import { updateRecipe, getUniqueRecipe } from "./recipe";

const hash = window.location.hash.substring(1).split('&') //grabs hash from URL, splits at & and stores as array
const id = hash[0]
const stepId = hash[1]
const recipe = getUniqueRecipe(id)
const step = recipe.steps[stepId]

const updates = {
    title: undefined,
    ingredients: [],
    step: {
        id: stepId,
        title: step.title,
        details: step.details
    }
}

//Load Initial Content
if(step.title){
    document.querySelector('#title').value = step.title
}
if(step.details){
    document.querySelector('#details').value = step.details
}

//Query Selectors
document.querySelector('#return-button').addEventListener('click',(e)=>{
    //If no updates were made, return without saving
    if(updates.step.details === undefined && updates.step.title === undefined){
        window.location.replace(`recipe.html#${id}`)
    }else{
        //Add default title if none are entered
        if(updates.step.title){
            updateRecipe(recipe,updates)   
        }else{
            updates.step.title = 'Unnamed Step'
            updateRecipe(recipe,updates)
        }
        window.location.replace(`recipe.html#${id}`)
    }
})

document.querySelector('#title').addEventListener('input',(e)=>{
    updates.step.title = e.target.value
})

document.querySelector('#details').addEventListener('input',(e)=>{
    updates.step.details = e.target.value
})