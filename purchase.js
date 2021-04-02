(function() {
    const addToCart = document.querySelector("#add-to-cart");
    const viewCart = document.querySelector("#view-cart");

    const productViewContainer = document.querySelector('.product-view');
    const selectedProduct = localStorage.getItem('selectedProduct');
    const productName = selectedProduct.replace('_',' ');

    const sizesContainer = document.querySelector('.size-boxes');
    const selectedSize = localStorage.getItem('selectedSize');

    const colorsContainer = document.querySelector('.color-boxes');
    const selectedColor = localStorage.getItem('selectedColor');

    //Loading product user previously selected on products.html page
    productViewContainer.insertAdjacentHTML('beforeend', `<h1>${productName}</h1>`);
    var imagePath = "Images/" + selectedProduct + ".jpg";
    productViewContainer.insertAdjacentHTML('beforeend', `<img class="product-image" src=${imagePath}>`);
    viewCart.innerHTML = `View Cart (${localStorage.getItem("cartSize")})`;

    //If user previously made size/color selections on this page, restore those selections
    //BONUS FUNCTIONALITY FOR 6A
    let selectedSizeBox;
    if (selectedSize) { //SIZE
      selectedSizeBox = document.querySelector(`[data-size=${selectedSize}]`);
      if(selectedSizeBox)
        selectedSizeBox.classList.add('selected-size');
    }
    let selectedColorBox; //COLOR
    if (selectedColor) {
      selectedColorBox = document.querySelector(`[data-color=${selectedColor}]`);
      if(selectedColorBox)
        selectedColorBox.classList.add('selected-color');
    }

    //Add selected class to boxes on click, clearing prior selection if any
    sizesContainer.addEventListener('click', function (event) { //SIZE
        if (selectedSizeBox) {
            selectedSizeBox.classList.remove('selected-size');
        }
        selectedSizeBox = event.target;
        selectedSizeBox.classList.add('selected-size');
        localStorage.setItem('selectedSize', event.target.getAttribute('data-size'));
    });
    colorsContainer.addEventListener('click', function (event) { //COLOR
        if (selectedColorBox) {
            selectedColorBox.classList.remove('selected-color');
        }
        selectedColorBox = event.target;
        selectedColorBox.classList.add('selected-color');
        localStorage.setItem('selectedColor', event.target.getAttribute('data-color'));
    });

    //Allow adding and removing current item from cart and updating cartSize accordingly
    addToCart.addEventListener('click', function() {
        if(selectedSizeBox && selectedColorBox) {
          let cartSize = parseInt(localStorage.getItem("cartSize"));
          if(addToCart.innerHTML == "Added") {
            addToCart.innerHTML = "Add to Cart";
            cartSize-=1;
          } else {
            addToCart.innerHTML = "Added";
            cartSize+=1;
          }
          localStorage.setItem("cartSize",cartSize);
          viewCart.innerHTML = `View Cart (${localStorage.getItem("cartSize")})`; //Show cart size
        }
    });
}());
