const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// Variable acquired form IDs in div
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

// Function that returns ONE random character
function getRandCharacter() {
    let randomIndex = Math.floor( Math.random() * characters.length);
    return characters[randomIndex];    
}

// Function that runs a for looop and each time a new character is produced since 
function randomPassword() {

    // Generating First Password
    let password = "";
       for(let i = 0; i < 14; i++){
        password += getRandCharacter();
    }
     passwordOne.textContent = password;
     
    //  Generating Second Password
      let anotherPassword = "";
       for(let i = 0; i < 14; i++){
        anotherPassword += getRandCharacter();
    }
    // Storing of Second Random Passoword
     passwordTwo.textContent = anotherPassword;
}





