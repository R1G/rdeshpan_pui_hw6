//Display every item in the cart
function drawCart(cart, selectedItemsContainer) {
  selectedItemsContainer.innerHTML = '<h1>Your Cart</h1>';
  console.log(cart);
  for(var i=1; i<cart.length; i++) {
    cart[i] = cart[i].replace('_',' ')
    let newEntry = `<div class="cart-item"> ${cart[i]} <button class="remove" id=${i}>X</button></div>`
    selectedItemsContainer.insertAdjacentHTML('beforeend', newEntry);
    
  }
}

(function() {
    const selectedItemsContainer = document.querySelector('#selected-items');
    var cart = localStorage.getItem('cart').split('|');
    drawCart(cart, selectedItemsContainer);

    selectedItemsContainer.addEventListener('click', function (event) { 
      if(event.target.className == 'remove') {
        var deletedIndex = parseInt(event.target.id);
        
        cart.splice(deletedIndex, 1);
        localStorage.setItem('cart',cart.join('|'));
        drawCart(cart, selectedItemsContainer);
      } 
  });
}());

