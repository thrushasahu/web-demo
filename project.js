document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    let cartTotal = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const product = document.querySelector(`.product[data-id="${productId}"]`);
            const productName = product.querySelector('h3').innerText;
            const productPrice = parseFloat(product.querySelector('p').innerText.replace('$', ''));

            const cartItem = document.createElement('li');
            cartItem.innerHTML = `${productName} - $${productPrice}`;
            cartItemsList.appendChild(cartItem);

            cartTotal += productPrice;
            document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert(`Total: $${cartTotal.toFixed(2)}`);
    });
});
