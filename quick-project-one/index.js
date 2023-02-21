// Variable created to store image track 
const track = document.getElementById("image-track"); 

// Storing value of where exact mouse click is placed and will update the mouse clicked location
window.onmousedown = e => {
    track.dataset.mouseDownAt = clientX;
}

// Function that takes updated mouse location minus the orginal mouse position
window.onmousemove = e => {
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth/2; // Max width of screen with 50% space on both sides

    // current screen position / max screen width in decimal form (Ex. 43/100)
    const percentage = (mouseDelta / maxDelta) * 100;

    // starts from 0% on the screen and can flucate with wherever the mouse is clicked at and store in the perecentage area
    track.style.transform = `translate(${percentage}%, 0%)`;
}


