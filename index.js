// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius	= -225;
let fuelLevel	= "100%";
let weatherStatus = "clear";
let dashedLine = "-------------------------------------";
let clearForTakeoff = "YES";


// Write code to generate the LC04 report here:
console.log(dashedLine);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(dashedLine);
console.log("Date: " + date);
console.log("Time: " + time + "\n");

console.log(dashedLine);
console.log("> ASTRONAUT INFO");
console.log(dashedLine);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus + "\n");

console.log(dashedLine);
console.log("> FUEL DATA");
console.log(dashedLine);
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel + "\n");

console.log(dashedLine);
console.log("> MASS DATA");
console.log(dashedLine);
console.log("* Crew mass: " + astronautCount * averageAstronautMassKg + " kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + (crewMassKg + fuelMassKg + shuttleMassKg) + " kg" + "\n");

console.log(dashedLine);
console.log("> FLIGHT PLAN");
console.log(dashedLine);
console.log("weather: " + weatherStatus + "\n");

console.log(dashedLine);
console.log("> OVERALL STATUS");
console.log(dashedLine);
console.log("* Clear for takeoff: " + clearForTakeoff)



// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.