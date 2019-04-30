import { updateRecipe, getUniqueRecipe } from "./recipe";
import { renderRecipe } from "./views";

let id = window.location.hash.substring(1)
const recipe = getUniqueRecipe(id)
const titleEl = document.querySelector('#recipe-title')

renderRecipe(recipe)
console.log(recipe.steps)

const updates = {
    title: 'Unnamed Recipe',
    ingredients: [],
    step: []
}

document.querySelector('#save').addEventListener('click',(e)=>{
    updateRecipe(recipe,updates)
    window.location.href = 'index.html'
})
document.querySelector('#edit-title').addEventListener('input',(e)=>{
    updates.title = e.target.value
    updateRecipe(recipe,updates)
    titleEl.textContent = updates.title
})
document.querySelector('#add-step').addEventListener('click',(e)=>{
    const stepId = recipe.steps.length
    window.location.replace(`step.html#${id}&${stepId}`)
})
document.querySelector('#add-ingredient').addEventListener('submit',(e)=>{
    e.preventDefault()
    updates.ingredients.push(e.target.elements.ingredient.value)
    updateRecipe(recipe,updates)
    e.target.elements.ingredient.value = ''
    renderRecipe(recipe)
})