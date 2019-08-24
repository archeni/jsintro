
const fancyFunction = (something) => {
    return something + "fancy";
}
console.log(fancyFunction);

let output = fancyFunction("micheal is ");
console.log(output)

let firstName = "Traye";
let lastName = "Johnson";
console.log("$(firstName) $(lastName)");

firstName = "Bob";
lastName = "Smith";

const sayMyName = (first, last) => {
    return "$(first) $(last)";
    
}

console.log(sayMyName("Kag", "Morrison"));

const nuggetizer = (animal) => {
    return "nugget $(animal)";
}

const humanNuggetizer = (animal) => {
    return animal;
}

const spamFactory = (anything) => {
    return "spam";
}

console.log(nuggetizer("chicken"));
console.log(nuggetizer("octopus"));
console.log(nuggetizer("John Wark"));

console.log(humanNuggetizer("chicken"));
console.log(humanNuggetizer("octopus"));
console.log(humanNuggetizer("John Wark"));

console.log(spamFactory("chicken"));
console.log(spamFactory("octopus"));
console.log(spamFactory("John Waek"));

let bandNumber = 1;

const printToDom = (toPrint) => {
    document.getElementById("output").innerHTML += toPrint;
}

const takeNumber = (bandName) => {
    printToDom(`<h3>${bandNumber} ${bandName}<h3>`);
    bandNumber++;
};

takeNumber("Scum");
takeNumber("Underdogs");


printToDom("Callan");