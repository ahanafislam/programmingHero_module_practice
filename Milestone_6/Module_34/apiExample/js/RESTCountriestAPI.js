// Fetch All Countries from API
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();

// Fetch Country Details by name
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryByName(data[0]));
}

// ======================= UI Section ===========================================

// Display All Countries in UI
const displayCountries = countries => {
    const sectionTag = document.querySelector('.row');
    countries.forEach( country => {
        const article = document.createElement('article');
        article.classList.add('col','article-col');
        article.innerHTML = `
            <div onclick="loadCountryByName('${country.name.common}')" class="bg-dark border border-2 border-info rounded-3">
                <div class="card-body">
                    <img src="${country.flags.png}" class="img-thumbnail mb-2" alt="User Profile Picture">
                    <h5 class="card-title">${country.name.common}</h5>
                    <h6 class="card-subtitle mb-2 text-info"></h6>
                </div>
            </div>
        `;
        sectionTag.appendChild(article);
    });
}

// Display Country Detail In UI onclick
const displayCountryByName = (country) => {
    const countryDetailTag = document.getElementById('country-detail');
    countryDetailTag.innerHTML = '';
    const article = document.createElement('article');
    article.classList.add('row','article-col');
    article.innerHTML = `
        <div class="bg-dark border border-2 border-info rounded-3 col-6">
            <div class="card-body">
                <img src="${country.flags.png}" class="img-thumbnail mb-2" alt="User Profile Picture">
                <h5 class="card-title">${country.name.common}</h5>
                <h6 class="card-subtitle mb-2 text-info"></h6>
            </div>
        </div>
        <div class="bg-dark border border-2 border-info rounded-3 col-6">
            <div class="card-body">
                <h6 class="card-title">Offical Name: ${country.name.official}</h6>
                <h6 class="card-title">Population: ${country.population}</h6>
                <h6 class="card-title">Offical Name: ${country.name.official}</h6>
                <h6 class="card-title">Region: ${country.region}</h6>
            </div>
        </div>
    `;
    countryDetailTag.appendChild(article);
}
