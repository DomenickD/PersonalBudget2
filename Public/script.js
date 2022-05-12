// to add logic

const demo = document.getElementById("demo");
// .innerHTML = <p>Hello JavaScript!</p>;
const calc = document.getElementById('Calc');
const paycheck = document.getElementById('Paycheck');
const ideaOne = document.getElementById("ideaOne");
const input = new URLSearchParams(window.location.search);

//place to start posting information but will start as hidden until interaction/event
ideaOne.hidden = true;


//initialize variables for processing
let income = 0;
let rent = 0;
let grocery = 0;
let gas = 0;
let utilities = 0;
let personalCare = 0;
let savings = 0;

//when calculate button is clicked, do this:
calc.onclick = () => {
    ideaOne.hidden = false;
    // ideaOne.innerHTML(" ");
    ideaOne.insertAdjacentHTML("afterend", displayOne(paycheck.value));
}
//retrieve number from textbox to run function
const displayOne = (income) => {
    rent = income * .4;
    grocery = income *.15;
    utilities = income * .1;
    gas = income *.05
    savings = income * .2;
    personalCare = income * .1;
    return `You make: $${income}<br>It is suggested you allocate the following:<br>Rent: $${rent}<br>Grocery: $${grocery}<br>Utilities: $${utilities}
    <br>Gas: $${gas}<br>Savings: $${savings}<br>Personal Care: $${personalCare}<br>`;
}

// const paycheck = displayOne(input.get("Paycheck"));