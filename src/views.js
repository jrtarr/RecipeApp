import { getRecipes, removeRecipe, removeIngredient } from "./recipe";

//Load home page list of recipes
function renderRecipeList(){
    const recipes = getRecipes()
    const recipeCont = document.querySelector('#recipe-container')
    recipeCont.innerHTML = ''

    recipes.forEach((recipe)=>{ //loop over each recipe
        const parentEl = document.createElement('div')
        const title = document.createElement('a')
        const removeButton = document.createElement('button')

        title.textContent = recipe.title
        title.classList.add('recipe-title')
        title.href = `recipe.html#${recipe.id}`

        removeButton.textContent = 'Remove'
        removeButton.addEventListener('click',(e)=>{
            removeRecipe(recipe.id)
            renderRecipeList()
        })

        parentEl.appendChild(title)
        parentEl.appendChild(removeButton)
        recipeCont.appendChild(parentEl)
    })
}

//Load initial content on Recipe Edit page
function renderRecipe(recipe){
    const titleEl = document.querySelector('#recipe-title')
    const ingredList = document.querySelector('#ingredient-list')
    const stepsList = document.querySelector('#steps-list')
    ingredList.innerHTML = ''
    stepsList.innerHTHML = ''
    titleEl.textContent = recipe.title

    recipe.steps.forEach((step,index)=>{
        const stepItem = document.createElement('li')
        stepItem.textContent = step.title
        stepItem.addEventListener('click',(e)=>{
            window.location.href = `step.html#${recipe.id}&${index}`
        })
        stepsList.appendChild(stepItem)
    })

    recipe.ingredients.forEach((ingredient)=>{
        const parentEl = document.createElement('li')
        const text = document.createElement('span')
        const removeButton = document.createElement('button')

        text.textContent = ingredient
        text.classList.add('ingredient')

        removeButton.textContent = 'x'
        removeButton.addEventListener('click',(e)=>{
            removeIngredient(recipe,ingredient)
            renderRecipe(recipe)
        })

        parentEl.appendChild(text)
        parentEl.appendChild(removeButton)
        ingredList.appendChild(parentEl)
    })
}

export {renderRecipeList,renderRecipe}