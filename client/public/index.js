const api = '/api/weather';
let weather;
let description;
let temp;
let feelTemp;
let searchBut = document.querySelector('.search');
let city;
let state;



function changeImage(image) {
    let change = document.getElementsByClassName('weatherChange')
    change[0].src = image;

}

function conditionDescription(weather, description) {
    document.querySelector('.conditions').textContent = weather;
    document.querySelector('.description').textContent = description;

}

function tempDescription(temp, feelTemp) {
    let x = temp.toFixed()
    let y = feelTemp.toFixed()
    document.querySelector('.temp').textContent = x
    document.querySelector('.feelTemp').textContent = `It feels like ${y}`

}

async function postDataSndStore(api, city, state) {
    const response = await (await fetch(api)).json()
    weather = response.weather[0].main;
    description = response.weather[0].description;
    temp = response.main.temp;
    feelTemp = response.main.feels_like

    if (location.href !== 'http://localhost:5000/') {
        if (response.weather[0].main === 'Clouds') {
            changeImage('http://localhost:5000/images/overcast.jpg')
            check()

        } else if (response.weather[0].main === 'Rain') {
            changeImage('http://localhost:5000/images/raining.jpg')
            check()

        } else if (response.weather[0].main === 'Snow') {
            changeImage('http://localhost:5000/images/snowing.jpg')
            check()

        } else if (response.weather[0].main === 'Clear') {
            changeImage('http://localhost:5000/images/sunny.jpg')
            check()

        } else {
            changeImage('http://localhost:5000/images/others.jpg')
            check()

        }
    }
}

postDataSndStore(api)

function check() {
    if (document.querySelector('.conditions') === null) {
        tempDescription(temp, feelTemp)
    }
    if (document.querySelector('.temp') === null) {
        conditionDescription(weather, description)
    }
}
if(searchBut !== null ){
searchBut.addEventListener('click', function (e) {
    e.preventDefault()
    state = document.querySelector('.state').value
    city = document.querySelector('.city').value;
    let data = {
        city: city,
        state: state
    }

    fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))

})
}













