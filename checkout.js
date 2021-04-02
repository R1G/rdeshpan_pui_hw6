
(function() {
    const selectedItemsContainer = document.querySelector('#selected-items');
    const cart = localStorage.getItem('cart');
    for(var i=0; i<cart.length; i++) {
      selectedItemsContainer.insertAdjacentHTML('beforeend', `<div class="cart-item"> ${cart[i].name} (${cart[i].size}, ${cart[i].color}) [Price]</div>`);
    }
}());
