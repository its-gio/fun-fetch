let informaion;
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

function strip(informaion) {
    let area = informaion.data[0].latLong.split(", ")
    let lat = area[0].split(":").pop();
    let long = area[1].split(":").pop();

    return [lat, long]
}

async function getWeatherData([lat, long]) {
    return await fetch(`${proxyUrl}https://api.darksky.net/forecast/${DARKSKY_KEY}/${lat},${long}`)
}

async function getParkData() {
    let parkData;
    let weatherData;
    
    await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=yose&api_key=${NPS_KEY}`)
    .then(blob => blob.json())
    .then(parkAPIData => {
        let strippedData;
        parkData = parkAPIData;

        strippedData = strip(parkAPIData);

        return getWeatherData(strippedData);
    })
    .then(blob => blob.json())
    .then(weatherAPIData => weatherData = weatherAPIData);

    console.log(parkData, weatherData)
}
getParkData();