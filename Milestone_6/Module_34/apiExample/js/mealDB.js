document.querySelector('#error h1').style.display = 'none';

/*=============================
      Fetch Api Section
===============================*/
// Fetch Api By Food Name
const loadSearchFood = () => {
      const searchValue = document.getElementById('search-field').value;
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
      fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
            .catch(error => displayError(error));
}
loadSearchFood();

// Fetch Meal Details By Id
const loadMealDetails = mealID => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;

      fetch(url)
            .then(res => res.json())
            .then(data => displayMealDetails(data.meals[0]))
            .catch(error => console.log(error));
}

/*=============================
      UI Section
===============================*/
// Display Search Result
const displaySearchResult = meals => {
      const resultView = document.querySelector('#result-view');
      resultView.textContent = ``;
      if(meals == null) {
            document.querySelector('#error h1').style.display = 'block';
      }
      else {
            document.querySelector('#error h1').style.display = 'none';
            meals.forEach(meal => {
                  const div = document.createElement('div');
                  div.classList.add('col');
                  div.innerHTML = `
                        <div class="card border border-danger radious-3" style="width: 18rem;">
                              <img src="${meal.strMealThumb}" class="card-img-top" alt="Food Picture">
                              <div class="card-body">
                                    <h5 class="card-title">${meal.strMeal} <small class"text-sm">(${meal.strArea})</small></h5>
                                    <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                                    <a onclick="loadMealDetails(${meal.idMeal})" href="#" class="text-danger">Read more..</a>
                              </div>
                        </div>
                  `;
                  resultView.appendChild(div);
            });
      }
}

// Display Meal Details
const displayMealDetails = meal => {
      const mealDetails = document.getElementById('meal-details');
      mealDetails.textContent = ``;
      document.querySelector('#error h1').style.display = 'none';
      const div = document.createElement('div');

      div.innerHTML = `
            <div class="border border-danger radious-3 row row-cols-1 row-cols-md-2">
                  <div class="colbd-success">
                        <img src="${meal.strMealThumb}" class="w-75" alt="Food Picture">
                  </div>
                  <div class="col">
                        <div class="card-body">
                              <h5 class="card-title">${meal.strMeal} <small class"text-sm">(${meal.strArea})</small></h5>
                              <p class="card-text">${meal.strInstructions}</p>
                        </div>
                  </div>
            </div>
      `;
      mealDetails.appendChild(div);
}
