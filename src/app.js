import axios from "axios";

const API_KEY = 'https://restcountries.com/v2/all';
const countryList = document.getElementById('countries-container');

async function fetchCountries () {
    try {
        const response = await axios.get(API_KEY)

        response.data.sort((a, b) => {
            return a.population - b.population
        })

        const mappedResponse = response.data.map((country) => ({
            countryRegion: country.region,
            countryName: country.name,
            countryPop: country.population,
            countryFlag: country.flags.png
        }))

        for (let i = 0; i < mappedResponse.length; i++) {
            countryList.innerHTML += `
            <li class="${mappedResponse[i].countryRegion}">
                <h3>${mappedResponse[i].countryName}</h3>
                <p>Has a population of ${mappedResponse[i].countryPop} people.</p>
                <img src="${mappedResponse[i].countryFlag}" alt="Flag of country">
            </li>
        `
        }
    } catch (e) {
        console.error(e);
    }
}

fetchCountries();



