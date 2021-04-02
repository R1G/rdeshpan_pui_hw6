(function() {
    const addToCart = document.querySelector("#add-to-cart");
    const viewCart = document.querySelector("#view-cart");
    //LOADING PRODUCT SELECTION
    const productViewContainer = document.querySelector('.product-view');
    const selectedProduct = localStorage.getItem('selectedProduct');
    const productName = selectedProduct.replace('_',' ');

    productViewContainer.insertAdjacentHTML('beforeend', `<h1>${productName}</h1>`);
    var imagePath = "Images/" + selectedProduct + ".jpg";
    productViewContainer.insertAdjacentHTML('beforeend', `<img class="product-image" src=${imagePath}>`);
    viewCart.innerHTML = `View Cart (${localStorage.getItem("cartSize")})`;

    //SIZE SELECTION
    const sizesContainer = document.querySelector('.size-boxes');
    let selectedSizeBox;

    const selectedSize = localStorage.getItem('selectedSize');
    console.log(selectedSize);

    if (selectedSize) {
      selectedSizeBox = document.querySelector(`[data-size=${selectedSize}]`);
      if(selectedSizeBox)
        selectedSizeBox.classList.add('selected-size');
    }

    sizesContainer.addEventListener('click', function (event) {
        if (selectedSizeBox) {
            selectedSizeBox.classList.remove('selected-size');
        }
        selectedSizeBox = event.target;
        selectedSizeBox.classList.add('selected-size');
        localStorage.setItem('selectedSize', event.target.getAttribute('data-size'));
    });

    //COLOR SELECTION
    const colorsContainer = document.querySelector('.color-boxes');
    let selectedColorBox;

    const selectedColor = localStorage.getItem('selectedColor');

    if (selectedColor) {
      selectedColorBox = document.querySelector(`[data-color=${selectedColor}]`);
      if(selectedColorBox)
        selectedColorBox.classList.add('selected-color');
    }

    colorsContainer.addEventListener('click', function (event) {
        if (selectedColorBox) {
            selectedColorBox.classList.remove('selected-color');
        }
        selectedColorBox = event.target;
        selectedColorBox.classList.add('selected-color');
        localStorage.setItem('selectedColor', event.target.getAttribute('data-color'));
    });

    //FINAL PURCHASE
    addToCart.addEventListener('click', function() {
        if(selectedSizeBox && selectedColorBox) {
          let cartSize = parseInt(localStorage.getItem("cartSize"));
          if(addToCart.innerHTML == "Added") {
            addToCart.innerHTML = "Add to Cart";
            cartSize-=1;
            localStorage.setItem("cartSize",cartSize);
          } else {
            addToCart.innerHTML = "Added";
            cartSize+=1;
            localStorage.setItem("cartSize",cartSize);
          }
          viewCart.innerHTML = `View Cart (${localStorage.getItem("cartSize")})`;
        }
    });
}());
