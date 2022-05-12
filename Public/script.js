// to add logic

const demo = document.getElementById("demo");
// .innerHTML = <p>Hello JavaScript!</p>;
const calc = document.getElementById('Calc');
const paycheck = document.getElementById('Paycheck');
const ideaOne = document.getElementById("ideaOne");
const input = new URLSearchParams(window.location.search);

//place to start posting information but will start as hidden until interaction/event
ideaOne.hidden = true;

//when calculate button is clicked, do this:
calc.onclick = () => {
    ideaOne.hidden = false;
    // ideaOne.innerHTML(" ");
    ideaOne.insertAdjacentHTML("afterend", displayOne(paycheck.value));
}
//retrieve number from textbox to run function
const displayOne = (income) => {
    return `You make: $${income}`;
}

// const paycheck = displayOne(input.get("Paycheck"));