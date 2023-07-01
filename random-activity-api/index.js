

// Click Event Listener 
document.getElementById("get-activity").addEventListener("click", function() {
  // Fetching API and then rendering activity property to screen
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
    })
})