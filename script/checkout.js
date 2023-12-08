document.addEventListener('DOMContentLoaded', () => {
    // Fetching data from local storage
    let shopCart = JSON.parse(localStorage.getItem('checkout')) || [];
    // Logging to fetch data
    console.log(shopCart);

    // Selecting the table element
    let myCart = document.querySelector('[data-table]');
    let continueCheckoutButton = document.getElementById('continueCheckout');
    let paymentOptionsDiv = document.getElementById('paymentOptions');
    let submitPaymentButton = document.getElementById('submitPayment');
    let paymentMethodSelect = document.getElementById('paymentMethod');

    // Checking if there are items in the shopping cart
    if (shopCart.length > 0) {
        // Creating table rows to display the cart items
        myCart.innerHTML = shopCart.map((item, index) => {
            return `
                <tr>
                    <td><img src="${item.img}" height="50px" width="50px"></td>
                    <td>${item.name}</td>
                    <td>R${item.price}</td>
                </tr>`;
        }).join('');
    } else {
        
        myCart.innerHTML = '<tr><td colspan="3">Shopping cart is empty</td></tr>';
    }

   
    if (continueCheckoutButton) {
        continueCheckoutButton.addEventListener('click', () => {
            
            if (paymentOptionsDiv) {
                paymentOptionsDiv.style.display = 'block';
            }
        });
    }

    // Add event listener for Submit Payment button
    if (submitPaymentButton) {
        submitPaymentButton.addEventListener('click', () => {
            
            let selectedPaymentMethod = paymentMethodSelect ? paymentMethodSelect.value : 'N/A';

           
        
            alert(`Payment submitted using ${selectedPaymentMethod}`);
        });
    }
});
