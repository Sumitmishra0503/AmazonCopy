
export let cart = JSON.parse(localStorage.getItem('cart')) ||

[
    // {
    //     productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    //     quantity: 1,
    // },
    // {
    //     productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    //     quantity:2,
    // }
];

function saveCart() {
    localStorage.setItem('cart' , JSON.stringify(cart));
}
export function updateCartQuantity() {
    let cartQuantity = 0;
  
    cart.forEach( (item) => {
      cartQuantity += item.quantity;
    })

    document.querySelector(`.js-cart-quantity`).innerHTML =  cartQuantity;
    saveCart();
  }


export function addToCart(productId,cartQuantity){
    let matchingItem;
    cart.forEach( (item) => {
    if(item.productId === productId){
      matchingItem = item;
    }
  
    })
  
    if(matchingItem){
      matchingItem.quantity++;
    }
    else{
      cart.push({
        productId :productId,
        quantity: 1,
      })
    }
    saveCart();
  }

  export function removeFromCart(productId){
    let newCart = [];
    cart.forEach( (cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    })
    cart = newCart;
    saveCart();

  }