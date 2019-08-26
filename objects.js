const bouncer = (age) => {
    if (age >= 21) {
        console.log(`Drink (at the bar)`);
    } else {
        console.log(`Shame`);
    }
}

bouncer(12);
bouncer(93);

const myObject = {
    name: `John`,
    age: `41`
}


console.log(myObject.name);

const findStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase === "m") {
        employee.status = `vip`;
    } else {
        employee.status = `peasant`;
    }
    console.log(`${employee.name} is a total ${employee.status}`);
}

// findStatus({
//     name: prompt("enter employee name"),
//     status: ``
// })

