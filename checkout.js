//NOT YET IMPLEMENTED
//Will be implemented by Assignment 6B
(function() {
    const selectedItemsContainer = document.querySelector('#selected-items');
    const cart = localStorage.getItem('cart').split('|');
    for(var i=1; i<cart.length; i++) {
      cart[i] = cart[i].replace('_',' ')
      let newEntry = `<div class="cart-item"> ${cart[i]} <button class="remove">X</button></div>`
      selectedItemsContainer.insertAdjacentHTML('beforeend', newEntry);
    }
}());
