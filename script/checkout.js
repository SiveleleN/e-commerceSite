//fetching data from local storage
document.addEventListener('DOMContentLoaded',() =>{
    let shopCart = JSON.parse(localStorage.getItem('checkout')) || [] 
    //I log to fetch data
    console.log(shopCart);
    //selecting the table element
    let myCart = document.querySelector('[data-table]');
    // let continueCheckoutButton = document.getElementById('continueCheckout');
    // let paymentOptionsDiv = document.getElementById('paymentOptions');
    // let submitPaymentButton = document.getElementById('submitPayment');
    // let paymentMethodSelect = document.getElementById('paymentMethod');
    
//here I am checking if I have items in my shopping cart
if (shopCart.length > 0) {
//doing a table row to display my cart
myCart.innerHTML = shopCart.map((item, index)=>{
    return`
    <tr>
    <td><img src="${item.img}" height="50px" width = "50px"></td>
      <td>${item.name}</td>
      <td>R${item.price}</td>
      
     
    </tr>`;
    //I am using join to convert the array of strings in a single string here
}).join('');
   //
} else { 
    //I will be displayin a name for my shopping cart
    myCart.innerHTML = '<tr><td colspan ="6">Shoping cart</td></tr>';
     }
      // Add event listener for Continue Checkout button
        continueCheckoutButton.addEventListener('click', () => {

         // Additional logic for continuing with checkout
        // For example, you can show/hide elements or navigate to a checkout page
        paymentOptionsDiv.style.display = 'block';
    });
       // Add event listener for Submit Payment button
       submitPaymentButton.addEventListener('click', () => {
        // Get the selected payment method
        let selectedPaymentMethod = paymentMethodSelect.value;
        
        // Additional logic for submitting payment
        // For example, you can process the payment and show a confirmation message
        alert(`Payment submitted using ${selectedPaymentMethod}`);
    });

})