// take element by id and declare as html div element
const takeContentById = document.getElementById("recipeContainer");
const getMainContent = takeContentById as HTMLDivElement;

// make create element
const image = document.createElement("IMG");
const title = document.createElement("H1");
const instructions = document.createElement("p");

// append element
getMainContent.appendChild(image);
getMainContent.appendChild(title);
getMainContent.appendChild(instructions);

const recipeBtnById = document.getElementById("getRecipeBtn")
const recipeBtnLoad = recipeBtnById as HTMLButtonElement;

recipeBtnLoad.addEventListener("click", addRandomRecipeCnt);

interface Recipe {
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
  }

async function addRandomRecipeCnt(): Promise<string> {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const recipe: Recipe = data.meals[0];

        // take content from Constant Objects
        image.setAttribute('src', recipe.strMealThumb);
        title.innerHTML = recipe.strMeal;
        instructions.innerHTML = recipe.strInstructions;
        
        // add br after . (dot)
        const textInstructions = recipe.strInstructions;
        const newTextInstructions = textInstructions.replace(/\. /g, '.<br>')
        
        instructions.innerHTML = newTextInstructions;
        return 'Recipe loaded succesfully';
    } catch (error) {
        console.error('Error fetching the recipe:', error);
        return error;
    }
}

// give class name
image.className = "recipe-image"
title.className = "recipe-title"
instructions.className = "recipe-instructions"

// style image
recipeBtnLoad.addEventListener("click", function(){
    image.style.width = "300px";
    image.style.height = "300px";
    image.style.display = "block";
    image.style.marginLeft =  "auto";
    image.style.marginRight =  "auto";

    instructions.style.textAlign = "center"
})

// style title
title.style.textAlign = "center";