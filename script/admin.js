
// I am retrieving products from local storage or using default data
let ProductTitle = document.querySelector('Title');
let Desc = document.querySelector('description');
let image = document.querySelector('image-url');
let cont = document.querySelector('content');
let addbtn = document.querySelector('.btn-add')
let shopCart = JSON.parse(localStorage.getItem('admin')) || [];
// let adminOutput = document.querySelector('[data-product]')
// let products = JSON.parse(localStorage.getItem('products'))

//function to add products





//Here I am using fuction display for products 
function displayProduct() {

    console.log(shopCart);

    products.forEach(product =>{

        console.log(product.title);

        adminOutput.innerHTML +=
    
       `
      <div class="card mt-5">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h3 class="card-title">${product.name}</h3>
          <p class="card-text">Price: R${product.price}</p>
          <a href="#" class="btn btn-primary" onclick= 'editProduct(${JSON.stringify(product)})'>EDIT</a>
          <a href="#" class="btn btn-primary" onclick= 'deleteProduct(${JSON.stringify(product)})'>DELETE</a>
        </div>
      </div>
      `
});
}


//I am adding the event listener to the Save Product button
document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('saveChangeBtn').addEventListener('click', function (){
      
      

      let modal = new bootstrap.modal(document.getElementById('exampleModal'));
      modal.hide();
    });
    
});
displayProduct();


function editProduct(product) {
    
  let editModal = new bootstrap.Modal(document.getElementById('editModal'));
  
 
  document.getElementById('editProductName').value = product.name;
  document.getElementById('editProductDescription').value = product.description;
  document.getElementById('editProductImageUrl').value = product.img;
  document.getElementById('editProductPrice').value = product.price;

  
  editModal.show();
console.log(editProduct)
 
  document.getElementById('saveEditChangesBtn').addEventListener('click', function() {
  
    let updatedName = document.getElementById('editProductName').value;
    let updatedDescription = document.getElementById('editProductDescription').value;
    let updatedImageUrl = document.getElementById('editProductImageUrl').value;
    let updatedPrice = document.getElementById('editProductPrice').value;


    product.name = updatedName;
    product.description = updatedDescription;
    product.img = updatedImageUrl;
    product.price = updatedPrice;

   
    adminOutput.innerHTML = '';
    displayProduct();

   
    editModal.hide();
  });
}


//this is the function to delete

function deleteProduct(product) {
    
  console.log('Deleting product:', product);

  
  const index = products.findIndex(p => p.id === product.id);
  if (index !== -1) {
      products.splice(index, 1);
     
      adminOutput.innerHTML = '';
      displayProduct();
     
  }
}
