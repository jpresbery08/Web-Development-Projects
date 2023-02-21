// Variable created to store image track 
const track = document.getElementById("image-track"); 

// Storing value of where exact mouse movement is placed and will update the mouse clicked location
window.onmousedown = e => {
    track.dataset.mouseDownAt = clientX;
}

// Function that takes updated mouse location and subtracts by
window.onmousemove = e => {
    const mouseDelta = parseFloat(track.dataset.mou)
}