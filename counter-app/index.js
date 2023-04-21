// intialziing variables with id from HTML doc
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

// increment() function that increments count by 1 each time button is clicked
function increment() {
    count += 1;
    countEl.textContent = count;
}

// save() function that saves current INCREMENTED COUNT and reverts back to zero too start a new count
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
