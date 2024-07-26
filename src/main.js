const recipe = {
    title: "Spaghetti Carbonara",
    instructions:
      "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};
  
  const recipeBtn = document.getElementById("getRecipeBtn")
  
  recipeBtn.addEventListener("click", addContent);
  
function addContent() {
  // make create element
  const takeContent = document.getElementById("recipeContainer");
  const titl = document.createElement("H1");
  const imag = document.createElement("IMG");
  const inst = document.createElement("p");
  
  // append element
  takeContent.appendChild(imag);
  takeContent.appendChild(titl);
  takeContent.appendChild(inst);
  
  // take content from Constant Objects
  imag.src = recipe.image;
  titl.innerHTML = recipe.title;
  inst.innerHTML = recipe.instructions;
  
  // give class name
  imag.className = "recipe-image"
  titl.className = "recipe-title"
  inst.className = "recipe-instructions"
  
  // style img
  imag.style.width = "300px";
  imag.style.height = "300px";
  imag.style.display = "block";
  imag.style.marginLeft =  "auto";
  imag.style.marginRight =  "auto";
  
  // style title
  titl.style.textAlign = "center";

  // make list for instructions
  function convertToUl(listinstructions){
    // Use a regular expression to match instructions between numbers
    const steps = listinstructions.match(/(?:\d+\.\s)(.*?)(?=\s*\d+\.\s|$)/g);
    
    // Wrap each step in <li> tags
    const listItems = steps.map(step => `<li>${step.trim()}</li>`).join("");

    // Wrap the list items in <ul> tags
    return `<ul style="list-style-type: none;">${listItems}</ul>`;
  }
  const ulInstructions = convertToUl(recipe.instructions);

  inst.innerHTML = ulInstructions;
  
  const removeBtn = document.getElementById("getRecipeBtn")
  removeBtn.remove();
}