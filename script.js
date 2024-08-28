// Import the required functions from scriptHelper.js
import { myFetch, pickPlanet, addDestinationInfo } from './scriptHelper.js';

// Wait for the DOM to finish loading
window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document, 
            selectedPlanet.name, 
            selectedPlanet.diameter, 
            selectedPlanet.star, 
            selectedPlanet.distance, 
            selectedPlanet.moons, 
            selectedPlanet.image
        );
    });
});
