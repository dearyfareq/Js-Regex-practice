//fetched the JSON data online
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const CityData = [];

//turning this data into an array using promise and .then with spread array[...]
fetch(endpoint)
    .then(data => data.json())
    .then(json => CityData.push(...json))

console.table(CityData);

function searchForMatchs(wordsToUse, arrayData){
    return arrayData.filter( place =>{
        const regex = RegExp(wordsToUse, 'gi');
        return place.city.match(regex);
    });
}
