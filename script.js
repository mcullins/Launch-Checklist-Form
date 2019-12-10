// Write your JavaScript code here!

window.addEventListener("load", function(){
   const pilot = document.querySelector("input[name='pilotName']");
   const copilot = document.querySelector("input[name='copilotName']");
   const fuelLevel = document.querySelector("input[name='fuelLevel']");
   const cargoMass = document.querySelector("input[name='cargoMass']");
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus")
   const faultyItems = document.getElementById("faultyItems");
   const button = document.getElementById("formSubmit");
   const launchStatus = document.getElementById("launchStatus");
   
   function validateDataEntered(){
      if(pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("Must enter all information");
         event.preventDefault();
      } else if (isNaN(pilot.value) === false || 
          isNaN(copilot.value) === false ||
          isNaN(fuelLevel.value) === true || 
          isNaN(cargoMass.value) === true){
         alert("Must enter valid data type");
         event.preventDefault();  
      }
   }

   function showLaunchStatus(){
      if (fuelLevel.value < 10000){
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML = `Not enough fuel to launch.`
         launchStatus.innerHTML = `Shuttle not ready to launch`;
         launchStatus.style.color = 'Red';
      } else {
         launchStatus.innerHTML = `Shuttle ready to launch!`;
         launchStatus.style.color = 'Green';
      }
      
      if (cargoMass.value > 10000){
         faultyItems.style.visibility = 'visible';
         cargoStatus.innerHTML = `Too much cargo mass to launch.`;
         launchStatus.innerHTML = `Shuttle not ready to launch`;
         launchStatus.style.color = 'Red';
      } else {
         launchStatus.innerHTML = `Shuttle ready to launch!`;
         launchStatus.style.color = 'Green';
      }
   }

   button.addEventListener("click", function(event){
      validateDataEntered();
      showLaunchStatus();

      pilotStatus.innerHTML = `Pilot ${pilot.value} is ready to launch!`
      copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready to launch!`
       
   })

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
         const missionTarget = document.getElementById("missionTarget");
         let index = Math.floor(Math.random() * 6);
         missionTarget.innerHTML =`
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[index].name}</li>
                  <li>Diameter: ${json[index].diameter}</li>
                  <li>Star: ${json[index].star}</li>
                  <li>Distance from Earth: ${json[index].distance}</li>
                  <li>Number of Moons: ${json[index].moons}</li>
               </ol>
            <img src="${json[index].image}">
         `
       })
   });
})


