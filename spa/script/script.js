console.log("Hello");

fetch('https://cors-anywhere.herokuapp.com/https://quote.api.fdnd.nl/v1/quotes')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})