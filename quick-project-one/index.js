// Variable created to store image track 
const track = document.getElementById("image-track"); 

// Storing value of where exact mouse click is placed and will update the mouse clicked location
window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;

}
// Setting orignal value back to zero once mouse is released
window.onmouseup = () => {
    track.dataset.mouseDownAt = "0"; 

    // Storing the percentage of first click and drag when mouse is released
    track.dataset.prevPercentage = track.dataset.percentage;
}

// Function that takes updated mouse location minus the orginal mouse position
window.onmousemove = e => {
    // This will return the value (stopping the code from progressing) so that the track doesnt move if the mouse HASNT been clicked
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2; // Max width of screen with 50% space on both sides

    // current screen position / max screen width in decimal form (Ex. 43/100)
    const percentage = (mouseDelta / maxDelta) * -100,

        // this value becomes the new start point instead of zero 
        // (Ex. percentage = 0 + prevPercentage = 43 would make next Percentage equal 43 which would be the new percentage aka STARTING POINT)
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
        // setting the min and max value of screen when draggging
        
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
        
        // Constantly storing the progression of the mouse movement which allows for the progression to not revert back too the beginning of the intiated drag
          track.dataset.percentage = nextPercentage;

    // starts from 0% on the screen and can flucate with wherever the mouse is clicked at and store in the perecentage area
    // track.style.transform = `translate(${nextPercentage}%, -50%)`;
    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    // Adding image object position effect
    for(const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage} % center`
        }, { duration: 1200, fill: "forwards" });
    }
}



