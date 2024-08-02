// make create element
const takeContent = document.getElementById("recipeContainer");
const image = document.createElement("IMG");
const title = document.createElement("H1");
const instructions = document.createElement("p");

// append element
takeContent.appendChild(image);
takeContent.appendChild(title);
takeContent.appendChild(instructions);

const recipeBtn = document.getElementById("getRecipeBtn")
  
recipeBtn.addEventListener("click", addRandomRecipe);

async function addRandomRecipe() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const recipe = data.meals[0];

        // take content from Constant Objects
        image.src = recipe.strMealThumb;
        title.innerHTML = recipe.strMeal;
        instructions.innerHTML = recipe.strInstructions;
        
        // add br after . (dot)
        const textInstructions = recipe.strInstructions;
        const newTextInstructions = textInstructions.replace(/\. /g, '.<br>')
        
        instructions.innerHTML = newTextInstructions;
    } catch (error) {
        console.error('Error fetching the recipe:', error);
    }
  }

// give class name
  image.className = "recipe-image"
  title.className = "recipe-title"
  instructions.className = "recipe-instructions"

// style image
recipeBtn.addEventListener("click", function(){
    if (recipeBtn.clicked = true){
        image.style.width = "300px";
        image.style.height = "300px";
        image.style.display = "block";
        image.style.marginLeft =  "auto";
        image.style.marginRight =  "auto";

        instructions.style.textAlign = "center"
    }
})

// style title
title.style.textAlign = "center";