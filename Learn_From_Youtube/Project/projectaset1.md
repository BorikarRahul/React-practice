# Project Related to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```JavaScript
Console.log("Rahul");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");;
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            // body.style.backgroundColor = 'gray';
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'white') {
            // body.style.backgroundColor = 'gray';
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue') {
            // body.style.backgroundColor = 'gray';
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            // body.style.backgroundColor = 'gray';
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'purple') {
            // body.style.backgroundColor = 'gray';
            body.style.backgroundColor = e.target.id
        }
    })
})
```

## Project 2 Solution

```Javascript
let form = document.querySelector('form');


// This usecase will give you empty value
// const weight = parseInt(document.querySelector('#weight').value) // if you get the value outside the form, it gives the empty value store in weight variable XXX

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a Valid Height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a Valid Weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //Show the result
        // result.innerHTML = `<span>${bmi}</span>`;
        if (result <= 18.6) {
            result.innerHtml = `<span> Under Weight ${bmi} </span>`;
        } else if (result > 18.6 && result < 25) {
            result.innerHTML = `<span> Normal Weight ${bmi} </span>`;
        } else {
            result.innerHTML = `<span> Over Weight ${bmi} </span>`;
        }
    }
})
```

## Project 3 solution code

````javascript
const clock = document.querySelector('#clock');

let date = new Date();
console.log(date.toLocaleTimeString());

// Method to control JS

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)```
````
