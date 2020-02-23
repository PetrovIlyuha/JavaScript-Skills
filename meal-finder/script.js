const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const mealsElement = document.getElementById("meals");
const result = document.getElementById("result-heading");
const single_Meal = document.getElementById("single-meal");

function searchMeal(e) {
  e.preventDefault();
  // Clear single meal
  single_Meal.innerHTML = "";
  mealsElement.innerHTML = "";
  // Get search term
  const term = search.value;
  // Check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        result.innerHTML = `<h2>Search results for "${term}":</h2>`;
        if (data.meals === null) {
          result.innerHTML = `There are no search results in our database. Please look for another meal...`;
        } else {
          mealsElement.innerHTML = data.meals
            .map(
              meal => `
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${
                meal.strMeal
              }" class="meal_image"/>
              <div class="meal-info" data-mealId="${meal.idMeal}">
                <h3>${meal.strMeal.substr(0, 30)}</h3>
              </div>
            </div>
          `
            )
            .join("");
        }
      });
    // clear text input field
    search.innerHTML = "";
  } else {
    alert("Enter some search term...");
  }
}

function getMealById(mealId) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];
      showSingleMeal(meal);
    });
}

function showSingleMeal(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  single_Meal.innerHTML = `
    <div class="single-meal">
    <h1>${meal.strMeal}</h1>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
    <div class="single-meal-info">
      ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
      ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
    </div>
    <div class="main">
      <p>${meal.strInstructions.substr(0, 350)}</p>
      <h2>Ingredients</h2>
      <ul>
        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
      </ul>
    </div>
    </div>
  `;
}

// Event Listeners
submit.addEventListener("submit", searchMeal);

mealsElement.addEventListener("click", e => {
  const mealInfo = e.path.find(item => {
    if (item.classList) {
      return item.classList.contains("meal-info");
    } else {
      return false;
    }
  });

  if (mealInfo) {
    const mealId = mealInfo.getAttribute("data-mealid");
    getMealById(mealId);
  }
});
