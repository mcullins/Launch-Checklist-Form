// Write your JavaScript code here!

window.addEventListener("load", function(){
   let pilot = document.querySelector("input[name='pilotName']");
   let copilot = document.querySelector("input[name='copilotName']");
   let fuelLevel = document.querySelector("input[name='fuelLevel']");
   let cargoMass = document.querySelector("input[name='cargoMass']");
   let button = document.getElementById("formSubmit");

   button.addEventListener("click", function(event){

      if(pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("Must enter all information");
         event.preventDefault();
      }
   })
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
