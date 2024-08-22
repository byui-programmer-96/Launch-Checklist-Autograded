// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput.trim() === "") {
       return "Empty";
    } else if (isNaN(Number(testInput))) {
       return "Not a Number";
    } else {
       return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
        let launchStatus = document.getElementById("launchStatus");
        let faultyItems = document.getElementById("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
     
        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || 
            validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
           alert("All fields are required!");
           return;
        }
     
        if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || 
            validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
           alert("Make sure to enter valid information for each field!");
           return;
        }
     
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
     
        if (Number(fuelLevel) < 10000) {
           fuelStatus.innerHTML = "Fuel level too low for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "rgb(199, 37, 78)";
        } else {
           fuelStatus.innerHTML = "Fuel level high enough for launch";
        }
     
        if (Number(cargoMass) > 10000) {
           cargoStatus.innerHTML = "Cargo mass too heavy for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "rgb(199, 37, 78)";
        } else {
           cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
     
        if (Number(fuelLevel) >= 10000 && Number(cargoMass) <= 10000) {
           launchStatus.innerHTML = "Shuttle is Ready for Launch";
           launchStatus.style.color = "rgb(65, 159, 106)";
        }
     
        faultyItems.style.visibility = "visible";
     }
    
     window.addEventListener("load", function() {
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
           event.preventDefault();
           
           let pilotName = document.querySelector("input[name=pilotName]").value;
           let copilotName = document.querySelector("input[name=copilotName]").value;
           let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
           let cargoMass = document.querySelector("input[name=cargoMass]").value;
     
           formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass);
        });
     });   
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
 function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || 
        validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
        return;
    }

    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || 
        validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        return;
    }

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let isReady = true;

    if (Number(fuelLevel) < 10000) {
        fuelStatus.innerHTML = "There is not enough fuel for the journey";
        isReady = false;
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (Number(cargoMass) > 10000) {
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
        isReady = false;
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (isReady) {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        faultyItems.style.visibility = "hidden";
    } else {
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        faultyItems.style.visibility = "visible";
    }
}