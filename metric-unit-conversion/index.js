
// Input Elements
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

// Output Elements
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");


// Onclick function to output functions
convertBtn.addEventListener("click", function(){
    let userInput = Number(inputEl.value); 
    if (userInput > 0) {
        inputEl.value = "";
        convertLength(userInput);
        convertVolume(userInput);
        convertMass(userInput);
    } 
})

// Function to convert Length
function convertLength(userNum) {
    // Meters to Feet = (userNum Meters * 3.281 Feet)
    const metersToFeet = userNum * 3.281;
    
    // Feet to Meters = (userNum Feet * 3.281 Meters)
    const feetToMeters = userNum * 0.3048;
    
    // Html output of Meter/Feet in p tag
    lengthEl.innerHTML = 
    `${userNum} meters = ${metersToFeet.toFixed(3)} feet | ${userNum} feet = ${feetToMeters.toFixed(3)} meters`
    
}

// Function to convert Volume
function convertVolume(userNum) {
    // Liters to gallons = (userNum liters * 0.264172 gallons)
    const litersToGallons = userNum * 0.264172;
    
    // Gallons to Liters = (userNum gallons * 3.785 liters)
    const gallonsToLiters = userNum * 3.7854;
    
    // Html output of Liters/Gallons
    volumeEl.innerHTML = 
    `${userNum} liters = ${litersToGallons.toFixed(3)} gallons | ${userNum} gallons = ${gallonsToLiters.toFixed(3)} liters`
}

// Function to convert Mass
function convertMass(userNum) {
    // Kilograms to Pounds = (userNum Kilograms * 2.2 Pounds)
    const kiloToPounds = userNum * 2.2;
    
    // Pounds to Kilograms = (userNum Pounds * 0.45359237 Kilograms) 
    const poundsToKilo = userNum * 0.45359237;
    
    // Html output of Kilos/Pounds
    massEL.innerHTML = 
    `${userNum} kilos = ${metersToFeet.toFixed(3)} pounds | ${userNum} pounds = ${feetToMeters.toFixed(3)} kilos`
    
}