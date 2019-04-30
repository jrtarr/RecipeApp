import uuidv4 from 'uuid/v4'
import {newRecipe} from './recipe'
import {renderRecipeList} from './views.js'

renderRecipeList()

document.querySelector('#new-recipe').addEventListener('click',(e)=>{
    let id = uuidv4()
    newRecipe(id)
    window.location.href = `recipe.html#${id}`
})