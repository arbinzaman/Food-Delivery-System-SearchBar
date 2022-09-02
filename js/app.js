const loadMeals =(search)=> {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch (url)
    .then (res => res.json())
    .then (data => displayMeals(data.meals))
}
const displayMeals = meals =>{
   const mealsContianer = document.getElementById('meals-conatiner');
   mealsContianer.innerHTML='';
   meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    // console.log(meal);
    mealDiv.classList.add('col');
    mealDiv.innerHTML= `
        <div onclick ="displayMealDeatils(${meal.idMeal})"class="card">
                <img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.s}</p>
               
            </div>
        </div>
    `
    mealsContianer.append(mealDiv);
   });
}
const searchMeals =()=>{
   const searchField = document.getElementById('search-field')
   const searchText = searchField.value;
   loadMeals(searchText);
   searchField.value='';
}

const displayMealDeatils = (idMeal)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch (url)
    .then(res => res.json())
    .then(data => displayFoodDeatils(data.meals[0]))
}

const displayFoodDeatils = meal => {
    const detailsContainer = document.getElementById('detail-Container');
    detailsContainer.innerHTML='';
    const mealDiv = document.createElement('div');
    mealDiv.classList.add ('card');
    mealDiv.innerHTML = `
             <img class="card-img" src="${meal.strMealThumb}" alt="Card image">
                <div class="card-img-overlay">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.s}</p>
              </div>
    
    `;
    detailsContainer.appendChild(mealDiv);
}
loadMeals('');