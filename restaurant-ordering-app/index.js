import { menuArray } from "./data.js"

// ID from HTML
const yourOrder = document.getElementById("your-order")    
const paymentDetails = document.getElementById("payment-details")


// --------------  General Functions ------------- //

// Function that iterates throw buttons with that specfic class and disables them
const disableButtons = () => {
    var buttons = document.getElementsByClassName("disable-button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }







// Click listeners for add, remove, complete order, and pay button
document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        addItems(e.target.dataset.add)
    } else if (e.target.dataset.remove) {
        removeItems(e.target.dataset.remove)
    } else if (e.target.id === "complete-order") {
        completeOrderClick()
    } else if (e.target.id === "pay-btn") {
        payBtnClick(e)
    } else if(e.target.dataset.ingredient) {
        showIngredients(e.target.dataset.ingredient)
    }
})


// Show Ingredients Function
function showIngredients(itemId){
    const menuItemObj = menuArray.filter(function(menu){
        return menu.uuid === itemId;
    })[0]
    
    const ingredient = document.getElementById(`ingredients-${itemId}`);
    ingredient.classList.toggle("hidden");
    
    
}



// Rendering Menu Items
function getMenuItem() {
   let menuItems = ''
        // Heading
        
   menuArray.forEach(function(menu){
  
       menuItems += `
                    <!-- Food Menu items -->
                    <div class="menu-items" id="menu-items">

                        <!-- Item image -->
                        <div class="emoji">${menu.emoji}</div>

                        <!-- Name, Ingriedients, and Price -->
                        <div class="description">
                            <h1 class="name" id="name">${menu.name}</h1>
                            <p>
                                Ingredients 
                                <i  
                                    id ="icon"
                                    data-ingredient = "${menu.uuid}"
                                    class="fa-solid fa-caret-down"></i>
                            </p>
                            <p id="ingredients-${menu.uuid}" 
                               class="ingredients hidden">${menu.ingredients.join("")} 
                            </p>
                            <h2 class="price" id="price"> $ ${menu.price}</h2>
                        </div>

                        <!-- Add item button -->
                        <div class="plus-btn">
                            <button 
                                class="add-btn disable-button" 
                                id="add-btn" 
                                data-add = "${menu.uuid}">
                                +
                            </button>
                        </div>
                    </div>`
   }) 
   return menuItems
}

// Render Function for menu items
function renderMenu() {
  document.getElementById("menu").innerHTML = getMenuItem();
}
renderMenu()



// Add item Function
function addItems(itemId) {
    
    const menuItemObj = menuArray.filter(function(menu){
        return menu.uuid === itemId;
    })[0]
    
    menuItemObj.quantity += 1

    renderOrder()
    
}

// Remove item Function
function removeItems(itemId){
    const menuItemObj = menuArray.filter(function(menu){
        return menu.uuid === itemId;
    })[0]
    
    menuItemObj.quantity -= 1
    
    renderOrder()
    
}








// Function to render out each item and quantity based on what the user wants
function getOrder(){
    let orderRender = ''  
    let totalPrice = 0
        
        // If totalPrice is greater than zero, render this info too screen
        menuArray.forEach(function(item){
            if(item.quantity > 0){
                totalPrice += item.price * item.quantity
                orderRender += `
                        <div class="order-items">
                            <h1>${item.name} ( ${item.quantity} )
                                <span class="remove-item" id="remove-item" data-remove=${item.uuid}>remove</span>
                            <h1/>
                            <h2 class="item-price" id="item-price">$ ${item.quantity * item.price}</h2>
                        </div>                
                        `
                }  
            })
            
            if(totalPrice === 0) {
            yourOrder.style.display = 'none'
            } else {
            yourOrder.style.display = 'block'
            document.getElementById('total-price').innerHTML = `$ ${totalPrice}`
            }  
            
        return orderRender      
                   
}

                       
      
   
function renderOrder() {
   document.getElementById("order").innerHTML = getOrder();
}

renderOrder()
    





 
 
function completeOrderClick() {

    // Disabling add buttons
    disableButtons();
    // Display Payment Section
    paymentDetails.style.display = "block";
}
                
                






function payBtnClick() {
    const customerInfo =  new FormData(document.getElementById("customer-info"));   
    


    document.getElementById("customer-info").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent the form from submitting
    
        // Validate the form inputs
        var customerName = document.getElementById("customerName").value;
        var cardNumber = document.getElementById("cardNumber").value;
        var cardCVV = document.getElementById("cardCVV").value;
    
        if (customerName.trim() === "" || cardNumber.trim() === "" || cardCVV.trim() === "" ) {
          alert("Please fill in all required fields");
          return;
        } else {
            // If all required fields are filled, proceed with form submission

        yourOrder.style.display = "none";
    
    
        // Clear Input Field 
        setTimeout(function(){
            paymentDetails.style.display = "none";
            
        }, 500)
        
        setTimeout(function(){
        // Render out processing screen once form is submitted
            document.getElementById("processing").classList.toggle("hidden");
        }, 501)
        
        
        
        // Render out customer name and say thank you
        setTimeout(function(){
            const customerName = document.getElementById("customerName").value;

            // Disabling add buttons
            disableButtons();

            // Display processing screen once user enters in info
            document.getElementById("processing").classList.toggle("hidden");        
    
                
                // Display thank you message
                document.getElementById("thank-you").style.display = "flex";
                document.getElementById("thank-you").innerHTML = 
                            `Thanks, ${customerName}! Your order is on its way! `;      
        }, 5000)
        }
    
        
      });
}
























