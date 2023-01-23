//fetched the JSON data online
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const input = document.querySelector("input");

const list = document.querySelector(".list");

const CityData = [];

//turning this data into an array using promise and .then with spread array[...]
fetch(endpoint)
    .then(data => data.json())
    .then(json => CityData.push(...json))


function searchForMatchs(wordsToUse, arrayData){
    return arrayData.filter( place =>{
        const regex = RegExp(wordsToUse, 'gi');
        return place.city.match(regex);
    });
}
//stackoverflow function
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
function DisplayMatchs(){

    const searchResult = searchForMatchs(this.value, CityData);
    const html = searchResult.map( array => {
        const highLight = new RegExp(this.value, 'gi');
        const city = array.city.replace(highLight, `<span class="HL">${this.value}</span> `)

        return `
        <li class="li">
          <span>${city}</span>
          <span>${numberWithCommas(array.population)}</span>
        </li>
      `
    }).join('');

    list.innerHTML = (html);
}

input.addEventListener("keyup", DisplayMatchs);